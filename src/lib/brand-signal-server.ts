import { isRecord, type BrandAnswers, type BrandReport } from './brand-signal';

const supabaseUrl = () => process.env.SUPABASE_URL?.replace(/\/$/, '');
const supabaseKey = () => process.env.SUPABASE_SERVICE_ROLE_KEY;

export function isLeadStorageConfigured() {
  return Boolean(supabaseUrl() && supabaseKey());
}

async function supabaseRequest(path: string, init: RequestInit) {
  const url = supabaseUrl();
  const key = supabaseKey();
  if (!url || !key) throw new Error('Supabase server credentials are not configured.');

  const response = await fetch(`${url}/rest/v1/${path}`, {
    ...init,
    headers: {
      apikey: key,
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
      ...init.headers,
    },
    cache: 'no-store',
    signal: AbortSignal.timeout(10000),
  });
  if (!response.ok) {
    console.error(`Supabase request failed (${response.status}).`);
    throw new Error('The secure database request failed.');
  }
  return response;
}

export async function persistBrandReport(
  sessionId: string,
  answers: BrandAnswers,
  report: BrandReport,
  mode: 'ai' | 'mock',
) {
  await supabaseRequest('rpc/save_brand_signal_report', {
    method: 'POST',
    body: JSON.stringify({ p_session_id: sessionId, p_answers: answers, p_report: report, p_mode: mode }),
  });
}

export async function getBrandSessionAnswers(sessionId: string): Promise<BrandAnswers> {
  const response = await supabaseRequest(
    `brand_sessions?select=answers&id=eq.${encodeURIComponent(sessionId)}`,
    { method: 'GET' },
  );
  const rows: unknown = await response.json();
  if (!Array.isArray(rows) || !isRecord(rows[0]) || !isRecord(rows[0].answers)) {
    throw new Error('The saved brand session could not be found.');
  }
  const answers = rows[0].answers;
  if (
    typeof answers.brandName !== 'string' ||
    typeof answers.industry !== 'string' ||
    typeof answers.audience !== 'string' ||
    typeof answers.ageGroup !== 'string' ||
    typeof answers.problem !== 'string' ||
    typeof answers.personality !== 'string' ||
    !Array.isArray(answers.goals) ||
    !answers.goals.every((goal) => typeof goal === 'string') ||
    !Array.isArray(answers.services) ||
    !answers.services.every((service) => typeof service === 'string')
  ) {
    throw new Error('The saved brand session is incomplete.');
  }
  return {
    brandName: answers.brandName,
    industry: answers.industry,
    audience: answers.audience,
    ageGroup: answers.ageGroup,
    problem: answers.problem,
    personality: answers.personality,
    goals: answers.goals,
    services: answers.services,
  };
}

export async function persistBrandLead(
  values: {
    fullName: string;
    email: string;
    company: string;
    website: string | null;
    budget: string;
    timeline: string;
    marketingConsent: boolean;
    qualificationScore: number;
  },
  sessionId: string,
) {
  const response = await supabaseRequest('agency_leads', {
    method: 'POST',
    headers: { Prefer: 'return=minimal' },
    body: JSON.stringify({
      session_id: sessionId,
      full_name: values.fullName,
      email: values.email,
      company: values.company,
      website: values.website,
      budget: values.budget,
      timeline: values.timeline,
      marketing_consent: values.marketingConsent,
      qualification_score: values.qualificationScore,
    }),
  });
  return response.ok;
}

export async function notifyAgency(lead: {
  fullName: string;
  email: string;
  company: string;
  budget: string;
  timeline: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const agencyEmail = process.env.BRAND_SIGNAL_NOTIFY_EMAIL;
  const from = process.env.BRAND_SIGNAL_FROM_EMAIL;
  if (!apiKey || !agencyEmail || !from) return false;

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from,
      to: [agencyEmail],
      subject: `New Brand Signal enquiry — ${lead.company}`,
      text: [
        `Name: ${lead.fullName}`,
        `Email: ${lead.email}`,
        `Company: ${lead.company}`,
        `Budget: ${lead.budget}`,
        `Timeline: ${lead.timeline}`,
      ].join('\n'),
    }),
    signal: AbortSignal.timeout(10000),
  });
  if (!response.ok) {
    console.error(`Agency notification failed (${response.status}).`);
    return false;
  }
  return true;
}
