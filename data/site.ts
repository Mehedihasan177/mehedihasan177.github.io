// ─────────────────────────────────────────────────────────────
//  All portfolio content lives here. Edit this file to update
//  the site — no component changes needed.
//  Images/videos live in /public/web (paths below are relative to it).
// ─────────────────────────────────────────────────────────────

export const site = {
  firstName: "MEHEDI",
  fullName: "Md. Mehedi Hasan",
  shortName: "Mehedi",
  /** Giant words behind your photo — the hero decodes and rotates through them.
   *  Use one word to keep it fixed, e.g. ["FLUTTER"]. Keep them similar in length. */
  heroWords: ["FLUTTER", "MOBILE", "DART"],
  role: ["Mobile Engineer", "iOS & Android"],
  title: "Software Engineer (Flutter)",
  company: "Nexdecade Technology",
  location: "Dhaka, Bangladesh",
  available: true,
  portrait: "web/profile.webp",
  cv: "web/cv/Md_Mehedi_Hasan_resume.pdf",
  email: "mdmehedihasan4051@gmail.com",
  bio: [
    "Flutter developer with ~5 years shipping iOS & Android apps.",
    "I design and build beautiful, high-performance cross-platform apps —",
    "from enterprise ERPs to consumer apps, on iOS and Android.",
  ],
  stats: [
    { value: "5+", label: "Years building\nwith Flutter" },
    { value: "20+", label: "Apps built\n& shipped" },
    { value: "9", label: "Featured\nprojects" },
  ],
  nav: [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Journey", href: "#journey" },
    { label: "Contact", href: "#contact" },
  ],
};

export type Role = { name: string; description: string; features: string[] };

export type Project = {
  key: string;
  title: string;
  category: string;
  group: "Enterprise" | "Tracking & Live" | "Consumer";
  platform: string;
  short: string;
  description: string;
  cover: string;
  /** Cover focus for cropping into 16:10 cards. */
  coverPosition?: string;
  gallery: string[];
  /** Gallery images are wide (desktop screenshots) rather than phone screens. */
  wideGallery?: boolean;
  video?: string;
  tech: string[];
  features: string[];
  roles?: Role[];
  play?: string;
  ios?: string;
};

const img = (k: string) => `web/${k}.webp`;

export const projects: Project[] = [
  {
    key: "btv",
    title: "BTV E-Service",
    category: "BTV E-Service",
    group: "Enterprise",
    platform: "Android · Enterprise ERP",
    short: "Enterprise ERP for Bangladesh Television",
    description:
      "A comprehensive Enterprise Resource Planning (ERP) mobile application for Bangladesh Television (BTV), designed for three types of users: Admin, Artist and Visitor. The app streamlines artist management, budgeting, bill processing, gate pass management, FTP file transfer and reporting, with full bilingual (Bengali/English) support.",
    cover: img("cover-btv"),
    gallery: [...["btv-1", "btv-2", "btv-3", "btv-4", "btv-5", "btv-6"].map(img), "web/btv-upload.png", "web/btv-upload-notification.png"],
    video: "btv",
    tech: ["Flutter", "GetX", "Dio & REST API", "Firebase (FCM, Auth, Crashlytics)", "FTP (TUS Client)", "QR Scanner", "Syncfusion PDF/DOCX", "EN / BN", "Get Storage", "Fl Chart"],
    features: [
      "Role-based access for Admin, Artist and Visitor",
      "Artist roster & grade management",
      "Pre/Post budget approval",
      "Bill creation and payment processing",
      "Gate pass management with QR scanning",
      "FTP file upload/download",
      "Comprehensive reporting",
    ],
    roles: [
      {
        name: "Internal User (Admin)",
        description:
          "Full administrative control of the ERP system: managing artists, budgets, bills and gate passes, with a dashboard overview of artists, programs, payments and real-time visitor check-ins.",
        features: [
          "Artist roster & grade management",
          "Pre-budget & post-budget approval",
          "Bill creation, AGB bill & payment approval",
          "Gate pass approval, QR scanning & check-in verification",
          "FTP file/folder management with version history & comments",
          "Reports: Program Bill, Artist Wise, AGB, Artist Payment",
        ],
      },
      {
        name: "Artist",
        description:
          "Artists manage roster enrollment, view program schedules, track payments, apply for gate passes, request grade enhancements and access their rate card and tax information.",
        features: [
          "Artist registration & roster enlistment",
          "Roster status & grade enhancement requests",
          "Program schedules & payment history",
          "Gate pass application with vehicle, hardware & guardian info",
          "My rate card & complete tax list",
          "Notifications & bilingual support",
        ],
      },
      {
        name: "Visitor",
        description:
          "Visitors register, apply for gate passes and track their visit status with QR code verification.",
        features: [
          "Visitor registration & login",
          "Gate pass application & tracking",
          "Gate pass list with search & pagination",
          "Edit passes in Waiting/Return status",
          "Dashboard: On-site, Pending, Approved, Rejected",
          "QR code pass & attachment viewing",
        ],
      },
    ],
    play: "https://play.google.com/store/apps/details?id=com.btv.btverp&pcampaignid=web_share",
  },
  {
    key: "bdjobs",
    title: "BDJobs Employer App",
    category: "Bdjobs",
    group: "Enterprise",
    platform: "Android · Recruitment",
    short: "Recruitment app for employers",
    description:
      "BDJobs Employer is built around the job recruitment process. Employers use it to sort and shortlist qualified job seekers, including watching candidates' video resumes.",
    cover: img("cover-bdjobs"),
    gallery: ["bdjobs-1", "bdjobs-2", "bdjobs-3", "bdjobs-4", "bdjobs-5", "bdjobs-6"].map(img),
    tech: ["Flutter", "GetX", "Bloc", "Firebase", "Dio", "Freezed", "FCM"],
    features: ["Sort and shortlist qualified job seekers", "Video resume showcasing", "Push notifications", "Smooth recruiter journeys"],
    play: "https://play.google.com/store/apps/details?id=com.bdjobs.recruiter&pcampaignid=web_share",
  },
  {
    key: "m2m",
    title: "M2M Vehicle Tracking",
    category: "VTS",
    group: "Tracking & Live",
    platform: "Android · iOS · Fleet",
    short: "Live fleet tracking with route playback",
    description:
      "A real-time vehicle tracking system integrated with Google Maps, with live location updates, route playback and accurate movement visualization for efficient fleet monitoring.",
    cover: img("cover-m2m"),
    coverPosition: "center 30%",
    gallery: ["m2m-1", "m2m-2", "m2m-3", "m2m-4", "m2m-5", "m2m-6"].map(img),
    video: "m2m",
    tech: ["Flutter", "Google Maps", "Riverpod", "Provider", "SQFLite", "Firebase", "AES Encryption"],
    features: ["Vehicle list", "Vehicle live tracking", "Tracking history playback", "bKash and SSLCommerz payments", "Push notifications"],
    play: "https://play.google.com/store/apps/details?id=com.m2mbd.vts&pcampaignid=web_share",
    ios: "https://apps.apple.com/gb/app/m2m-vehicle-tracking-system/id1472843586",
  },
  {
    key: "robi",
    title: "Robi Vehicle Tracking",
    category: "VTS",
    group: "Tracking & Live",
    platform: "Android · iOS · Fleet",
    short: "Real-time vehicle tracking for Robi",
    description:
      "Robi's VTS solution built with Google Maps, enabling real-time tracking, route visualization and location history for vehicles.",
    cover: img("cover-robi"),
    coverPosition: "center 20%",
    gallery: ["robi-1", "robi-2", "robi-3", "robi-4", "robi-5", "robi-6"].map(img),
    tech: ["Flutter", "Google Maps", "Riverpod", "Provider", "SQFLite", "Firebase", "AES Encryption"],
    features: ["Vehicle list", "Vehicle live tracking", "Tracking history", "bKash and SSLCommerz payments", "Push notifications"],
    play: "https://play.google.com/store/apps/details?id=bd.com.robi.vts&pcampaignid=web_share",
    ios: "https://apps.apple.com/gb/app/robi-vehicle-tracking-service/id1231820564",
  },
  {
    key: "surveillance",
    title: "Surveillance Pro",
    category: "CCTV Surveillance",
    group: "Tracking & Live",
    platform: "Mobile · Desktop · NVR",
    short: "Live CCTV on mobile & desktop",
    description:
      "Surveillance Pro is a cross-platform security monitoring app built with Flutter, offering real-time camera streaming and intelligent surveillance management on mobile and desktop. Live camera feeds with full streaming are implemented, while multi-device management, event configuration and video playback are in active development.",
    cover: img("cover-surveillance"),
    gallery: ["surveillance-1", "surveillance-2", "surveillance-3", "surveillance-4"].map(img),
    wideGallery: true,
    tech: ["Flutter", "WebRTC", "WebSocket", "Flutter Bloc", "Window Manager", "WebView"],
    features: [
      "Multi-camera grid view (1x1, 2x2, 3x3)",
      "Desktop (Windows, Linux, macOS) and mobile (iOS, Android)",
      "Multi- and single-camera systems",
      "Drag and drop a camera into any grid tile",
    ],
  },
  {
    key: "exam",
    title: "DayExam",
    category: "Online Exam",
    group: "Consumer",
    platform: "Android · iOS · EdTech",
    short: "Exam prep for BCS, HSC, SSC & admission",
    description:
      "A mobile examination and learning platform for students preparing for BCS, HSC, SSC and university admission exams, on Android and iOS. Students take subject-wise exams, track progress and improve through detailed performance analytics.",
    cover: img("cover-exam"),
    gallery: ["exam-1", "exam-2", "exam-3", "exam-4"].map(img),
    video: "dayexam",
    tech: ["Flutter", "GetX", "bKash", "SSLCommerz", "YouTube Player", "Flutter Math"],
    features: [
      "Exams for BCS, HSC, SSC and admission tests",
      "Topic-wise and chapter-wise quizzes",
      "Free and paid exams; Gold, Diamond & Elite packages",
      "Daily and weekly progress tracking",
      "Ranking based on score and performance",
      "Secure payments with bKash and SSLCommerz",
    ],
    play: "https://play.google.com/store/apps/details?id=com.datahost.day_exam&pcampaignid=web_share",
  },
  {
    key: "face",
    title: "Face Attendance",
    category: "Attendance System",
    group: "Enterprise",
    platform: "Android · ML Kit",
    short: "Facial-recognition check-ins",
    description:
      "A secure facial recognition attendance system for quick check-ins. Employees mark attendance with one tap, which only works on authorized company WiFi. The app captures a face image and verifies it in real time against company ERP records — no biometric or personal data is stored in the app.",
    cover: img("cover-face"),
    gallery: ["face-1", "face-2", "face-3", "face-4", "face-5"].map(img),
    tech: ["Flutter", "Flutter Face API", "Google ML Kit", "Camera", "Table Calendar", "GetX"],
    features: [
      "Facial recognition attendance",
      "Works only on authorized company WiFi",
      "Real-time verification with the ERP",
      "One-tap check-in with instant feedback",
      "Retake option for failed attempts",
    ],
    play: "https://play.google.com/store/apps/details?id=com.neways.attendance&pcampaignid=web_share",
  },
  {
    key: "social",
    title: "BuzzNex",
    category: "Social",
    group: "Consumer",
    platform: "Desktop · Messaging",
    short: "Desktop chat, files & calls",
    description:
      "A modern desktop social networking platform for seamless communication. It supports real-time messaging, instant file sharing and high-quality voice/video calling, built to deliver a fast, secure and engaging experience for teams and communities.",
    cover: img("cover-social"),
    gallery: ["social-1", "social-2", "social-3"].map(img),
    wideGallery: true,
    tech: ["Flutter Desktop", "WebSocket", "REST API", "Flutter Bloc", "AES Encryption"],
    features: ["Real-time chat", "File sharing", "Voice and video calling", "User profiles"],
  },
  {
    key: "reserveit",
    title: "Reserve-IT",
    category: "Restaurant Reservation",
    group: "Consumer",
    platform: "Android · iOS · Dining",
    short: "Restaurant discovery & booking",
    description:
      "ReserveIt is a restaurant discovery and reservation platform built with Flutter. A unique visual system — a pepper mill icon that scales with the value ratio between price and food quality — helps users find restaurants. With seamless sign-in, easy table booking and built-in reviews, users can book their ideal dining experience in a few taps.",
    cover: img("cover-reserveit"),
    coverPosition: "left center",
    gallery: [img("cover-reserveit")],
    wideGallery: true,
    tech: ["Flutter", "Provider", "Firebase", "Google Maps", "HTTPS"],
    features: ["Smart restaurant discovery", "Easy reservation system", "Google Maps", "bKash and SSLCommerz payments", "Push notifications"],
  },
];

export const tools = [
  "flutter",
  "dart",
  "firebase",
  "androidstudio",
  "xcode",
  "figma",
  "git",
  "postman",
  "webrtc",
  "googlemaps",
] as const;

export const about = {
  intro:
    "I'm a dedicated Flutter developer who transforms ideas into beautiful, functional mobile applications that users love. I write clean, maintainable code and care about UX, performance and scalable architecture — and when I'm not coding, I'm exploring new tech and sharing knowledge with the developer community.",
  learning: [
    { title: "B.Sc. in Engineering", desc: "BAUET, Natore · CGPA 3.20 / 4.00", year: "2016 — 2020", logo: "web/logo-bauet.webp" },
    { title: "Udemy Flutter Certification", desc: "Udemy · July 2021", year: "2021", logo: "web/logo-udemy.webp" },
    { title: "Mobile Game & App Skill Development", desc: "ICT Division, Bangladesh", year: "2018", logo: "web/logo-ict.webp" },
  ],
  toolkit: [
    "Flutter",
    "Dart",
    "GetX",
    "Bloc",
    "Riverpod",
    "Provider",
    "Firebase",
    "WebRTC",
    "WebSocket",
    "Clean Architecture",
    "MVVM",
    "Dio",
    "GetIt",
    "Google Maps",
    "bKash · SSLCommerz",
    "ML Kit",
  ],
  process: [
    { title: "Discover", desc: "Understanding the users, the business and what the app really needs to do." },
    { title: "Design", desc: "Turning Figma designs into pixel-perfect, responsive mobile interfaces." },
    { title: "Architect", desc: "Clean architecture, the right state management and solid API contracts." },
    { title: "Build", desc: "Fast, secure Flutter code — real-time features, payments, maps and more." },
    { title: "Release", desc: "Testing, Play Store & App Store releases, and maintenance after launch." },
  ],
  quote: ["Clean code,", "real products.", "iOS · Android", "& Desktop."],
};

export type Job = {
  years: string;
  role: string;
  org: string;
  location: string;
  desc: string;
  points: string[];
  tags: string[];
  current?: boolean;
};

export const journey: Job[] = [
  {
    years: "Jun 2025 — Now",
    role: "Software Engineer, Flutter",
    org: "Nexdecade Technology Pvt. Ltd.",
    location: "Dhaka, Bangladesh",
    desc: "Lead developer of BTV ERP, a multi-role (Admin / Artist / Visitor) app for Bangladesh Television, plus live vehicle-tracking, surveillance and messaging apps.",
    points: [
      "Designed the pre/post-budget module with multi-stage approval workflows (Submit → PM → GM → Finance → Audit → Payment), cutting approval turnaround from 3–5 days to 1–2 days.",
      "Built QR gate-pass verification, resumable TUS file uploads with permission-controlled sharing, and English/Bangla localization.",
      "Shipped three live vehicle-tracking apps on Google Play and the App Store: GP VTS (Grameenphone), Robi VTS and Nex VTS.",
      "Built a surveillance app streaming live WebRTC feeds from an unlimited number of cameras per client.",
      "Built a messaging app with real-time WebSocket chat and 1:1 WebRTC audio calls.",
      "Secured sensitive data with AES-256 and added FCM push notifications with deep links to the exact record or approval.",
    ],
    tags: ["Lead Developer", "BTV ERP", "Google Maps", "WebRTC", "WebSocket", "AES-256", "Play Store & App Store"],
    current: true,
  },
  {
    years: "Mar 2024 — Jun 2025",
    role: "Flutter Developer",
    org: "Neways International Company",
    location: "Shahbag, Dhaka",
    desc: "Built cross-platform ERP modules for attendance, tasks, leave and salary-advance requests, used daily by employees.",
    points: [
      "Integrated the Laravel REST backend, WebSocket chat, and push notifications via Firebase and Pusher.",
      "Built a facial-recognition check-in system that works only on authorized company Wi-Fi, verifies faces against the ERP in real time and stores no biometric data on the device.",
    ],
    tags: ["ERP", "Laravel REST", "Pusher", "Firebase", "Face Recognition"],
  },
  {
    years: "Oct 2022 — Jan 2024",
    role: "Junior Mobile Application Developer",
    org: "BDJOBS.COM",
    location: "Dhaka, Bangladesh",
    desc: "Owned the job-seeker selection flow in the Bdjobs Employer app, used by recruiters across one of Bangladesh's largest recruitment platforms.",
    points: [
      "Candidate filtering, sorting, shortlisting and in-app video resume playback.",
      "Built features with Bloc and GetX, GetIt dependency injection, Dio networking and Freezed code generation, keeping the codebase modular as the team grew.",
      "Added FCM push and local notifications so recruiters are alerted to new applicants instantly.",
    ],
    tags: ["Bloc", "GetX", "GetIt", "Dio", "Freezed", "FCM"],
  },
  {
    years: "Mar 2022 — Sep 2022",
    role: "Flutter Application Developer",
    org: "Root Devs",
    location: "Dhaka, Bangladesh",
    desc: "Built Sccore and other live sports apps.",
    points: ["Match streaming (Better Player), live scores, premium chat, in-app purchases and Google Sign-In."],
    tags: ["Live streaming", "In-App Purchases", "Google Sign-In"],
  },
  {
    years: "Jun 2021 — Feb 2022",
    role: "Intern → Junior Mobile Application Developer",
    org: "Skoder Technologies",
    location: "Dhaka, Bangladesh",
    desc: "Built two companion healthcare apps, Mediaid Pro (patients) and Mediaid (doctors), including in-app doctor–patient video consultations.",
    points: [
      "Intern Jun 2021 – Oct 2021; Junior Mobile Application Developer Nov 2021 – Feb 2022.",
      "As an intern, designed app screens in Figma and built them as responsive Flutter layouts.",
    ],
    tags: ["Healthcare", "Video calling", "Figma"],
  },
];

export type ContactIcon = "mail" | "phone" | "linkedin" | "leetcode" | "cv" | "form" | "pin";

export const contact: { icon: ContactIcon; label: string; value: string; href: string }[] = [
  { icon: "mail", label: "Email", value: "mdmehedihasan4051@gmail.com", href: "mailto:mdmehedihasan4051@gmail.com" },
  { icon: "phone", label: "Phone / WhatsApp", value: "+880 1877-286284", href: "https://wa.me/8801877286284" },
  { icon: "linkedin", label: "LinkedIn", value: "in/mehedihasanmehedi", href: "https://www.linkedin.com/in/mehedihasanmehedi/" },
  { icon: "leetcode", label: "LeetCode", value: "u/mehedihasan177", href: "https://leetcode.com/u/mehedihasan177/" },
  { icon: "cv", label: "Curriculum Vitae", value: "Md_Mehedi_Hasan_resume.pdf", href: "web/cv/Md_Mehedi_Hasan_resume.pdf" },
  {
    icon: "form",
    label: "Message form",
    value: "Send me a message",
    href: "https://docs.google.com/forms/d/e/1FAIpQLScu-m3kncsVSjpJJdhH5bWUoOx8f2V38Df6sEqMhu-MpiCuCQ/viewform?usp=publish-editor",
  },
  { icon: "pin", label: "Location", value: "Dhaka, Bangladesh", href: "https://maps.google.com/?q=Dhaka" },
];

/** Where the "Tell me about your project" box sends to (opens the visitor's mail app). */
export const contactEmail = site.email;

// ─── App playground (interactive 3D phone section) ───────────────────────────
export type PhoneApp = {
  key: string;
  label: string;
  short: string;
  emoji: string;
  /** Tile gradient on the phone + picker swatch */
  swatch: string;
  /** Section background glow while this app is loaded: inner → mid → outer */
  colors: [string, string, string];
  /** Floating tech chips shown around the phone for this app */
  chips: string[];
  /** Phone screenshots (portrait); defaults to the project's gallery */
  gallery: string[];
};

const shots = (k: string, n: number) => Array.from({ length: n }, (_, i) => `web/${k}-${i + 1}.webp`);

export const phoneHome: PhoneApp = {
  key: "home",
  label: "Home",
  short: "Start here",
  emoji: "👋",
  swatch: "linear-gradient(135deg,#8466ff,#2a1680)",
  colors: ["#3b2aa8", "#1a1050", "#07060f"],
  chips: ["GetX", "Bloc", "Dart", "Firebase", "Riverpod", "{ }", "WebRTC", "Provider", "MVVM", "GetIt"],
  gallery: [],
};

export const phoneApps: PhoneApp[] = [
  { key: "btv", label: "BTV ERP", short: "Enterprise ERP", emoji: "📺", swatch: "linear-gradient(135deg,#2fbf7a,#06402a)", colors: ["#0e7a4a", "#06402a", "#021409"], chips: ["GetX", "Dio", "FCM", "QR Scanner", "TUS Upload", "Syncfusion", "EN / BN", "Fl Chart", "Get Storage", "Crashlytics"], gallery: [...shots("btv", 6), "web/btv-upload.png", "web/btv-upload-notification.png"] },
  { key: "bdjobs", label: "BDJobs", short: "Recruitment", emoji: "💼", swatch: "linear-gradient(135deg,#5aa9f0,#04294e)", colors: ["#0b4f8a", "#04294e", "#010c14"], chips: ["GetX", "Bloc", "Firebase", "Dio", "Freezed", "FCM", "Video CV", "Filters", "Shortlist", "DI"], gallery: shots("bdjobs", 6) },
  { key: "robi", label: "Robi VTS", short: "Fleet tracking", emoji: "🛰️", swatch: "linear-gradient(135deg,#ff5a66,#4e0a10)", colors: ["#b3202c", "#4e0a10", "#140204"], chips: ["Google Maps", "Riverpod", "Provider", "SQFLite", "AES", "Firebase", "bKash", "SSLCommerz", "Live", "History"], gallery: shots("robi", 6) },
  { key: "m2m", label: "M2M VTS", short: "Route playback", emoji: "🚚", swatch: "linear-gradient(135deg,#ffb347,#4a2a06)", colors: ["#b86b12", "#4a2a06", "#120a02"], chips: ["Google Maps", "Riverpod", "Provider", "SQFLite", "Playback", "Firebase", "bKash", "AES", "Live", "Fleet"], gallery: shots("m2m", 6) },
  { key: "surveillance", label: "Surveillance", short: "Live CCTV", emoji: "📹", swatch: "linear-gradient(135deg,#4fd1e8,#121a2b)", colors: ["#2b3a55", "#121a2b", "#04060c"], chips: ["WebRTC", "Bloc", "WebSocket", "NVR", "Live feed", "Multi-cam", "Desktop", "Window Mgr", "WebView", "ICE"], gallery: ["web/surveillance-6.webp", "web/surveillance-5.webp"] },
  { key: "exam", label: "DayExam", short: "Exam prep", emoji: "📝", swatch: "linear-gradient(135deg,#3cc4ff,#06344a)", colors: ["#0f6f99", "#06344a", "#020d14"], chips: ["GetX", "bKash", "SSLCommerz", "YouTube", "Math", "Quizzes", "Ranking", "Packages", "Analytics", "BCS / HSC"], gallery: shots("exam", 4) },
  { key: "face", label: "Face Check-in", short: "Attendance", emoji: "🙂", swatch: "linear-gradient(135deg,#a77bf0,#2a1150)", colors: ["#6a2bb8", "#2a1150", "#0a0418"], chips: ["ML Kit", "Face API", "Camera", "GetX", "ERP sync", "Office WiFi", "Calendar", "Secure", "Verified", "No storage"], gallery: shots("face", 5) },
];
