export const business = {
  name: "Auto Accessories Store",
  category: "Auto Accessories Store",
  rating: 4.7,
  reviewCount: 212,
  address:
    "VMS Building, 80, Varthur Road, Circle, Dommasandra, Bengaluru, Karnataka 562125",
  addressShort: "Varthur Road Circle, Dommasandra",
  hours: "10:30 AM - 8:30 PM",
  phoneDisplay: "Needs confirmation",
  phoneHref: "tel:",
  whatsappDisplay: "Needs confirmation",
  whatsappHref: "https://wa.me/",
  mapQuery:
    "VMS Building, 80, Varthur Road, Circle, Dommasandra, Bengaluru, Karnataka 562125",
  openStatus: "Open now",
  socialLinks: [
    { label: "Instagram (Needs confirmation)", href: "#" },
    { label: "Facebook (Needs confirmation)", href: "#" },
  ],
};

export const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  business.mapQuery
)}`;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export const trustChips = [
  "4.7\u2605 (212 Reviews)",
  "Same-day interior work (when feasible)",
  "Honest recommendations",
  "Electrical & system repairs",
];

export const servicesPreview = [
  {
    title: "Infotainment Installation",
    description: "Clean fitting with basic setup and checks.",
    href: "/services#infotainment",
  },
  {
    title: "Interior Works",
    description: "Seat covers, mats, steering cover, interior upgrades.",
    href: "/services#interior",
  },
  {
    title: "Lighting Upgrades",
    description: "Headlamp, fog lamp, and HID setups with alignment.",
    href: "/services#lighting",
  },
  {
    title: "Exterior Accessories",
    description: "Rain visor, bumper protector, and practical add-ons.",
    href: "/services#exterior",
  },
  {
    title: "Audio Systems",
    description: "Audio accessories installation and testing.",
    href: "/services#audio",
  },
  {
    title: "Electrical Repair",
    description: "Diagnosis and repair of electrical items.",
    href: "/services#repair",
  },
];

export const featuredUpgrades = [
  {
    title: "Infotainment Install (Yuemi)",
    problem: "Factory unit feels limited.",
    upgrade: "Yuemi unit installed with basic setup and post-install checks.",
    result: "Yuemi infotainment performance is too good and installed very well.",
    cta: "Ask on WhatsApp",
  },
  {
    title: "Interior Combo Upgrade (Seat covers + mats + steering cover)",
    problem: "Interior looks worn or plain.",
    upgrade: "Bucket-fitted seat covers, mats, and steering cover.",
    result: "Neat finishing with same-day work when feasible.",
    cta: "Ask on WhatsApp",
  },
  {
    title: "Fog Lamp Upgrade (Hi-Low projector + HID)",
    problem: "Need a cleaner lighting setup.",
    upgrade: "AES Hi-Low projector with HID setup and beam alignment.",
    result: "Clean lighting handled by a calm, knowledgeable mechanic.",
    cta: "Ask on WhatsApp",
  },
];

export const howItWorks = [
  { title: "Share car model + need", icon: "car" },
  { title: "Get honest recommendation", icon: "chat" },
  { title: "Professional fitting", icon: "tool" },
  { title: "Quality check + handover", icon: "check" },
];

export const galleryFilters = [
  "Infotainment",
  "Interior",
  "Lighting",
  "Accessories",
  "Repair",
];

export const galleryItems = [
  {
    id: "infotainment-1",
    title: "Infotainment install - clean fitment",
    category: "Infotainment",
  },
  {
    id: "interior-1",
    title: "Bucket-fitted seat covers",
    category: "Interior",
  },
  {
    id: "lighting-1",
    title: "Fog lamp upgrade with alignment",
    category: "Lighting",
  },
  {
    id: "accessories-1",
    title: "Rain visor fitted",
    category: "Accessories",
  },
  {
    id: "repair-1",
    title: "Electrical repair diagnosis",
    category: "Repair",
  },
  {
    id: "interior-2",
    title: "Floor mats fitting",
    category: "Interior",
  },
  {
    id: "lighting-2",
    title: "Headlamp upgrade check",
    category: "Lighting",
  },
  {
    id: "accessories-2",
    title: "Rear bumper protector",
    category: "Accessories",
  },
];

export const reviewHighlights = [
  "Yuemi infotainment performance is too good and installed very well.",
  "Suggests only what is required, reasonable price, and good in repairs.",
  "Same-day interior work with seat covers, mats, and steering cover.",
  "Lighting upgrades done by a knowledgeable calm mechanic.",
  "Calm, knowledgeable mechanic with good customer interaction.",
  "Strong at repair of car systems and electrical items.",
];

export const reviewQuotes = [
  "Yuemi infotainment performance is too good... installed very well.",
  "Suggests only what's required... reasonable price... good in repairs.",
  "Same-day interior work... seat covers, mats, steering cover.",
  "Lighting upgrades done by knowledgeable calm mechanic.",
];

export const reviewKeywords = [
  "Professional fitting",
  "Reasonable price",
  "Same-day interior",
  "Honest suggestions",
  "Electrical repair",
  "Good interaction",
];

export const faqs = [
  {
    question: "Do you suggest only what is required?",
    answer:
      "Yes. Customers mention honest recommendations and guidance based on the vehicle's needs.",
  },
  {
    question: "Can interior work be done same day?",
    answer:
      "Many interior jobs can be completed same day depending on workload and requirements.",
  },
  {
    question: "Do you repair car electrical issues?",
    answer:
      "Yes. Customers mention strong repair capability for car electrical and system items.",
  },
  {
    question: "Do you install infotainment systems (Yuemi)?",
    answer:
      "Yes. Yuemi infotainment installation is supported with basic setup and checks.",
  },
  {
    question: "Do you do lighting upgrades (fog, headlamp, projector, HID)?",
    answer:
      "Yes. Headlamp, fog lamp, projector, and HID setups are supported with alignment checks.",
  },
  {
    question: "Where are you located?",
    answer:
      "VMS Building, 80, Varthur Road, Circle, Dommasandra, Bengaluru, Karnataka 562125.",
  },
];

export const servicesCatalog = [
  {
    id: "infotainment",
    title: "Infotainment & In-Car Tech",
    intro: "Clean fitting with basic setup and post-install checks.",
    items: [
      {
        name: "Infotainment System Installation (Yuemi supported)",
        includes: ["Fitting", "Basic setup", "Testing and post-install checks"],
        recommendedFor: [
          "Navigation, music, and camera integration (Needs confirmation)",
        ],
        cta: "Check compatibility on WhatsApp",
        notes: "Clean fitting and post-install checks.",
      },
    ],
  },
  {
    id: "interior",
    title: "Interior Works",
    intro: "Neat finishing with bucket fitting and same-day capability.",
    items: [
      {
        name: "Seat Covers Installation (Bucket fitting)",
        includes: ["Bucket-fitted seat covers", "Neat finishing"],
        recommendedFor: ["Comfort and premium look"],
        cta: "Get seat cover options",
      },
      {
        name: "Floor Mats",
        includes: ["Selection", "Fitting"],
        recommendedFor: ["Interior protection and easy cleaning"],
        cta: "Ask mats options",
      },
      {
        name: "Steering Cover",
        includes: ["Fitting", "Alignment"],
        recommendedFor: ["Grip and interior refresh"],
        cta: "Ask steering cover options",
      },
      {
        name: "Same-day Interior Work",
        includes: [
          "Many interior jobs can be completed same day depending on workload and requirements.",
        ],
        recommendedFor: ["Quick interior refresh"],
        cta: "Check today availability",
      },
    ],
  },
  {
    id: "lighting",
    title: "Lighting Upgrades",
    intro: "Upgrade lights with alignment checks and clean installation.",
    items: [
      {
        name: "Headlamp Upgrade or Replacement (100W mentioned)",
        includes: ["Replacement or upgrade", "Alignment check"],
        recommendedFor: ["Improved visibility"],
        cta: "Suggest best headlamp setup",
      },
      {
        name: "Fog Lamp Upgrade (AES Hi-Low projector)",
        includes: ["Upgrade", "Beam alignment"],
        recommendedFor: ["Focused beam pattern"],
        cta: "Ask fog lamp upgrade",
      },
      {
        name: "HID Setup",
        includes: ["HID installation", "Testing"],
        recommendedFor: ["Lighting upgrade"],
        cta: "Ask HID options",
      },
    ],
  },
  {
    id: "exterior",
    title: "Exterior Accessories",
    intro: "Practical exterior add-ons installed neatly.",
    items: [
      {
        name: "Rain Visor",
        includes: ["Selection", "Fitting"],
        recommendedFor: ["Comfort in rain"],
        cta: "Rain visor for my car",
      },
      {
        name: "Rear Bumper Protector",
        includes: ["Fitting", "Finishing"],
        recommendedFor: ["Protective add-on"],
        cta: "Bumper protector options",
      },
      {
        name: "Practical Exterior Add-ons",
        includes: ["Other exterior accessories (Needs confirmation; list on request)"],
        recommendedFor: ["Customized exterior needs"],
        cta: "Ask available exterior accessories",
      },
    ],
  },
  {
    id: "audio",
    title: "Audio Systems",
    intro: "Audio upgrades installed with testing.",
    items: [
      {
        name: "Audio System Upgrades",
        includes: ["Audio accessory install", "Testing"],
        recommendedFor: ["Better sound experience"],
        cta: "Plan audio upgrade",
      },
      {
        name: "Accessory Recommendations",
        includes: ["Recommendations based on vehicle needs"],
        recommendedFor: ["Choosing the right accessories"],
        cta: "Ask for accessory recommendations",
      },
    ],
  },
  {
    id: "repair",
    title: "Electrical Repair & Diagnostics",
    intro: "Speciality in repair of car systems and electrical items.",
    items: [
      {
        name: "Electrical and System Repair",
        includes: ["Diagnosis", "Repair of electrical and electronics items"],
        recommendedFor: ["Electrical or system issues"],
        cta: "Describe your issue on WhatsApp",
        notes: "Customers mention strong repair skills for electrical items.",
      },
    ],
  },
  {
    id: "packages",
    title: "Upgrade Packages",
    intro: "Bundled upgrades for new cars and refreshes.",
    items: [
      {
        name: "New Car Upgrade Package",
        includes: [
          "Seat covers",
          "Mats",
          "Rain visor",
          "Rear bumper protector",
          "Optional lighting or infotainment add-ons (Needs confirmation)",
        ],
        recommendedFor: ["New car owners"],
        cta: "Get package quote",
      },
      {
        name: "Upgrade Planning for Specific Car Models",
        includes: [
          "Recommendations based on the car model and usage",
          "Example mentioned in reviews: Nexon facelift (not exclusive)",
        ],
        recommendedFor: ["Planned upgrades for a specific model"],
        cta: "Plan my upgrades",
      },
    ],
  },
];

export const beforeAfterShowcase = [
  { title: "Infotainment install", category: "Infotainment" },
  { title: "Interior combo upgrade", category: "Interior" },
  { title: "Fog lamp upgrade", category: "Lighting" },
];
