export interface RawChapter {
  id: string;
  num: number;
  title: string;
  category: string;
  content: string;
  mockupType?: string;
}

export const rawChapters: RawChapter[] = [
  {
    id: "ch-1",
    num: 1,
    title: "What is TidyFlow?",
    category: "Overview",
    content: "TidyFlow is the operating system for cleaning companies — schedule jobs, verify work on-site, message your team, sync invoices to QuickBooks, pay your team, and prove quality to clients, all in one platform. Built for residential and commercial cleaning teams, it connects owners, managers, and cleaners with scheduling, GPS-verified job tracking, per-task team chat with voice notes, company announcements, photo proof, payroll, client reports, Revenue AI insights, and offline-first field tools. By replacing paper checklists, WhatsApp chaos, and separate payroll spreadsheets, TidyFlow gives you one secure, multi-tenant SaaS platform with role-based access, Stripe self-serve billing, Google Sheets two-way sync, QuickBooks Online invoice sync, an Integrations hub, and support for 11 languages (including Arabic RTL).",
    mockupType: "pdf"
  },
  {
    id: "ch-2",
    num: 2,
    title: "Getting started",
    category: "Overview",
    content: "To initiate operations, company admins can sign up for a TidyFlow portal, establishing their business record. Upon first install, staffers encounter an interactive feature onboarding tour explaining primary modules. Once activated, owners are guided to set up secure payment profiles via Stripe and choose a Startup, Standard, or Premium plan (14-day free trial available). From there, owners can invite staff by accessing Users inside the Sidebar, entering worker names, emails, and role categories (Managers or Cleaners) to dispatch login credentials immediately. Next connect Google Sheets if you use a master spreadsheet, set your company country for address autocomplete, and open the Integrations hub to confirm Sheets, Stripe, and optionally QuickBooks are healthy."
  },
  {
    id: "ch-3",
    num: 3,
    title: "Understanding your role",
    category: "Overview",
    content: "TidyFlow enforces strict role-based access controls to guarantee data isolation. Owners/Admins oversee subscription plans and self-serve billing, currency formats, client billing settings, master Google Sheets links, QuickBooks connection, Revenue reports, Integrations hub health, company announcements, and company-wide financial reports. Managers focus on scheduling shift rosters, task team chat, resolving property issue logs, broadcasting announcements when needed, and validating submitted timesheets. Cleaners operate within a simplified mobile layout designed purely to log hours, complete room-by-room tasks, upload before/after photos, use task chat/voice notes, log supplies, and issue SOS alarms."
  },
  {
    id: "ch-4",
    num: 4,
    title: "Navigating the app",
    category: "Overview",
    content: "The left-side Sidebar menu forms the navigation compass. Clicking the menu button (☰) slides open routes to: Home (tailored role dashboard), Tasks (categorized calendar lists), Calendar, Properties, Rota Builder, Users (staff registry), Leave Requests, Payroll, Client Invoices, Supplies, Announcements, Chat/Task chats, Integrations (owners), Billing & plan usage (owners/admins), Revenue (owners), and Preferences. Mobile users can also trigger custom onboarding tours from any screen via the Help & Tour shortcut in the menu footer. Exact menu items depend on your role — cleaners see a focused job list; owners see billing and integrations."
  },
  {
    id: "ch-5",
    num: 5,
    title: "Google Sheets — connect & sync",
    category: "Core Features",
    content: "Connect your company spreadsheet to enable two-way sync. Step 1: Open Properties, then Google Sheets Sync (or open Integrations → Google Sheets). Step 2: Paste your spreadsheet URL. Step 3: Copy our unique service account email (e.g. sync@project.iam.gserviceaccount.com) and share edit permissions with it in Google Sheets. Step 4: Click Sync Now. The system reads 'Properties' and 'Tasks' tabs, syncing edits via webhook push and manual sync. All cleaner assignments, status completions, and timeline hours sync bi-directionally back into your master sheet rows. Watch the Integrations hub for sync health so a broken permission or expired session does not silently stall schedules.",
    mockupType: "sheets"
  },
  {
    id: "ch-6",
    num: 6,
    title: "Properties",
    category: "Core Features",
    content: "The Properties registry is the structural foundation of TidyFlow. Located inside Sidebar → Properties, it houses a catalog of all service addresses, postal codes, property layouts (apartments, residential, commercial), unit counts, and default service rates. Set your company country once so address autocomplete stays scoped to that region; new properties (including Sheets imports) geocode automatically for GPS, maps, and routing. Clicking into any property lists historical task assignments, active recurring templates, map location coordinate points, photo timelines, and direct shortcuts to initiate new one-off task schedules."
  },
  {
    id: "ch-7",
    num: 7,
    title: "Tasks",
    category: "Core Features",
    content: "Tasks represent individual, billable work sessions. Managers create tasks by selecting a Property, assigning scheduled dates/times, outlining descriptions, and selecting assigned cleaners. Detailed checklists can be compiled manually, from checklist templates, or populated utilizing AI-suggested templates / the AI job setup assistant on open jobs. Cleaners attach job notes and journal entries to each visit. Each task also has its own team chat thread for managers and assigned cleaners (text + voice notes). The task lifecycle advances sequentially: Planned → Assigned → In Progress (cleaner active) → Submitted (work done) → QA Review → Approved (manager verified) → Completed (billed). Managers receive push notifications when statuses change or SOS is triggered."
  },
  {
    id: "ch-8",
    num: 8,
    title: "Guide for cleaners",
    category: "Role Guides",
    content: "Cleaners access TidyFlow on smartphones, greeted by a streamlined, focused daily schedule showing only today's jobs. Cleaners click an assigned task to inspect checklist milestones, access notes, open the task team chat (or send a voice note when gloves are on), and start their work timer. GPS location is verified on clock-in and completion; managers see live GPS during active jobs and get alerts if a cleaner is off-site. When signal drops, timers, checklists, photos, notes, and GPS pings queue offline and sync when connectivity returns. Cleaners click 'Start Tracking Session' to record timestamps, execute room checklists (required items can block start until complete), snap 'Before' and 'After' proof pictures, log supplies used, add field notes, and click 'Submit Job'. Use the red SOS button if you need emergency help.",
    mockupType: "timer"
  },
  {
    id: "ch-9",
    num: 9,
    title: "Guide for managers",
    category: "Role Guides",
    content: "Managers log into a dedicated browser dashboard or mobile coordinator app. The Home screen highlights today's unassigned tasks, pending timesheets, and open property issues. Managers can quickly inspect submitted tasks, review uploaded before/after photographs, compare checklist logs, reply in task chat, and approve or reject sessions to route hours automatically into active pay periods. Use Rota Builder for weekly assignments with leave awareness and AI best-match suggestions, broadcast company announcements for policy or weather updates, and open live cleaner tracking for active jobs. AI recommendations always require your confirmation — AI never auto-assigns.",
    mockupType: "ai"
  },
  {
    id: "ch-10",
    num: 10,
    title: "Guide for owners",
    category: "Role Guides",
    content: "Owners have master authority across business accounts. Upon login, owners access Billing (current plan, usage meters, upgrade/downgrade, cancel trial or paid plan), manage Stripe subscriptions, customize corporate branding layouts (logo embeds, bank details, and receipt headers), connect QuickBooks Online for client invoice sync, and audit multi-user logs. Owners can also open the Revenue dashboard for net profit, cash collected, expenses, and margins by property or client — then run Revenue AI analysis for a plain-language explanation of what changed. Use the Integrations hub to monitor Sheets, QuickBooks, and Stripe health, and broadcast company announcements when the whole team needs one message."
  },
  {
    id: "ch-11",
    num: 11,
    title: "Rota & scheduling",
    category: "Core Features",
    content: "Rostering is coordinated inside Sidebar → Rota Builder. It presents a grid layout mapping properties against cleaners for the week. Dispatchers drag, drop, and tap slots to assign staffers. TidyFlow automatically verifies holiday locks, preventing managers from accidentally scheduling cleaners on leave, and surfaces conflict warnings for double-bookings. Filters help you focus on unassigned slots. The scheduling system analyzes map coordinates to suggest route optimizations between properties, reducing travel time and fuel costs. Real-time updates keep every device in sync when assignments change. AI can suggest best-match cleaners based on history, distance, leave, and workload — managers always confirm."
  },
  {
    id: "ch-12",
    num: 12,
    title: "Recurring jobs",
    category: "Core Features",
    content: "Avoid scheduling recurring cleanings manually. Inside any Property window, managers can establish recurring clean schedules (e.g. weekly commercial cleans or monthly flats). Roster settings allow setting custom recurrence periods (weekly or interval patterns), weekdays, and optional end-dates. Once saved, TidyFlow automatically schedules and dispatches tasks whenever a recurrence date becomes due, ensuring constant calendar coverage without retyping the same jobs every week."
  },
  {
    id: "ch-13",
    num: 13,
    title: "Photos, PDFs & client proof",
    category: "Core Features",
    content: "Document cleanliness visually to protect your business. Cleaners upload geo-tagged arrival and departure photos (works offline and uploads when connected). Managers review pictures under 'Submitted' tasks and download branded PDF job reports instantly — per job or split before/after. Generate secure client portal links so clients inspect checklists and images without email attachments. Collect client reviews after jobs; negative feedback can be routed privately to managers while positive reviews are highlighted. AI photo verification scores cleaning quality and flags concerns on the manager dashboard for QA review (plan monthly quotas apply).",
    mockupType: "photos"
  },
  {
    id: "ch-14",
    num: 14,
    title: "Payroll & hours",
    category: "Core Features",
    content: "Simplify payroll calculations. When cleaners submit active timers, hours land inside Payroll → Pending Hours. Managers review total elapsed times (breaks excluded from paid time), make adjustments if needed, and click Approve. The system compiles wages from customized per-user hourly rates, overtime rules, or flat-rate profiles. Generate payroll invoices as PDFs for cleaners and contractors. Cleaners can also submit expense claims with receipt photos for manager approval, and submit working hours outside a single task timer when needed (training, travel, admin). Owners export pay periods and printable payslips. On supported plans, approved payroll runs can optionally sync to QuickBooks as vendor bills.",
    mockupType: "pdf"
  },
  {
    id: "ch-15",
    num: 15,
    title: "Client invoices",
    category: "Core Features",
    content: "Bill clients for completed cleanings directly. Located inside Sidebar → Client Invoices, managers can select approved, unbilled tasks to auto-generate client invoices. Financial modules pull default property service rates or custom task budgets, compiling them into corporate templates with logo, prefix, language, and tax rules from Invoice Configuration. Managers can mark invoices as sent, pending, or paid, share PDF invoices via email or WhatsApp from the device share sheet, and sync financial tracking across the platform. When QuickBooks Online is connected, sync a single invoice or bulk-select pending ones — optional automation can push on create, send, or mark-paid so bookkeepers do not re-type every job."
  },
  {
    id: "ch-16",
    num: 16,
    title: "Leave requests",
    category: "Core Features",
    content: "Cleaners submit sick and holiday leave requests inside Sidebar → Leave. The screen logs vacation dates and descriptions, dispatching notifications to coordinators. Managers approve or reject leave listings under Rota/Leave. Once approved, TidyFlow locks those dates on the rota grid and disables unavailable staff in assignment pickers, preventing coordinators from scheduling the cleaner on leave and avoiding roster mistakes."
  },
  {
    id: "ch-17",
    num: 17,
    title: "Issues & safety (SOS)",
    category: "Core Features",
    content: "Field worker safety is paramount. Cleaners have access to a permanent, bright red SOS emergency panic button on the active task screen. Pressing the SOS button instantly uploads coordinate locks to operations servers and triggers high-priority, flashing notifications on all managers' dashboards, logging the incident with a real-time safety dispatch timeline managers must acknowledge. Separately, property issues can be logged from a task, assigned, and resolved with status history so maintenance and complaints become tracked tickets — not forgotten texts.",
    mockupType: "sos"
  },
  {
    id: "ch-18",
    num: 18,
    title: "Supplies",
    category: "Advanced",
    content: "Keep supplies fully stocked using our built-in inventory tracker (Sidebar → Supplies). Managers maintain a company catalog of cleaning equipment, liquids, and tools, setting reorder boundaries. During cleanings, cleaners can log materials used (e.g. paper towels, bin bags) on the task card against that catalog. If stock levels slip below safety margins, automatic dashboard warnings notify managers to reorder. Pair supply burn with Revenue views so chemical cost shows up next to labor — not as a surprise at quarter end."
  },
  {
    id: "ch-19",
    num: 19,
    title: "TidyFlow AI",
    category: "Advanced",
    content: "Optimize operations with private, server-side AI (Gemini / Groq). AI assists managers during dispatch by suggesting best-fit cleaners based on location, availability, leave status, and past ratings — managers always make the final assignment decision. AI suggests checklist items when creating tasks. Uploaded departure photos are scored for quality; flags appear on the manager dashboard without blocking cleaners. The owner/manager dashboard surfaces AI business insights highlighting risks and opportunities. The TidyFlow setup assistant guides new open tasks with manual vs AI-assisted checklist + assign flow (skips finished/submitted tasks). On the Revenue dashboard, Revenue AI analyzes a date range with focus modes (overall, margin, cash, costs) and explains what drove the numbers in plain language. Monthly AI operation counters and photo-AI quotas are plan-aware with upgrade CTAs when limits are reached.",
    mockupType: "ai"
  },
  {
    id: "ch-20",
    num: 20,
    title: "Offline mode",
    category: "Advanced",
    content: "Field workers frequently operate in basements or low-signal neighborhoods. TidyFlow is engineered offline-first. Cleaners can check off checklists, start or break timers, log property issue notes, capture before/after photos, and keep working while completely offline. Offline GPS queues location pings so managers still get a presence trail for active jobs when the phone reconnects. The app queues data changes locally and syncs automatically with operations servers once signal is restored — without forcing cleaners outside just to clock in."
  },
  {
    id: "ch-21",
    num: 21,
    title: "Settings & permissions",
    category: "Advanced",
    content: "Configure notifications, location services, biometric unlock, and cache sync inside Sidebar → Settings / Preferences. Enable push notifications for assignments, sync events, billing, plan limits, and SOS alerts. Cleaners must enable background location for GPS clock-in and geofencing, plus camera access for photos. Owners set default currency (100+ via Stripe list; e.g. £ GBP, $ USD, € EUR), customize PDF branding (logo, bank details, headers), set company country for smart addresses, and manage Stripe subscription billing on Startup, Standard, or Premium tiers with live usage meters for properties, cleaners, managers, and monthly quotas (AI, invoices, PDFs, photo AI). Change plan, start a trial, or cancel from Billing without emailing support. Each company's data is fully isolated in our multi-tenant SaaS architecture. Built-in tour guides help new users learn the app in all 11 supported languages."
  },
  {
    id: "ch-22",
    num: 22,
    title: "Task statuses explained",
    category: "Advanced",
    content: "TidyFlow guides tasks through a structured pipeline: Planned (created but no assigned staff), Assigned (staff allocated, waiting for date), In Progress (cleaner active, timer counting), Submitted (work complete, waiting for QA), QA Review (under quality review), Approved (verified by manager, ready to bill), Completed (fully paid), Rejected (sent back for rework), and Archived (removed). Batch actions let managers multi-select tasks for archive or bulk status updates from the task board."
  },
  {
    id: "ch-23",
    num: 23,
    title: "Troubleshooting & FAQ",
    category: "Support",
    content: "If Google Sheets data fails to sync, verify you have shared edit access with the service account email, ensure tab titles are exactly 'Properties' and 'Tasks', and check Integrations hub health. If QuickBooks sync fails, reconnect OAuth from Integrations and review the activity log for the failing invoice. If background location tracking fails, verify location access in device Settings. If photos or GPS queue without uploading, confirm internet access and wait for automatic sync. If you hit a plan limit (properties, cleaners, AI, invoices, PDFs), open Billing to upgrade or wait for the next billing-cycle quota reset. For further assistance, click 'Help & Tour' inside the Sidebar, browse What's New feature pages on tidyflowapp.com, or contact support / book a demo from the Contact page."
  },
  {
    id: "ch-24",
    num: 24,
    title: "Task chat & announcements",
    category: "Core Features",
    content: "Stop losing job instructions in WhatsApp. Every cleaning task has its own team thread for assigned cleaners and managers — with full history, real-time delivery when online, and voice messages when typing is awkward (gloves, wet hands, noisy plant rooms). Open the task and use Chat to keep access notes, checklist clarifications, and photo follow-ups attached to that job record. Clients cannot see task chat. Separately, owners and managers can broadcast company Announcements for policy changes, holiday schedules, weather, or safety reminders — one message to the whole team without forwarding through five group chats. Push and in-app notifications still cover assignments, SOS, sheet sync, and billing; chat is for conversation, announcements are for one-to-many news."
  },
  {
    id: "ch-25",
    num: 25,
    title: "Integrations & QuickBooks",
    category: "Advanced",
    content: "The Integrations hub (owners/admins) shows connection health for Google Sheets, QuickBooks Online, Stripe, and maps — plus recent sync activity and one-tap reconnect when a token expires. Google Sheets: two-way master Properties + Tasks sync with webhook push and write-back of status and assignees. QuickBooks Online: OAuth connect once, then sync client invoices with customers, line items, and totals (single or bulk). Optional automation can sync on create, send (email/WhatsApp), or mark-paid; approved payroll can sync as vendor bills on supported plans. Stripe: subscription billing, webhooks, trial reminders, and payment failure alerts. Google Maps & Places: map pins, geofence, routing, and country-scoped address autocomplete. Website /integrations explains partner tools; the in-app Integrations hub is the live connection panel."
  },
  {
    id: "ch-26",
    num: 26,
    title: "Billing, plans & Revenue AI",
    category: "Advanced",
    content: "Owners and company admins manage the TidyFlow SaaS subscription inside Billing: view current plan (Startup, Standard, or Premium), next bill date, billing history, upgrade immediately, schedule downgrades for the next period, cancel a free trial anytime, or cancel a paid plan at period end via Stripe. Live usage meters show fixed caps (properties, cleaners, managers) and monthly quotas (AI operations, invoices, photo AI, PDFs) that reset each billing cycle — with in-app warnings before hard stops. The plan feature matrix shows what is included vs locked (AI, invoices, QuickBooks, PDFs, etc.). Separately, the owner Revenue dashboard reports net profit, cash collected, expenses, paid vs outstanding invoices, and margins by property or client for a custom date range. Tap Analyze with AI for a plain-language CFO-style narrative on risks, costs, and cash flow — plan-gated AI quotas apply."
  }
];
