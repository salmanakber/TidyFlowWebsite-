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
    content: "TidyFlow is the operating system for cleaning companies — schedule jobs, verify work on-site, pay your team, and prove quality to clients, all in one platform. Built for residential and commercial cleaning teams, it connects owners, managers, and cleaners with scheduling, GPS-verified job tracking, photo proof, payroll, client reports, and AI-powered insights — online or offline in the field. By replacing paper checklists, WhatsApp chaos, and separate payroll spreadsheets, TidyFlow gives you one secure, multi-tenant SaaS platform with role-based access, Stripe billing, Google Sheets two-way sync, and support for 11 languages.",
    mockupType: "pdf"
  },
  {
    id: "ch-2",
    num: 2,
    title: "Getting started",
    category: "Overview",
    content: "To initiate operations, company admins can sign up for a TidyFlow portal, establishing their business record. Upon first install, staffers encounter an interactive feature onboarding tour explaining primary modules. Once activated, owners are guided to set up secure payment profiles via Stripe. From there, owners can invite staff by accessing Users inside the Sidebar, entering worker names, emails, and role categories (Managers or Cleaners) to dispatch login credentials immediately."
  },
  {
    id: "ch-3",
    num: 3,
    title: "Understanding your role",
    category: "Overview",
    content: "TidyFlow enforces strict role-based access controls to guarantee data isolation. Owners/Admins oversee subscription plans, currency formats, client billing settings, master Google Sheets links, and company-wide financial reports. Managers focus on scheduling shift rosters, resolving property issue logs, and validating submitted timesheets. Cleaners operate within a simplified mobile layout designed purely to log hours, complete room-by-room tasks, upload before/after photos, and issue SOS alarms."
  },
  {
    id: "ch-4",
    num: 4,
    title: "Navigating the app",
    category: "Overview",
    content: "The left-side Sidebar menu forms the navigation compass. Clicking the menu button (☰) slides open routes to: Home (tailored role dashboard), Tasks (categorized calendar lists), Calendar, Properties, Rota Builder, Users (staff registry), Leave Requests, Payroll, Client Invoices, Supplies, and Preferences. Mobile users can also trigger custom onboarding tours from any screen via the Help & Tour shortcut in the menu footer."
  },
  {
    id: "ch-5",
    num: 5,
    title: "Google Sheets — connect & sync",
    category: "Core Features",
    content: "Connect your company spreadsheet to enable two-way sync. Step 1: Open Properties, then Google Sheets Sync. Step 2: Paste your spreadsheet URL. Step 3: Copy our unique service account email (e.g. sync@project.iam.gserviceaccount.com) and share edit permissions with it in Google Sheets. Step 4: Click Sync Now. The system reads 'Properties' and 'Tasks' tabs, syncing edits instantly in real-time. All cleaner assignments, status completions, and timeline hours sync bi-directionally back into your master sheet rows.",
    mockupType: "sheets"
  },
  {
    id: "ch-6",
    num: 6,
    title: "Properties",
    category: "Core Features",
    content: "The Properties registry is the structural foundation of TidyFlow. Located inside Sidebar → Properties, it houses a catalog of all service addresses, postal codes, property layouts (apartments, residential, commercial), unit counts, and default service rates. Clicking into any property lists historical task assignments, active recurring templates, map location coordinate points, and direct shortcuts to initiate new one-off task schedules."
  },
  {
    id: "ch-7",
    num: 7,
    title: "Tasks",
    category: "Core Features",
    content: "Tasks represent individual, billable work sessions. Managers create tasks by selecting a Property, assigning scheduled dates/times, outlining descriptions, and selecting assigned cleaners. Detailed checklists can be compiled manually or populated utilizing AI-suggested templates. Cleaners attach job notes and journal entries to each visit. The task lifecycle advances sequentially: Planned → Assigned → In Progress (cleaner active) → Submitted (work done) → QA Review → Approved (manager verified) → Completed (billed). Managers receive push notifications when statuses change or SOS is triggered."
  },
  {
    id: "ch-8",
    num: 8,
    title: "Guide for cleaners",
    category: "Role Guides",
    content: "Cleaners access TidyFlow on smartphones, greeted by a streamlined, focused daily schedule showing only today's jobs. Cleaners click an assigned task to inspect checklist milestones, access notes, and start their work timer. GPS location is verified on clock-in and completion; managers see live GPS during active jobs and get alerts if a cleaner is off-site. Cleaners click 'Start Tracking Session' to record timestamps, execute room checklists (required items can block start until complete), snap 'Before' and 'After' proof pictures, add field notes, and click 'Submit Job'. Everything works offline and syncs when signal returns.",
    mockupType: "timer"
  },
  {
    id: "ch-9",
    num: 9,
    title: "Guide for managers",
    category: "Role Guides",
    content: "Managers log into a dedicated browser dashboard or mobile coordinator app. The Home screen highlights today's unassigned tasks, pending timesheets, and open property issues. Managers can quickly inspect submitted tasks, review uploaded before/after photographs, compare checklist logs, and approve or reject sessions to route hours automatically into active pay periods.",
    mockupType: "ai"
  },
  {
    id: "ch-10",
    num: 10,
    title: "Guide for owners",
    category: "Role Guides",
    content: "Owners have master authority across business accounts. Upon login, owners access billing configurations, manage active Stripe subscriptions, customize corporate branding layouts (logo embeds, bank details, and receipt headers), and audit multi-user logs. Owners can also access analytics interfaces tracking company-wide revenue, active roster seats, and AI-powered operational insights."
  },
  {
    id: "ch-11",
    num: 11,
    title: "Rota & scheduling",
    category: "Core Features",
    content: "Rostering is coordinated inside Sidebar → Rota Builder. It presents a grid layout mapping properties against cleaners for the week. Dispatchers drag, drop, and tap slots to assign staffers. TidyFlow automatically verifies holiday locks, preventing managers from accidentally scheduling cleaners on leave. The scheduling system analyzes map coordinates to suggest route optimizations between properties, reducing travel time and fuel costs. Real-time updates keep every device in sync when assignments change."
  },
  {
    id: "ch-12",
    num: 12,
    title: "Recurring jobs",
    category: "Core Features",
    content: "Avoid scheduling recurring cleanings manually. Inside any Property window, managers can establish recurring clean schedules (e.g. weekly commercial cleans or monthly flats). Roster settings allow setting custom recurrence periods, weekdays, and end-dates. Once saved, TidyFlow automatically schedules and dispatches tasks whenever a recurrence date becomes due, ensuring constant calendar coverage."
  },
  {
    id: "ch-13",
    num: 13,
    title: "Photos, PDFs & client proof",
    category: "Core Features",
    content: "Document cleanliness visually to protect your business. Cleaners upload geo-tagged arrival and departure photos. Managers review pictures under 'Submitted' tasks and download branded PDF job reports instantly. Generate secure client portal links so clients inspect checklists and images without email attachments. Collect client reviews after jobs; negative feedback can be routed privately to managers while positive reviews are highlighted. AI photo verification scores cleaning quality and flags concerns on the manager dashboard for QA review.",
    mockupType: "photos"
  },
  {
    id: "ch-14",
    num: 14,
    title: "Payroll & hours",
    category: "Core Features",
    content: "Simplify payroll calculations. When cleaners submit active timers, hours land inside Payroll → Pending Hours. Managers review total elapsed times, make adjustments if needed, and click Approve. The system compiles wages from customized per-user hourly rates, overtime rules, or flat-rate profiles. Generate payroll invoices as PDFs for cleaners and contractors. Cleaners can also submit expense claims with receipt photos for manager approval. Owners export pay periods and printable payslips.",
    mockupType: "pdf"
  },
  {
    id: "ch-15",
    num: 15,
    title: "Client invoices",
    category: "Core Features",
    content: "Bill clients for completed cleanings directly. Located inside Sidebar → Client Invoices, managers can select approved, unbilled tasks to auto-generate client invoices. Financial modules pull default property service rates or custom task budgets, compiling them into corporate templates. Managers can mark invoices as sent, pending, or paid, syncing financial tracking across the platform."
  },
  {
    id: "ch-16",
    num: 16,
    title: "Leave requests",
    category: "Core Features",
    content: "Cleaners submit sick and holiday leave requests inside Sidebar → Leave. The screen logs vacation dates and descriptions, dispatching notifications to coordinators. Managers approve or reject leave listings under Rota/Leave. Once approved, TidyFlow locks those dates on the rota grid, preventing coordinators from scheduling the cleaner on leave and avoiding roster mistakes."
  },
  {
    id: "ch-17",
    num: 17,
    title: "Issues & safety (SOS)",
    category: "Core Features",
    content: "Field worker safety is paramount. Cleaners have access to a permanent, bright red SOS emergency panic button on the active task screen. Pressing the SOS button instantly uploads coordinate locks to operations servers and triggers high-priority, flashing notifications on all managers' dashboards, logging the incident with a real-time safety dispatch timeline.",
    mockupType: "sos"
  },
  {
    id: "ch-18",
    num: 18,
    title: "Supplies",
    category: "Advanced",
    content: "Keep supplies fully stocked using our built-in inventory tracker (Sidebar → Supplies). Managers log cleaning equipment, liquids, and tools, setting reorder boundaries. During cleanings, cleaners can log materials used (e.g. paper towels, bin bags) on the task card. If stock levels slip below safety margins, automatic dashboard warnings notify managers to reorder."
  },
  {
    id: "ch-19",
    num: 19,
    title: "TidyFlow AI",
    category: "Advanced",
    content: "Optimize operations with private, server-side AI (Gemini). AI assists managers during dispatch by suggesting best-fit cleaners based on location, availability, leave status, and past ratings — managers always make the final assignment decision. AI suggests checklist items when creating tasks. Uploaded departure photos are scored for quality; flags appear on the manager dashboard without blocking cleaners. The owner/manager dashboard surfaces AI business insights highlighting risks and opportunities. The TidyFlow setup assistant guides new property and task configuration.",
    mockupType: "ai"
  },
  {
    id: "ch-20",
    num: 20,
    title: "Offline mode",
    category: "Advanced",
    content: "Field workers frequently operate in basements or low-signal neighborhoods. TidyFlow is engineered offline-first. Cleaners can check off checklists, start or break timers, log property issue notes, and capture before/after photos while completely offline. The app queues data changes locally and syncs automatically with operations servers once signal is restored."
  },
  {
    id: "ch-21",
    num: 21,
    title: "Settings & permissions",
    category: "Advanced",
    content: "Configure notifications, location services, and cache sync inside Sidebar → Settings. Enable push notifications for assignments, sync events, and SOS alerts. Cleaners must enable background location for GPS clock-in and geofencing, plus camera access for photos. Owners set default currency (e.g. £ GBP, $ USD, € EUR), customize PDF branding (logo, bank details, headers), and manage Stripe subscription billing with usage-based pricing (base plan + per property). Each company's data is fully isolated in our multi-tenant SaaS architecture. Built-in tour guides help new users learn the app in all 11 supported languages."
  },
  {
    id: "ch-22",
    num: 22,
    title: "Task statuses explained",
    category: "Advanced",
    content: "TidyFlow guides tasks through a structured pipeline: Planned (created but no assigned staff), Assigned (staff allocated, waiting for date), In Progress (cleaner active, timer counting), Submitted (work complete, waiting for QA), QA Review (under quality review), Approved (verified by manager, ready to bill), Completed (fully paid), Rejected (sent back for rework), and Archived (removed)."
  },
  {
    id: "ch-23",
    num: 23,
    title: "Troubleshooting & FAQ",
    category: "Support",
    content: "If Google Sheets data fails to sync, verify you have shared edit access with the service account email, and ensure tab titles are exactly 'Properties' and 'Tasks'. If background location tracking fails, verify location access in device Settings. If photos queue without uploading, confirm internet access. For further assistance, click 'Help & Tour' inside the Sidebar."
  }
];
