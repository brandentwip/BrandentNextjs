import { NextResponse } from 'next/server';
import { isRecord } from '@/lib/brand-signal';
import { getBrandSessionAnswers, isLeadStorageConfigured, notifyAgency, persistBrandLead } from '@/lib/brand-signal-server';

export const runtime = 'nodejs';

const budgets = ['Under ₹1 lakh', '₹1–3 lakh', '₹3–7 lakh', '₹7–15 lakh', '₹15 lakh+'];
const timelines = ['As soon as possible', 'Within 1–3 months', 'Within 3–6 months', 'Just exploring'];

export async function POST(request: Request) {
  if (!isLeadStorageConfigured()) {
    return NextResponse.json(
      { error: 'Lead capture is not enabled yet. Please contact the studio directly.' },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).byteLength > 8000) {
      return NextResponse.json({ error: 'Your enquiry is too long. Please shorten it and try again.' }, { status: 413 });
    }
    body = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: 'Please submit valid contact details.' }, { status: 400 });
  }
  if (!isRecord(body) || !isRecord(body.lead) || typeof body.sessionId !== 'string') {
    return NextResponse.json({ error: 'Please submit valid contact details.' }, { status: 400 });
  }

  const lead = body.lead;
  const fullName = typeof lead.fullName === 'string' ? lead.fullName.trim() : '';
  const email = typeof lead.email === 'string' ? lead.email.trim().toLowerCase() : '';
  const company = typeof lead.company === 'string' ? lead.company.trim() : '';
  const website = typeof lead.website === 'string' ? lead.website.trim() : '';
  const budget = typeof lead.budget === 'string' ? lead.budget : '';
  const timeline = typeof lead.timeline === 'string' ? lead.timeline : '';
  const marketingConsent = lead.marketingConsent === true;
  const emailLooksValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const websiteLooksValid = !website || /^https?:\/\/\S+\.\S+/.test(website);

  if (
    fullName.length < 2 ||
    fullName.length > 120 ||
    !emailLooksValid ||
    email.length > 254 ||
    company.length < 2 ||
    company.length > 160 ||
    !websiteLooksValid ||
    !budgets.includes(budget) ||
    !timelines.includes(timeline) ||
    !/^[0-9a-f-]{36}$/i.test(body.sessionId)
  ) {
    return NextResponse.json({ error: 'Please check the required fields and try again.' }, { status: 400 });
  }

  let answers;
  try {
    answers = await getBrandSessionAnswers(body.sessionId);
  } catch {
    return NextResponse.json({ error: 'Your brand report could not be found. Please create it again.' }, { status: 404 });
  }
  const qualificationScore =
    [1, 2, 3, 3, 3][budgets.indexOf(budget)] +
    [3, 2, 1, 1][timelines.indexOf(timeline)] +
    (answers.goals.some((goal) => /launch|rebrand/i.test(String(goal))) ? 2 : 1) +
    (answers.services.length ? 2 : 1);
  const leadDetails = { fullName, email, company, website, budget, timeline, marketingConsent };
  try {
    await persistBrandLead(
      { ...leadDetails, website: website || null, qualificationScore },
      body.sessionId,
    );
  } catch {
    return NextResponse.json(
      { error: 'We could not save your enquiry just now. Please try again or email the studio.' },
      { status: 502 },
    );
  }

  let notificationSent = false;
  try {
    notificationSent = await notifyAgency(leadDetails);
  } catch (error) {
    console.error('Brand Signal notification failed:', error);
  }
  return NextResponse.json({ submitted: true, notificationSent });
}
