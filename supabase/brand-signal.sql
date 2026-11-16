create table if not exists public.brand_sessions (
  id uuid primary key,
  answers jsonb not null,
  generation_mode text not null check (generation_mode in ('ai', 'mock')),
  created_at timestamptz not null default now()
);

create table if not exists public.brand_reports (
  session_id uuid primary key references public.brand_sessions(id) on delete cascade,
  report jsonb not null,
  created_at timestamptz not null default now()
);

create table if not exists public.agency_leads (
  id uuid primary key default gen_random_uuid(),
  session_id uuid not null references public.brand_sessions(id) on delete restrict,
  full_name text not null,
  email text not null,
  company text not null,
  website text,
  budget text not null,
  timeline text not null,
  marketing_consent boolean not null default false,
  qualification_score smallint not null check (qualification_score between 0 and 10),
  created_at timestamptz not null default now()
);

alter table public.brand_sessions enable row level security;
alter table public.brand_reports enable row level security;
alter table public.agency_leads enable row level security;

revoke all on public.brand_sessions, public.brand_reports, public.agency_leads from anon, authenticated;
grant all on public.brand_sessions, public.brand_reports, public.agency_leads to service_role;

create or replace function public.save_brand_signal_report(
  p_session_id uuid,
  p_answers jsonb,
  p_report jsonb,
  p_mode text
) returns void
language plpgsql
security invoker
set search_path = public, pg_temp
as $$
begin
  insert into public.brand_sessions (id, answers, generation_mode)
  values (p_session_id, p_answers, p_mode);

  insert into public.brand_reports (session_id, report)
  values (p_session_id, p_report);
end;
$$;

revoke all on function public.save_brand_signal_report(uuid, jsonb, jsonb, text) from public, anon, authenticated;
grant execute on function public.save_brand_signal_report(uuid, jsonb, jsonb, text) to service_role;
