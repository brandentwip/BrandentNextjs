# BRAND SIGNAL® — step-by-step setup

This guide covers running the experience locally, enabling real AI generation, storing reports and enquiries in Supabase, setting up optional agency email notifications, and deploying the feature.

The route is `/brand-signal`. Its API routes are:

- `POST /api/brand-signal/generate` — validates discovery answers, generates a report, and optionally saves it.
- `POST /api/brand-signal/leads` — validates and saves an enquiry linked to its report, then optionally notifies the agency.

## What works before you configure anything
SUPABASE_URL=https://ndfgjyfyavvrlbwjeltq.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_new_service_role_key
The page can run without external accounts or credentials:

- Without `OPENAI_API_KEY`, the server returns a personalized **development mock** report. The report is explicitly labeled as sample content, not AI output.
- Without Supabase credentials, visitors can explore the report and save or revisit it in the same browser. Online lead capture is disabled, and the page offers an email link instead of pretending an enquiry was saved.
- Resend is optional. A saved lead is not lost if the notification service is not configured or is temporarily unavailable.

The project already has its dependencies installed. No extra package is required for this feature.

## 1. Run the website locally

From the project directory:

```bash
npm run dev
```

Open the address printed by Next.js (usually <http://localhost:3000/brand-signal>). If port 3000 is already in use, Next.js chooses another port and prints it in the terminal.

To confirm the code compiles and the static pages build:

```bash
npm run lint
npm run build
```

`npm run lint` runs the project TypeScript check. Keep the app on a Next.js server; a static export is not supported by this feature's API routes.

## 2. Turn on AI report generation

1. Choose either OpenAI or an OpenAI-compatible provider such as OpenRouter. Create a new API key in that provider's account.
2. Ensure billing/usage is enabled for the account and that the key can use the configured model.
3. In the project root, copy [`.env.example`](./.env.example) to `.env.local`.
4. Put the key in the server-only variable `OPENAI_API_KEY`. For OpenAI, leave `OPENAI_BASE_URL` blank and use a model available to your API account:

   ```dotenv
   OPENAI_API_KEY=your_secret_key
   OPENAI_MODEL=gpt-4o-mini
   ```

   For OpenRouter, set the OpenAI-compatible API URL and a free chat model ID that supports JSON output. The currently tested free option is:

   ```dotenv
   OPENAI_BASE_URL=https://openrouter.ai/api/v1
   OPENAI_API_KEY=your_new_openrouter_key
   OPENAI_MODEL=nvidia/nemotron-3.5-super-vl:free
   ```

   The model catalog and free-tier availability can change. Shared free-model providers may be temporarily rate-limited, slow, or unavailable; if that happens, try again later or choose another OpenRouter model marked free that supports Chat Completions JSON response formatting. Paid model IDs may require OpenRouter credits. Generation allows up to 75 seconds for the provider; the prompt keeps responses concise to reduce delays and truncation.

5. Save `.env.local`, then stop and restart `npm run dev`. Next.js reads environment variables when the server starts.
6. Open `/brand-signal`, complete the discovery questions, and generate a report. When the key is active, the report will not have the development-mode sample notice.

The app sends a Chat Completions request to `OPENAI_BASE_URL` (default: `https://api.openai.com/v1`) and appends `/chat/completions`. If `OPENAI_BASE_URL` points to OpenRouter but `OPENAI_MODEL` is blank, the app defaults to `nvidia/nemotron-3.5-super-vl:free`; for OpenAI, the default is `gpt-4o-mini`.

**Keep this key secret.** Do not add a `NEXT_PUBLIC_` prefix, paste the key into frontend code, or commit `.env.local`. The repository's `.gitignore` already excludes `.env*`, while keeping `.env.example` available as a template. If a key is accidentally exposed, revoke it and create a replacement.

## 3. Create and configure Supabase

Supabase enables persistent report/session storage and online lead capture. Without it, reports remain available only in the visitor's browser and the online enquiry form stays disabled.

### Create the project and get its credentials

1. Create a Supabase project and choose a database password; save it in a password manager. The database password is for database administration and is **not used by this app**.
2. Wait for project setup to finish, then open the project's **Connect** dialog or **Project Settings → API**.
3. Copy the project URL. Set it as `SUPABASE_URL` in `.env.local`.
4. Find the **service role** key in the project's API settings. Copy it into `SUPABASE_SERVICE_ROLE_KEY`.
5. Keep the service role key private. It bypasses database row-level security and must only be used by the server. Never use it in browser code or expose it as a `NEXT_PUBLIC_` variable.

Your local environment should now include:

```dotenv
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your_secret_service_role_key
```

Do not use the Supabase `anon`/publishable key for `SUPABASE_SERVICE_ROLE_KEY`. A database password is not a replacement for the service role key.

### Create the tables and restricted report-save function

1. In the Supabase dashboard, open **SQL Editor** and create a new query.
2. Copy the entire contents of [`supabase/brand-signal.sql`](./supabase/brand-signal.sql) into the editor and run it.
3. Confirm the query completes successfully. The SQL creates:
   - `brand_sessions` — discovery answers and generation mode.
   - `brand_reports` — the validated report associated with a session.
   - `agency_leads` — contact, budget, timeline, consent, and qualification details.
   - `save_brand_signal_report(...)` — an atomic server-side operation that inserts a session and its report together.
4. In **Table Editor**, confirm the three tables are present.
5. Under each table's **Policies** or **Authentication → Policies**, confirm row-level security is enabled. The setup SQL deliberately creates no public read/write policies and revokes direct access from `anon` and `authenticated`; the app server accesses these tables with its service role only.

Run the SQL once for a fresh database. If you run it again, `create table if not exists` will not transform an existing, incompatible table into the expected schema. Review any existing tables before applying a schema change to an existing project.

### Enable Supabase in the app

1. Save both Supabase variables in `.env.local`.
2. Restart `npm run dev`.
3. Generate a report. With both Supabase variables configured, report generation also saves the discovery answers and report before showing the result.
4. Open **Table Editor → `brand_sessions`** and **`brand_reports`**. Confirm that the new session and report appear and share the same session ID.
5. On the report, choose **BRING YOUR BRAND TO LIFE**. The online enquiry form should now be enabled.
6. Submit a test enquiry. Confirm it appears in `agency_leads` with the matching session ID.

The lead form requires a name, work email, company, budget, and launch timeline. A website is optional. Marketing consent is a separate, optional checkbox. Budget and timeline contribute to a qualification score, but lower budgets are not rejected.

## 4. Set up optional email notifications with Resend

Notifications are for the agency; the feature currently **does not email the visitor their report**.

1. Create a Resend account and an API key.
2. Verify a sender domain/address with Resend and follow its DNS instructions.
3. Add the following to `.env.local`:

   ```dotenv
   RESEND_API_KEY=your_secret_resend_key
   BRAND_SIGNAL_NOTIFY_EMAIL=the-inbox-that-should-receive-enquiries@example.com
   BRAND_SIGNAL_FROM_EMAIL=Brand Signal <brand-signal@your-verified-domain.example>
   ```

4. Replace the example addresses with real ones. The sender must be verified with Resend; the recipient is the agency inbox where notifications should arrive.
5. Restart the server and submit a test lead.
6. Check the recipient inbox and Resend's email logs. The API returns a `notificationSent` status for troubleshooting.

If these three variables are unset, leads still save to Supabase but no notification email is sent. If sending fails, the lead remains saved; check the server log and Resend dashboard before retrying.

## 5. Configure a production deployment

1. Deploy the existing Next.js application to a host that supports Next.js App Router API routes and the Node.js runtime. Do not configure a static export.
2. In the host's **server-side environment variables** settings, add the same variables needed for production:
   - Required for AI: `OPENAI_API_KEY`. `OPENAI_BASE_URL` is optional; it defaults to OpenAI. `OPENAI_MODEL` is optional and must be available to the selected provider.
   - Required for report persistence and lead capture: `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`.
   - Optional for agency notifications: `RESEND_API_KEY`, `BRAND_SIGNAL_NOTIFY_EMAIL`, and `BRAND_SIGNAL_FROM_EMAIL`.
3. Add credentials separately for production and preview environments as appropriate. Do not put secret keys in build logs, client-side variables, source files, screenshots, or shared example files.
4. Redeploy after adding or changing environment variables.
5. Open the production `/brand-signal` URL and repeat the report, database, lead form, and (if configured) email checks above.
6. Keep your Supabase service role key restricted to this server deployment. Review who can access deployment settings, database records, and provider credentials.

## 6. Visitor report controls and data behavior

- **Save / revisit:** a copy is saved in browser local storage on the visitor's current device. It is not a shareable link and does not sync to another browser or device.
- **Database report:** when Supabase is configured, answers and report JSON are stored in the `brand_sessions` and `brand_reports` tables. This implementation does not provide a public report URL or an endpoint for retrieving a saved report on a different device.
- **Save as PDF:** opens the browser's print dialog. The visitor can choose **Save as PDF**.
- **Palette:** selecting a swatch changes the report's background theme; **COPY HEX** copies that color code.
- **Lead notifications:** optional email is sent to the configured agency inbox after a lead is saved. The visitor does not receive a report email.
- **Marketing consent:** the optional consent choice is stored with the enquiry. This feature does not currently send marketing campaigns.

Define your own retention and deletion process for report and lead records before collecting live visitor data. The project includes database storage and access controls, not an admin dashboard or automatic retention/deletion workflow.

## 7. Troubleshooting

| What you see | Check this |
| --- | --- |
| Development-mode notice on the report | `OPENAI_API_KEY` is missing from `.env.local`, misspelled, or the server wasn't restarted after adding it. |
| Report generation fails after adding the key | Check the terminal/server logs; confirm the key is valid, API usage is enabled, and `OPENAI_MODEL` supports Chat Completions JSON response formatting. |
| OpenRouter returns `429` for a free model | Free model capacity is shared and may be temporarily throttled. Retry later or select a different currently available free chat model that supports JSON response formatting. |
| OpenRouter returns `402` | Check whether `OPENAI_MODEL` is actually a free model. Paid models require credits even when the API key itself is valid. |
| The model takes too long to respond | Free model capacity and speed vary. Retry shortly or configure a faster chat model; generated reports are intentionally concise, and the request times out after 75 seconds. |
| A report works, but enquiry storage is disabled | Both `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` must be set. Restart the server after changing them, then generate a fresh report. |
| Supabase request or SQL function error | Confirm the setup SQL ran successfully, the URL is the correct project, the key is the service role key, and the function/tables are in the `public` schema. |
| Report appears, but no database rows are present | Check the server logs and confirm report persistence succeeded; a failed database save should produce a generation error rather than a saved report. |
| Lead submission reports that its report was not found | Generate a new report after setting up Supabase. Sessions generated without Supabase were not saved server-side. |
| Lead submission fails to save | Inspect the server logs and Supabase `agency_leads` table; verify the database schema and service role key. The API validates the email, UUID, budget, and timeline. |
| Lead saved, but no notification arrived | Notifications require all three Resend variables. Confirm the sender is verified, inspect Resend logs, and restart/redeploy after changing environment variables. |
| `.env.local` values appear unchanged | Stop and restart the Next.js server locally, or redeploy after updating the hosting provider's environment settings. |
| Port 3000 is busy | Use the alternate local URL printed by `npm run dev`. |

## Configuration checklist

- [ ] `/brand-signal` loads and the discovery flow can be completed.
- [ ] Production AI mode is active (the report does not show the development-mode notice).
- [ ] A test report creates matching rows in `brand_sessions` and `brand_reports`.
- [ ] Supabase RLS is enabled, with no public table access policies.
- [ ] A test enquiry creates a linked `agency_leads` row.
- [ ] Optional Resend notification arrives at the agency inbox.
- [ ] No server credentials are committed or exposed to the browser.

## Important: credentials shared in a chat

If a real database password or provider API key has been pasted into a chat, treat it as compromised:

1. Revoke the exposed provider API key in that provider's dashboard and create a replacement. Do not continue using the exposed key.
2. Change the Supabase database password in the Supabase dashboard. The application does not need this password.
3. Do not paste replacement secrets into chat. Enter them directly into your local, git-ignored `.env.local` file or your deployment provider's secret environment-variable settings.
4. For this application, retrieve the Supabase **service role** key from the project's API settings and add it as `SUPABASE_SERVICE_ROLE_KEY`. Keep it server-only.
