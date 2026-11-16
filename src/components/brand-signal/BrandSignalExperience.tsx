'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { isBrandReport, type BrandAnswers, type BrandColor, type BrandGeneration, type BrandLead, type BrandReport } from '@/lib/brand-signal';
import { getBrandVisualReferences } from '@/lib/brand-signal-references';

const REPORT_STORAGE_KEY = 'brand-signal-report-v2';

const industries = ['Fashion & Lifestyle', 'Food & Beverage', 'Technology & SaaS', 'Beauty & Wellness', 'Real Estate', 'Healthcare', 'Other'];
const personalities = ['Bold & Rebellious', 'Luxury & Minimal', 'Playful & Expressive', 'Futuristic & Disruptive', 'Elegant & Sophisticated', 'Experimental & Artistic'];
const goals = ['Launch a new brand', 'Rebrand an existing business', 'Stand out from competitors', 'Increase brand awareness', 'Improve conversions', 'Build a stronger digital presence'];
const services = ['Branding & Identity', 'Website Development', 'Social Media Marketing', 'Performance Marketing', 'Influencer Marketing', 'Creative Campaigns'];
const budgets = ['Under ₹1 lakh', '₹1–3 lakh', '₹3–7 lakh', '₹7–15 lakh', '₹15 lakh+'];
const timelines = ['As soon as possible', 'Within 1–3 months', 'Within 3–6 months', 'Just exploring'];
const generationStages = [
  { id: 'brief', label: 'Reading your brand brief' },
  { id: 'generation', label: 'Developing your creative direction' },
  { id: 'review', label: 'Checking the details' },
  { id: 'saving', label: 'Preparing your brand report' },
];

type Screen = 'intro' | 'discovery' | 'generating' | 'report' | 'lead' | 'success';

const initialAnswers: BrandAnswers = {
  brandName: '',
  industry: '',
  audience: '',
  ageGroup: '',
  problem: '',
  personality: '',
  goals: [],
  services: [],
};
const initialLead: BrandLead = {
  fullName: '',
  email: '',
  company: '',
  website: '',
  budget: '',
  timeline: '',
  marketingConsent: false,
};

function toggleValue(values: string[], value: string) {
  return values.includes(value) ? values.filter((item) => item !== value) : [...values, value];
}

function OptionButton({
  value,
  selected,
  onClick,
  className = '',
}: {
  value: string;
  selected: boolean;
  onClick: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      className={`bs-option ${selected ? 'is-selected' : ''} ${className}`}
      aria-pressed={selected}
      onClick={onClick}
    >
      <span>{value}</span>
      <span aria-hidden="true" className="bs-option-mark">{selected ? '×' : '↗'}</span>
    </button>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  required = false,
  type = 'text',
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  type?: string;
}) {
  return (
    <label className="bs-field">
      <span>{label}{required && <span aria-hidden="true"> *</span>}</span>
      <input
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
        required={required}
        autoComplete={type === 'email' ? 'email' : undefined}
      />
    </label>
  );
}

function ReportChapter({ number, eyebrow, title, children, className = '' }: {
  number: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`bs-chapter ${className}`}>
      <div className="bs-chapter-number">{number}</div>
      <div className="bs-chapter-content">
        <p className="bs-kicker">{eyebrow}</p>
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}

function Swatch({ color, selected, onSelect, onCopy, copied }: {
  color: BrandColor;
  selected: boolean;
  onSelect: () => void;
  onCopy: () => void;
  copied: boolean;
}) {
  return (
    <div className={`bs-swatch ${selected ? 'is-selected' : ''}`}>
      <button
        type="button"
        className="bs-swatch-pick"
        onClick={onSelect}
        aria-pressed={selected}
        aria-label={`Use ${color.name}, ${color.hex}`}
      >
        <span className="bs-swatch-color" style={{ backgroundColor: color.hex }} />
        <span className="bs-swatch-info"><strong>{color.name}</strong><small>{color.hex}</small><small>{color.purpose}</small></span>
      </button>
      <button type="button" className="bs-swatch-copy" onClick={onCopy}>{copied ? 'COPIED ✓' : 'COPY HEX'}</button>
    </div>
  );
}

export default function BrandSignalExperience() {
  const [screen, setScreen] = useState<Screen>('intro');
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(initialAnswers);
  const [otherIndustrySelected, setOtherIndustrySelected] = useState(false);
  const [generation, setGeneration] = useState<BrandGeneration | null>(null);
  const [lead, setLead] = useState(initialLead);
  const [error, setError] = useState('');
  const [activeStage, setActiveStage] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [copied, setCopied] = useState(false);
  const [copiedHex, setCopiedHex] = useState('');
  const [saved, setSaved] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    try {
      const savedReport = localStorage.getItem(REPORT_STORAGE_KEY);
      if (!savedReport) return;
      const parsed = JSON.parse(savedReport) as { generation?: BrandGeneration; answers?: BrandAnswers };
      if (
        parsed.generation?.sessionId &&
        isBrandReport(parsed.generation.report) &&
        parsed.answers &&
        typeof parsed.answers.brandName === 'string' &&
        typeof parsed.answers.industry === 'string' &&
        typeof parsed.answers.audience === 'string' &&
        typeof parsed.answers.ageGroup === 'string' &&
        typeof parsed.answers.problem === 'string' &&
        typeof parsed.answers.personality === 'string' &&
        Array.isArray(parsed.answers.goals) &&
        parsed.answers.goals.every((goal) => typeof goal === 'string') &&
        Array.isArray(parsed.answers.services) &&
        parsed.answers.services.every((service) => typeof service === 'string')
      ) {
        setGeneration(parsed.generation);
        setAnswers(parsed.answers);
        setOtherIndustrySelected(!industries.includes(parsed.answers.industry));
        setSelectedColor(parsed.generation.report.colors[0]?.hex ?? '');
        setSaved(true);
        setScreen('report');
      }
    } catch {
      localStorage.removeItem(REPORT_STORAGE_KEY);
    }
  }, []);

  const themeColor = useMemo(
    () => generation?.report.colors.find((color) => color.hex === selectedColor)?.hex ?? '#F1E8D6',
    [generation, selectedColor],
  );
  const visualReferences = useMemo(() => getBrandVisualReferences(answers), [answers.industry]);

  const updateAnswer = <K extends keyof BrandAnswers>(key: K, value: BrandAnswers[K]) => {
    setAnswers((current) => ({ ...current, [key]: value }));
  };

  const canContinue = () => {
    if (step === 0 && (!answers.brandName.trim() || !answers.industry.trim())) return false;
    if (step === 1 && (!answers.audience.trim() || !answers.ageGroup || !answers.problem.trim())) return false;
    if (step === 2 && !answers.personality) return false;
    if (step === 3 && !answers.goals.length) return false;
    return true;
  };

  async function generateReport() {
    setError('');
    setScreen('generating');
    setActiveStage('');
    try {
      const response = await fetch('/api/brand-signal/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ answers }),
      });
      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || 'We could not create your report. Please try again.');
      }
      if (!response.body) throw new Error('Your browser could not receive the report. Please try again.');
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let result: BrandGeneration | null = null;
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const events = buffer.split('\n\n');
        buffer = events.pop() ?? '';
        for (const event of events) {
          const line = event.split('\n').find((item) => item.startsWith('data: '));
          if (!line) continue;
          const data = JSON.parse(line.slice(6)) as {
            type: string;
            stage?: string;
            result?: BrandGeneration;
            message?: string;
          };
          if (data.type === 'stage' && data.stage) setActiveStage(data.stage);
          if (data.type === 'complete' && data.result) result = data.result;
          if (data.type === 'error') throw new Error(data.message || 'We could not create your report.');
        }
      }
      if (!result) throw new Error('The report was incomplete. Please try again.');
      setGeneration(result);
      setSelectedColor(result.report.colors[0]?.hex ?? '');
      try {
        localStorage.setItem(REPORT_STORAGE_KEY, JSON.stringify({ generation: result, answers }));
        setSaved(true);
      } catch {
        setSaved(false);
      }
      setScreen('report');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (generationError) {
      setError(generationError instanceof Error ? generationError.message : 'Something went wrong. Please try again.');
      setScreen('discovery');
      setStep(3);
    }
  }

  async function submitLead(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!generation) return;
    setSubmitting(true);
    setError('');
    try {
      const response = await fetch('/api/brand-signal/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ lead, sessionId: generation.sessionId }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'We could not send your enquiry.');
      setScreen('success');
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'We could not send your enquiry.');
    } finally {
      setSubmitting(false);
    }
  }

  async function copyReport() {
    if (!generation) return;
    const report = generation.report;
    const text = [
      `BRAND SIGNAL® — ${answers.brandName || 'Your brand'}`,
      `THE SIGNAL\n${report.positioning}\n${report.story}\nValues: ${report.values.join(', ')}`,
      `THE AUDIENCE — HYPOTHESES, NOT RESEARCH\nMotivation: ${report.audienceInsight.motivation}\nBarrier: ${report.audienceInsight.barrier}\nTrust cue: ${report.audienceInsight.trustCue}\nValidate: ${report.audienceInsight.validation}`,
      `THE LOOK\n${report.visualDirection}\n${report.colors.map((color) => `${color.name} ${color.hex}: ${color.purpose}`).join('\n')}\n${report.typography}`,
      `VISUAL REFERENCES — UNSPLASH IMAGE LINKS\n${visualReferences.map((reference) => `${reference.title}: ${reference.lens}\nImage source: ${reference.sourceUrl}`).join('\n')}\nThese are illustrative references, not commissioned assets or market evidence. Verify photographer attribution and license before reuse.`,
      `THE VOICE\n${report.tone}\n${report.messaging}\n${report.messagePillars.map((pillar) => `${pillar.title}: ${pillar.message} Evidence to collect: ${pillar.evidence}`).join('\n')}\nWebsite: ${report.sampleCopy.website}\nSocial: ${report.sampleCopy.social}\nLaunch: ${report.sampleCopy.launch}\n${report.taglines.join('\n')}`,
      `THE CULTURE\n${report.photography}\n${report.graphicStyle}\n${report.composition}`,
      `THE CAMPAIGN\n${report.campaigns.map((campaign) => `${campaign.title}: ${campaign.idea}\nVisual: ${campaign.visual}\nAudience: ${campaign.audience}\nChannel: ${campaign.channel}\nSuccess measure: ${campaign.successMeasure}`).join('\n')}`,
      `THE OPPORTUNITY\n${report.recommendations.map((item) => `${item.service}: ${item.reason}`).join('\n')}`,
      `THE FIRST MONTH\n${report.actionPlan.map((step) => `${step.window} — ${step.focus}\n${step.actions.join('\n')}\nDeliverable: ${step.deliverable}`).join('\n')}`,
    ].join('\n\n');
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setError('Clipboard access is unavailable in this browser.');
    }

  }

  async function copyHex(hex: string) {
    try {
      await navigator.clipboard.writeText(hex);
      setCopiedHex(hex);
      window.setTimeout(() => setCopiedHex(''), 1800);
    } catch {
      setError('Clipboard access is unavailable in this browser.');
    }
  }

  if (screen === 'intro') {
    return (
      <main className="brand-signal-page bs-intro">
        <div className="bs-topline"><Link href="/" className="bs-wordmark">BRANDENT<span>®</span></Link><span>THE CREATIVE DISCOVERY STUDIO</span><a href="mailto:hello@brandent.in">LET&apos;S TALK ↗</a></div>
        <div className="bs-intro-grid">
          <div className="bs-intro-copy">
            <p className="bs-kicker">BRAND SIGNAL® <span>— A BRANDENT ORIGINAL</span></p>
            <h1>LET&apos;S MAKE<br />YOUR BRAND<br /><em>IMPOSSIBLE</em><br />TO IGNORE<span className="bs-period">.</span></h1>
            <p className="bs-intro-sub">Every great brand starts with a signal. Tell us what you&apos;re building. We&apos;ll explore the creative direction your brand deserves.</p>
            <button type="button" className="bs-button bs-button-red" onClick={() => { setScreen('discovery'); window.scrollTo({ top: 0 }); }}>
              DISCOVER YOUR BRAND SIGNAL <span aria-hidden="true">↗</span>
            </button>
            <p className="bs-duration">A considered first direction, in about 60–90 seconds.</p>
          </div>
          <div className="bs-intro-art" aria-label="Abstract Brand Signal studio graphic">
            <div className="bs-art-ring bs-art-ring-one" />
            <div className="bs-art-ring bs-art-ring-two" />
            <div className="bs-art-cross">+</div>
            <div className="bs-art-type">YOUR<br /><span>SIGNAL</span><i>®</i></div>
            <div className="bs-art-index">FIG. 01 — THE BEGINNING</div>
            <div className="bs-art-square" />
          </div>
        </div>
        <div className="bs-intro-bottom"><span>STRATEGY / IDENTITY / CULTURE</span><span>MADE TO MOVE YOU FORWARD <b>↗</b></span></div>
      </main>
    );
  }

  if (screen === 'discovery') {
    const stepTitles = ['Brand discovery', 'Your audience', 'Brand personality', 'The ambition'];
    return (
      <main className="brand-signal-page bs-wizard">
        <header className="bs-wizard-header">
          <Link href="/" className="bs-wordmark">BRANDENT<span>®</span></Link>
          <span className="bs-wizard-title">BRAND SIGNAL® <i> / </i> DISCOVERY</span>
          <button type="button" className="bs-text-button" onClick={() => setScreen('intro')}>EXIT <span>×</span></button>
        </header>
        <div className="bs-wizard-layout">
          <aside className="bs-step-rail">
            <span className="bs-kicker">YOUR BRAND, IN FOUR SIGNALS</span>
            {stepTitles.map((title, index) => (
              <button type="button" key={title} className={`bs-rail-item ${step === index ? 'is-active' : ''} ${step > index ? 'is-done' : ''}`} onClick={() => index < step && setStep(index)}>
                <span>0{index + 1}</span>{title}{step > index && <b aria-label="Complete">✓</b>}
              </button>
            ))}
            <div className="bs-rail-note">No wrong answers.<br />Just a place to begin.</div>
          </aside>
          <section className="bs-question">
            <div className="bs-question-meta"><span>STEP 0{step + 1} / 04</span><span>ABOUT 60–90 SECONDS</span></div>
            <div className="bs-question-progress" role="progressbar" aria-label="Discovery progress" aria-valuemin={1} aria-valuemax={4} aria-valuenow={step + 1}><span style={{ width: `${((step + 1) / 4) * 100}%` }} /></div>
            {step === 0 && (
              <>
                <p className="bs-kicker">FIRST, THE FOUNDATIONS</p>
                <h1>What are you<br />building<span>?</span></h1>
                <div className="bs-form-stack">
                  <Field label="Your brand name" value={answers.brandName} onChange={(value) => updateAnswer('brandName', value)} placeholder="The name people will remember" required />
                  <label className="bs-field"><span>What world do you work in? *</span>
                    <select value={otherIndustrySelected ? 'Other' : industries.includes(answers.industry) ? answers.industry : ''} onChange={(event) => {
                      const isOther = event.target.value === 'Other';
                      setOtherIndustrySelected(isOther);
                      updateAnswer('industry', isOther ? '' : event.target.value);
                    }} required>
                      <option value="" disabled>Choose your industry</option>{industries.map((industry) => <option key={industry} value={industry}>{industry}</option>)}
                    </select>
                  </label>
                  {otherIndustrySelected && <Field label="Tell us your industry" value={answers.industry} onChange={(value) => updateAnswer('industry', value)} placeholder="Your category, in your words" required />}
                </div>
              </>
            )}
            {step === 1 && (
              <>
                <p className="bs-kicker">WHO IS THIS FOR?</p>
                <h1>Who do you<br />want to reach<span>?</span></h1>
                <div className="bs-form-stack">
                  <Field label="Your ideal customer" value={answers.audience} onChange={(value) => updateAnswer('audience', value)} placeholder="Describe the people you want to matter to" required />
                  <label className="bs-field"><span>What age group are you targeting? *</span>
                    <select value={answers.ageGroup} onChange={(event) => updateAnswer('ageGroup', event.target.value)} required>
                      <option value="" disabled>Choose an age group</option>{['Under 18', '18–24', '25–34', '35–44', '45–54', '55+', 'All ages'].map((age) => <option key={age}>{age}</option>)}
                    </select>
                  </label>
                  <label className="bs-field"><span>What problem do you solve? *</span>
                    <textarea value={answers.problem} onChange={(event) => updateAnswer('problem', event.target.value)} placeholder="What changes for someone when your brand gets it right?" required rows={3} />
                  </label>
                </div>
              </>
            )}
            {step === 2 && (
              <>
                <p className="bs-kicker">A FEELING BEFORE A LOOK</p>
                <h1>What should your<br />brand feel like<span>?</span></h1>
                <p className="bs-question-hint">Pick the creative energy that feels most like your next chapter.</p>
                <div className="bs-personality-grid">
                  {personalities.map((personality, index) => <OptionButton key={personality} value={personality} selected={answers.personality === personality} onClick={() => updateAnswer('personality', personality)} className={`bs-personality bs-personality-${index + 1}`} />)}
                </div>
              </>
            )}
            {step === 3 && (
              <>
                <p className="bs-kicker">MAKE THE NEXT MOVE COUNT</p>
                <h1>What are you<br />here to change<span>?</span></h1>
                <p className="bs-question-hint">Choose what matters most right now. Select any that fit.</p>
                <div className="bs-option-list">
                  {goals.map((goal) => <OptionButton key={goal} value={goal} selected={answers.goals.includes(goal)} onClick={() => updateAnswer('goals', toggleValue(answers.goals, goal))} />)}
                </div>
                <p className="bs-kicker bs-services-kicker">WHERE COULD WE HELP?</p>
                <div className="bs-service-grid">
                  {services.map((service) => <OptionButton key={service} value={service} selected={answers.services.includes(service)} onClick={() => updateAnswer('services', toggleValue(answers.services, service))} />)}
                </div>
              </>
            )}
            {error && <p className="bs-error" role="alert">{error}</p>}
            <div className="bs-step-actions">
              {step > 0 && <button type="button" className="bs-button bs-button-quiet" onClick={() => { setError(''); setStep((current) => current - 1); }}>← BACK</button>}
              {step < 3 ? (
                <button type="button" className="bs-button bs-button-blue" disabled={!canContinue()} onClick={() => { setError(''); setStep((current) => current + 1); }}>CONTINUE <span>↗</span></button>
              ) : (
                <button type="button" className="bs-button bs-button-red" disabled={!canContinue()} onClick={generateReport}>MAKE MY BRAND SIGNAL <span>↗</span></button>
              )}
            </div>
          </section>
        </div>
      </main>
    );
  }

  if (screen === 'generating') {
    const activeIndex = generationStages.findIndex((stage) => stage.id === activeStage);
    return (
      <main className="brand-signal-page bs-generating">
        <div className="bs-topline"><Link href="/" className="bs-wordmark">BRANDENT<span>®</span></Link><span>BRAND SIGNAL® <i>/</i> IN THE STUDIO</span><span>01 — 04</span></div>
        <div className="bs-generation-inner">
          <p className="bs-kicker">A MOMENT, WHILE WE THINK</p>
          <h1>Finding the<br /><em>signal.</em></h1>
          <div className="bs-orbit" aria-hidden="true"><span /><i /><b>®</b></div>
          <ol className="bs-generation-stages" aria-label="Report generation progress" aria-live="polite">
            {generationStages.map((stage, index) => (
              <li key={stage.id} className={index === activeIndex ? 'is-active' : index < activeIndex ? 'is-done' : ''}>
                <span>0{index + 1}</span>{stage.label}<b>{index < activeIndex ? '✓' : index === activeIndex ? '↗' : '—'}</b>
              </li>
            ))}
          </ol>
          <p className="bs-generation-note">Building a considered direction, not a random answer.</p>
        </div>
      </main>
    );
  }

  if (!generation) return null;
  const report: BrandReport = generation.report;

  if (screen === 'lead') {
    return (
      <main className="brand-signal-page bs-lead">
        <header className="bs-wizard-header"><Link href="/" className="bs-wordmark">BRANDENT<span>®</span></Link><span className="bs-wizard-title">BRAND SIGNAL® <i>/</i> NEXT STEPS</span><button type="button" className="bs-text-button" onClick={() => setScreen('report')}>BACK TO REPORT <span>↗</span></button></header>
        <div className="bs-lead-layout">
          <div className="bs-lead-copy"><p className="bs-kicker">THE NEXT CHAPTER STARTS HERE</p><h1>Your brand has<br />a direction.<br /><em>Let&apos;s bring it<br />to life.</em></h1><p>Share a few details and our team can pick up the conversation with your brand direction in mind.</p><div className="bs-lead-stamp">MADE FOR<br /><b>{answers.brandName.toUpperCase()}</b></div></div>
          {generation.leadCaptureEnabled ? (
            <form className="bs-lead-form" onSubmit={submitLead}>
              <Field label="Full name" value={lead.fullName} onChange={(value) => setLead((current) => ({ ...current, fullName: value }))} placeholder="How should we address you?" required />
              <Field label="Work email" value={lead.email} onChange={(value) => setLead((current) => ({ ...current, email: value }))} placeholder="you@company.com" required type="email" />
              <Field label="Company name" value={lead.company} onChange={(value) => setLead((current) => ({ ...current, company: value }))} placeholder="Your company" required />
              <Field label="Website (optional)" value={lead.website} onChange={(value) => setLead((current) => ({ ...current, website: value }))} placeholder="https://yourbrand.com" type="url" />
              <label className="bs-field"><span>Estimated project budget *</span><select value={lead.budget} onChange={(event) => setLead((current) => ({ ...current, budget: event.target.value }))} required><option value="" disabled>Choose a range</option>{budgets.map((budget) => <option key={budget}>{budget}</option>)}</select></label>
              <label className="bs-field"><span>When are you hoping to launch? *</span><select value={lead.timeline} onChange={(event) => setLead((current) => ({ ...current, timeline: event.target.value }))} required><option value="" disabled>Choose a timeline</option>{timelines.map((timeline) => <option key={timeline}>{timeline}</option>)}</select></label>
              <label className="bs-consent"><input type="checkbox" checked={lead.marketingConsent} onChange={(event) => setLead((current) => ({ ...current, marketingConsent: event.target.checked }))} /><span>I&apos;d like to receive occasional studio news and ideas. I can unsubscribe at any time.</span></label>
              {error && <p className="bs-error" role="alert">{error}</p>}
              <button className="bs-button bs-button-red" type="submit" disabled={submitting}>{submitting ? 'SENDING…' : 'START A CONVERSATION'} <span>↗</span></button>
              <small className="bs-privacy-note">Your project details are shared with our team only. Marketing emails are optional.</small>
            </form>
          ) : (
            <div className="bs-lead-unavailable"><span className="bs-kicker">A NOTE FROM THE STUDIO</span><h2>Your direction is ready.</h2><p>Online enquiry storage is not configured in this environment. Your report is still available here; email us to continue the conversation.</p><a className="bs-button bs-button-red" href={`mailto:hello@brandent.in?subject=${encodeURIComponent(`Brand Signal — ${answers.brandName}`)}`}>EMAIL THE STUDIO <span>↗</span></a></div>
          )}
        </div>
      </main>
    );
  }

  if (screen === 'success') {
    return (
      <main className="brand-signal-page bs-success">
        <div className="bs-topline"><Link href="/" className="bs-wordmark">BRANDENT<span>®</span></Link><span>BRAND SIGNAL® <i>/</i> RECEIVED</span><span>THANK YOU</span></div>
        <div className="bs-success-copy"><p className="bs-kicker">THE BEGINNING OF SOMETHING GOOD</p><h1>We&apos;ve got<br /><em>your signal.</em></h1><p>Thanks for sharing what you&apos;re building. Our team will be in touch soon.</p><button className="bs-button bs-button-blue" onClick={() => setScreen('report')}>BACK TO YOUR REPORT <span>↗</span></button></div>
      </main>
    );
  }

  return (
    <main className="brand-signal-page bs-report" style={{ '--report-theme': themeColor } as React.CSSProperties}>
      <header className="bs-report-nav">
        <Link href="/" className="bs-wordmark">BRANDENT<span>®</span></Link>
        <span>BRAND SIGNAL® <i>/</i> {answers.brandName.toUpperCase()}</span>
        <div className="bs-report-actions">
        {saved && <span className="bs-saved-note">SAVED IN THIS BROWSER</span>}
        <button type="button" onClick={copyReport}>{copied ? 'COPIED ✓' : 'COPY REPORT ↗'}</button>
          <button type="button" onClick={() => window.print()}>SAVE AS PDF ↗</button>
        </div>
      </header>
      <section className="bs-report-cover">
        <div className="bs-report-cover-label"><span>YOUR BRAND DNA REPORT</span><span>ISSUE NO. 001 / BRANDENT®</span></div>
        {generation.mode === 'mock' && <p className="bs-mock-notice">DEVELOPMENT MODE — This is a sample direction, not an AI-generated report.</p>}
        <p className="bs-kicker">A FIRST CREATIVE DIRECTION FOR</p>
        <h1>{answers.brandName}<span className="bs-period">.</span></h1>
        <p className="bs-report-cover-line">{report.positioning}</p>
        <div className="bs-cover-bottom"><span>{answers.industry.toUpperCase()}</span><span>STRATEGY / AUDIENCE / IDENTITY / CULTURE / ACTION</span><span>01 — 09</span></div>
      </section>
      <div className="bs-report-theme-bar" style={{ backgroundColor: 'var(--report-theme)' }} />
      <ReportChapter number="01" eyebrow="THE SIGNAL — BRAND POSITIONING" title="A point of view worth remembering." className="bs-chapter-signal">
        <div className="bs-signal-grid"><p className="bs-feature-copy">{report.positioning}</p><div><h3>The story</h3><p>{report.story}</p></div></div>
        <div className="bs-inline-details"><div><h3>Core values</h3><ul className="bs-value-list">{report.values.map((value) => <li key={value}>{value}</li>)}</ul></div><div><h3>Personality</h3><p>{report.personality}</p></div></div>
        <div className="bs-opportunities"><h3>Where the white space is</h3>{report.opportunities.map((item, index) => <p key={item}><b>0{index + 1}</b>{item}</p>)}</div>
      </ReportChapter>
      <ReportChapter number="02" eyebrow="THE AUDIENCE — STARTING HYPOTHESES" title="Know what to learn before you assume." className="bs-chapter-audience">
        <p className="bs-hypothesis-note">These are thoughtful starting hypotheses based on your brief—not customer research or verified market facts.</p>
        <div className="bs-audience-grid">
          <article><span>01 — A POSSIBLE MOTIVATION</span><p>{report.audienceInsight.motivation}</p></article>
          <article><span>02 — A POSSIBLE BARRIER</span><p>{report.audienceInsight.barrier}</p></article>
          <article><span>03 — A TRUST-BUILDING CUE</span><p>{report.audienceInsight.trustCue}</p></article>
          <article><span>04 — HOW TO VALIDATE</span><p>{report.audienceInsight.validation}</p></article>
        </div>
      </ReportChapter>
      <ReportChapter number="03" eyebrow="THE LOOK — VISUAL IDENTITY" title="Color with a reason." className="bs-chapter-look">
        <p className="bs-section-intro">{report.visualDirection}</p>
        <div className="bs-palette-grid">{report.colors.map((color) => <Swatch key={color.hex} color={color} selected={selectedColor === color.hex} onSelect={() => setSelectedColor(color.hex)} onCopy={() => copyHex(color.hex)} copied={copiedHex === color.hex} />)}</div>
        <div className="bs-type-direction"><span>TYPE DIRECTION</span><p>{report.typography}</p><b>Aa</b></div>
        <p className="bs-palette-hint">Choose a color to theme the report, or copy its HEX value.</p>
      </ReportChapter>
      <ReportChapter number="04" eyebrow="THE VOICE — BRAND COMMUNICATION" title="Say it like you mean it." className="bs-chapter-voice">
        <div className="bs-voice-quote">“{report.headline}”</div>
        <div className="bs-voice-grid"><div><h3>The tone</h3><p>{report.tone}</p></div><div><h3>The message</h3><p>{report.messaging}</p></div></div>
        <div className="bs-message-pillars"><h3>Message pillars — and the proof to collect</h3>{report.messagePillars.map((pillar, index) => <article key={pillar.title}><span>0{index + 1}</span><div><h4>{pillar.title}</h4><p>{pillar.message}</p><small>PROOF TO COLLECT — {pillar.evidence}</small></div></article>)}</div>
        <div className="bs-sample-copy">
          <span>PUT THE VOICE TO WORK</span>
          <article><h3>Website hero</h3><p>{report.sampleCopy.website}</p></article>
          <article><h3>Social post</h3><p>{report.sampleCopy.social}</p></article>
          <article><h3>Launch announcement</h3><p>{report.sampleCopy.launch}</p></article>
        </div>
        <div className="bs-taglines"><span>THREE WAYS IN</span>{report.taglines.map((tagline, index) => <p key={tagline}><b>0{index + 1}</b>{tagline}</p>)}</div>
      </ReportChapter>
      <ReportChapter number="05" eyebrow="THE CULTURE — ART DIRECTION" title="A world people want to enter." className="bs-chapter-culture">
        <div className="bs-culture-art" aria-hidden="true"><span>{answers.brandName.toUpperCase()}</span><b>MAKE<br />A<br /><i>SIGNAL.</i></b><small>ART DIRECTION / 2026</small></div>
        <div className="bs-culture-notes"><div><span>01 — PHOTOGRAPHY</span><p>{report.photography}</p></div><div><span>02 — GRAPHIC STYLE</span><p>{report.graphicStyle}</p></div><div><span>03 — COMPOSITION</span><p>{report.composition}</p></div></div>
      </ReportChapter>
      <ReportChapter number="06" eyebrow="THE LOOK — CURATED VISUAL REFERENCES" title="A moodboard to start the conversation." className="bs-chapter-references">
        <p className="bs-section-intro">Curated {answers.industry.toLowerCase()} imagery, paired with a creative lens for your brief. Use these as discussion starters—not commissioned work, original brand assets, or market evidence.</p>
        <div className="bs-reference-grid">{visualReferences.map((reference, index) => <figure key={reference.imageUrl} className={`bs-reference-card bs-reference-${index + 1}`}>
          <a href={reference.sourceUrl} target="_blank" rel="noreferrer" aria-label={`Open source image for ${reference.title}`}>
            <Image className="bs-image" src={reference.imageUrl} alt={reference.alt} width={1200} height={850} sizes="(max-width: 640px) 100vw, (max-width: 1000px) 50vw, 33vw" />
          </a>
          <figcaption><span>REFERENCE 0{index + 1} / ART DIRECTION</span><h3>{reference.title}</h3><p>{reference.lens}</p><a className="bs-reference-source" href={reference.sourceUrl} target="_blank" rel="noreferrer">VIEW SOURCE IMAGE · UNSPLASH ↗</a></figcaption>
        </figure>)}</div>
        <p className="bs-reference-disclaimer">Images are served by Unsplash. These direct image links do not include photographer names or original photo pages; locate the original image record and confirm attribution and license before reusing a reference in published campaign work.</p>
        <a className="bs-unsplash-license" href="https://unsplash.com/license" target="_blank" rel="noreferrer">READ THE UNSPLASH LICENSE ↗</a>
      </ReportChapter>
      <ReportChapter number="07" eyebrow="THE CAMPAIGN — CREATIVE CONCEPTS" title="Three ways to make a mark." className="bs-chapter-campaign">
        <div className="bs-campaign-grid">{report.campaigns.map((campaign, index) => <article key={campaign.title} className={`bs-campaign-card bs-campaign-${index + 1}`}><span>CONCEPT 0{index + 1}</span><h3>{campaign.title}</h3><p>{campaign.idea}</p><div className="bs-campaign-visual">{campaign.headline}</div><small>{campaign.visual}</small><div className="bs-campaign-detail"><b>WHO IT&apos;S FOR</b><p>{campaign.audience}</p></div><div className="bs-campaign-detail"><b>WHERE IT LIVES</b><p>{campaign.channel}</p></div><div className="bs-campaign-detail"><b>WHAT TO MEASURE</b><p>{campaign.successMeasure}</p></div></article>)}</div>
      </ReportChapter>
      <ReportChapter number="08" eyebrow="THE OPPORTUNITY — AGENCY RECOMMENDATIONS" title="A good direction needs a good next step." className="bs-chapter-opportunity">
        <div className="bs-recommendations">{report.recommendations.map((item, index) => <div key={item.service}><span>0{index + 1}</span><h3>{item.service}</h3><p>{item.reason}</p></div>)}</div>
      </ReportChapter>
      <ReportChapter number="09" eyebrow="THE FIRST MONTH — A PRACTICAL ACTION PLAN" title="Make the next four weeks count." className="bs-chapter-action-plan">
        <p className="bs-section-intro">A useful first pass, not a promise of results. Validate the audience assumptions, bring the identity into real touchpoints, and learn from launch signals.</p>
        <div className="bs-action-plan">{report.actionPlan.map((step) => <article key={step.window}><span>{step.window}</span><div><h3>{step.focus}</h3><ul>{step.actions.map((action) => <li key={action}>{action}</li>)}</ul><p><b>TAKE AWAY</b>{step.deliverable}</p></div></article>)}</div>
      </ReportChapter>
      <section className="bs-report-end"><span>THAT&apos;S YOUR SIGNAL.</span><h2>Now let&apos;s<br /><em>make it real.</em></h2><button className="bs-button bs-button-red" onClick={() => setScreen('lead')}>BRING YOUR BRAND TO LIFE <span>↗</span></button><button type="button" className="bs-restart-button" onClick={() => { setScreen('discovery'); setStep(0); setAnswers(initialAnswers); }}>START A NEW SIGNAL ↗</button></section>
      <footer className="bs-report-footer"><Link href="/" className="bs-wordmark">BRANDENT<span>®</span></Link><span>GOOD BRANDS DON&apos;T HAPPEN BY ACCIDENT.</span><span>© BRANDENT 2026</span></footer>
    </main>
  );
}
