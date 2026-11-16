export type BrandAnswers = {
  brandName: string;
  industry: string;
  audience: string;
  ageGroup: string;
  problem: string;
  personality: string;
  goals: string[];
  services: string[];
};

export type BrandColor = {
  name: string;
  hex: string;
  purpose: string;
};

export type BrandCampaign = {
  title: string;
  idea: string;
  visual: string;
  headline: string;
  audience: string;
  channel: string;
  successMeasure: string;
};

export type BrandActionStep = {
  window: string;
  focus: string;
  actions: string[];
  deliverable: string;
};

export type BrandReport = {
  positioning: string;
  story: string;
  values: string[];
  opportunities: string[];
  personality: string;
  audienceInsight: {
    motivation: string;
    barrier: string;
    trustCue: string;
    validation: string;
  };
  colors: BrandColor[];
  typography: string;
  visualDirection: string;
  tone: string;
  messaging: string;
  messagePillars: { title: string; message: string; evidence: string }[];
  sampleCopy: { website: string; social: string; launch: string };
  taglines: string[];
  headline: string;
  photography: string;
  graphicStyle: string;
  composition: string;
  campaigns: BrandCampaign[];
  recommendations: { service: string; reason: string }[];
  actionPlan: BrandActionStep[];
};

export type BrandGeneration = {
  sessionId: string;
  report: BrandReport;
  mode: 'ai' | 'mock';
  persisted: boolean;
  leadCaptureEnabled: boolean;
};

export type BrandLead = {
  fullName: string;
  email: string;
  company: string;
  website: string;
  budget: string;
  timeline: string;
  marketingConsent: boolean;
};

export const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

export function isBrandReport(value: unknown): value is BrandReport {
  if (!isRecord(value)) return false;
  const isString = (item: unknown) => typeof item === 'string' && item.length > 0;
  const stringArray = (item: unknown) =>
    Array.isArray(item) && item.length > 0 && item.every(isString);
  const isAudienceInsight =
    isRecord(value.audienceInsight) &&
    isString(value.audienceInsight.motivation) &&
    isString(value.audienceInsight.barrier) &&
    isString(value.audienceInsight.trustCue) &&
    isString(value.audienceInsight.validation);
  const isSampleCopy =
    isRecord(value.sampleCopy) &&
    isString(value.sampleCopy.website) &&
    isString(value.sampleCopy.social) &&
    isString(value.sampleCopy.launch);
  return (
    isString(value.positioning) &&
    isString(value.story) &&
    stringArray(value.values) &&
    stringArray(value.opportunities) &&
    isString(value.personality) &&
    isAudienceInsight &&
    Array.isArray(value.colors) &&
    value.colors.length >= 3 &&
    value.colors.every(
      (color) =>
        isRecord(color) &&
        isString(color.name) &&
        isString(color.purpose) &&
        typeof color.hex === 'string' &&
        /^#[0-9a-f]{6}$/i.test(color.hex),
    ) &&
    isString(value.typography) &&
    isString(value.visualDirection) &&
    isString(value.tone) &&
    isString(value.messaging) &&
    Array.isArray(value.messagePillars) &&
    value.messagePillars.length >= 3 &&
    value.messagePillars.every(
      (pillar) =>
        isRecord(pillar) &&
        isString(pillar.title) &&
        isString(pillar.message) &&
        isString(pillar.evidence),
    ) &&
    isSampleCopy &&
    stringArray(value.taglines) &&
    isString(value.headline) &&
    isString(value.photography) &&
    isString(value.graphicStyle) &&
    isString(value.composition) &&
    Array.isArray(value.campaigns) &&
    value.campaigns.length >= 3 &&
    value.campaigns.every(
      (campaign) =>
        isRecord(campaign) &&
        isString(campaign.title) &&
        isString(campaign.idea) &&
        isString(campaign.visual) &&
        isString(campaign.headline) &&
        isString(campaign.audience) &&
        isString(campaign.channel) &&
        isString(campaign.successMeasure),
    ) &&
    Array.isArray(value.recommendations) &&
    value.recommendations.every(
      (recommendation) =>
        isRecord(recommendation) &&
        isString(recommendation.service) &&
        isString(recommendation.reason),
    ) &&
    Array.isArray(value.actionPlan) &&
    value.actionPlan.length >= 4 &&
    value.actionPlan.every(
      (step) =>
        isRecord(step) &&
        isString(step.window) &&
        isString(step.focus) &&
        stringArray(step.actions) &&
        isString(step.deliverable),
    )
  );
}

export function createMockReport(answers: BrandAnswers): BrandReport {
  const name = answers.brandName.trim();
  const industry = answers.industry.trim();
  const audience = answers.audience.trim() || 'people looking for a better option';
  const problem = answers.problem.trim() || 'a category that feels ready for a fresh point of view';
  const character = answers.personality || 'Bold & Rebellious';
  const isLuxury = /luxury|elegant|minimal/i.test(character);
  const colors: BrandColor[] = isLuxury
    ? [
        { name: 'Ink', hex: '#172126', purpose: 'A composed, confident foundation.' },
        { name: 'Warm ivory', hex: '#F1E8D6', purpose: 'Space and clarity around the story.' },
        { name: 'Burnished red', hex: '#B74631', purpose: 'A precise, human moment of contrast.' },
      ]
    : [
        { name: 'Signal cobalt', hex: '#2E4C8B', purpose: 'A distinctive anchor with conviction.' },
        { name: 'Studio cream', hex: '#F1E8D6', purpose: 'An open, warm canvas for the brand.' },
        { name: 'Action red', hex: '#FA2D19', purpose: 'A confident cue that earns attention.' },
      ];
  const serviceReasons: Record<string, string> = {
    'Branding & Identity': 'A clear identity makes your difference recognizable at every touchpoint.',
    'Website Development': 'A considered website turns the brand story into a useful, persuasive experience.',
    'Social Media Marketing': 'A consistent social presence helps the right audience discover and remember you.',
    'Performance Marketing': 'Focused campaigns can test your proposition and bring qualified attention.',
    'Influencer Marketing': 'Trusted voices can introduce the brand to communities already close to your audience.',
    'Creative Campaigns': 'A distinctive campaign gives your new direction a memorable public debut.',
  };
  const recommendations = (answers.services.length ? answers.services : ['Branding & Identity'])
    .slice(0, 4)
    .map((service) => ({
      service,
      reason: serviceReasons[service] ?? 'A focused creative partnership can help turn your direction into momentum.',
    }));
  const actionPlan: BrandActionStep[] = [
    { window: 'Week 01', focus: 'Listen before you lock the strategy.', actions: ['Interview five people who match the intended audience.', 'Review competitor promises and customer reviews.', 'Separate assumptions from evidence.'], deliverable: 'A one-page insight summary with the top three needs to validate.' },
    { window: 'Week 02', focus: 'Choose a clear, ownable position.', actions: ['Refine the audience and category tension.', 'Test two positioning routes with target customers.', 'Choose the promise and proof points you can support.'], deliverable: 'An approved positioning statement and message hierarchy.' },
    { window: 'Week 03', focus: 'Build a recognizable identity system.', actions: ['Explore two visual directions against the brief.', 'Check color contrast and type legibility.', 'Prototype the identity on real customer touchpoints.'], deliverable: 'A tested starter identity and practical usage principles.' },
    { window: 'Week 04', focus: 'Launch, learn, and improve.', actions: ['Publish one focused campaign concept.', 'Track the campaign success measures in this report.', 'Collect customer questions and refine the next iteration.'], deliverable: 'A launch kit and a short learnings report.' },
  ];

  return {
    positioning: `${name} brings a more considered point of view to ${industry.toLowerCase()}—for ${audience} who want more than the expected. The opportunity is to make ${problem} the beginning of a recognizable, ownable brand experience.`,
    story: `${name} exists to challenge the familiar answer in ${industry.toLowerCase()}. Built around ${problem}, the brand can turn a practical need into a feeling people recognize, trust, and choose again.`,
    values: ['Clarity over noise', 'Character with purpose', 'Progress made tangible'],
    opportunities: [
      `Own a sharper perspective on ${problem}.`,
      `Build a visual cue that feels unmistakably ${name}.`,
      `Make the experience more relevant to ${audience}.`,
    ],
    personality: `${character}, grounded by clarity and an approachable point of view.`,
    audienceInsight: {
      motivation: `Hypothesis — ${audience} may be looking for an easier, more rewarding way to ${problem.toLowerCase()}. Validate this with customer interviews.`,
      barrier: 'Hypothesis — familiar category choices may feel interchangeable or hard to trust. Treat this as a question to test, not market research.',
      trustCue: 'Show the people, craft, and decisions behind the offer; make the value easy to see.',
      validation: 'Interview five target customers and test these motivations and barriers before committing to a campaign.',
    },
    colors,
    typography: 'Pair a confident, expressive display sans with a highly readable workhorse sans. Keep headlines compact and decisive; let body copy breathe.',
    visualDirection: `Give ${name} a recognizable visual signature: bold type, a controlled color system, and one repeatable graphic gesture that brings its ${industry.toLowerCase()} point of view to life.`,
    tone: 'Direct, thoughtful, and distinctive. Say something specific, make it easy to understand, and leave the audience with a reason to remember.',
    messaging: `Lead with the shift ${name} makes possible. Replace broad claims with clear, human language about how life improves for ${audience}.`,
    messagePillars: [
      { title: 'The point of view', message: `${name} sees ${industry.toLowerCase()} differently.`, evidence: 'Support it with a real founder belief, product choice, or customer story.' },
      { title: 'The practical difference', message: `Make ${problem.toLowerCase()} feel more manageable.`, evidence: 'Collect a concrete feature, process detail, or customer example; do not claim results you have not measured.' },
      { title: 'The human outcome', message: `Give ${audience} a reason to choose with confidence.`, evidence: 'Gather verified customer language, permissioned reviews, or a specific service commitment.' },
    ],
    sampleCopy: {
      website: `A better point of view on ${industry.toLowerCase()}. ${name} helps ${audience.toLowerCase()} move beyond ${problem.toLowerCase()}.`,
      social: `The expected answer is easy. The right answer should feel like you. Meet ${name} — a new signal in ${industry.toLowerCase()}.`,
      launch: `${name} is here to make ${industry.toLowerCase()} feel more considered. Built for ${audience.toLowerCase()}, and just getting started.`,
    },
    taglines: [
      `${name}: a clearer kind of different.`,
      `Make room for a better ${industry.toLowerCase()}.`,
      `Less expected. More ${name}.`,
    ],
    headline: `A new point of view on ${industry.toLowerCase()}.`,
    photography: 'Use natural, directional light and tactile detail. Show real people and products in moments with a little movement; avoid overly polished stock-like setups.',
    graphicStyle: 'A restrained editorial grid, oversized typography, purposeful rules, and one bold, repeatable symbol or crop.',
    composition: 'Balance generous negative space with one assertive focal point. Let image and type occasionally break the grid, then return to a calm alignment.',
    campaigns: [
      {
        title: 'The Better Question',
        idea: `Reframe “${problem}” as an invitation to expect more.`,
        visual: 'Start with a recurring question-led typographic poster, then extend the answer into a landing page and candid customer imagery.',
        headline: `What if ${problem} could feel different?`,
        audience: `People in ${audience.toLowerCase()} who feel underserved by the usual options.`,
        channel: 'Short-form social, a campaign landing page, and selected out-of-home placements.',
        successMeasure: 'Track qualified landing-page visits and code how often interviewees repeat the campaign idea; set a baseline before launch.',
      },
      {
        title: 'Made For Your Next',
        idea: `Put ${audience} at the center of the next chapter in ${industry.toLowerCase()}.`,
        visual: 'A set of candid, high-contrast portraits paired with confident, concise statements.',
        headline: 'For where you are going.',
        audience: `The ${answers.ageGroup} audience exploring a more relevant ${industry.toLowerCase()} choice.`,
        channel: 'Customer-led social stories and a concise launch email.',
        successMeasure: 'Compare saves, meaningful replies, email click-throughs, and qualified enquiries with the pre-launch baseline.',
      },
      {
        title: 'A Signal Of Its Own',
        idea: `Turn ${name}'s most recognizable brand cue into a symbol of its point of view.`,
        visual: 'A graphic-led launch system built from one distinctive color, shape, and memorable phrase.',
        headline: 'You will know it when you see it.',
        audience: `New and returning customers who should recognize ${name} across touchpoints.`,
        channel: 'A coordinated website, social, packaging, and launch-campaign rollout.',
        successMeasure: 'Record branded search and direct visits; ask a consistent recognition question before and after launch.',
      },
    ],
    recommendations,
    actionPlan,
  };
}
