export interface Project {
  id: string;
  title: string;
  subtitle: string;
  client: string;
  organization: string;
  location: string;
  period: string;
  role: string;
  category: 'health-informatics' | 'interoperability' | 'social-protection' | 'enterprise';
  summary: string;
  overview: string;
  keyResults: string[];
  technologies: string[];
  metrics?: { label: string; value: string }[];
  featured?: boolean;
  link?: string;
  linkText?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: 'Full-time' | 'Contract' | 'Consultant' | 'Leadership';
  description: string;
  achievements: string[];
  technologies: string[];
  highlight?: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  grade?: string;
  eqfLevel?: string;
  thesis?: string;
  details: string[];
  website?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: { name: string; level: number; highlight?: boolean }[];
}

export const personalInfo = {
  name: "Sunil Parajuli",
  tagline: "Solution Architect & Health Informatics / Social Protection Specialist",
  title: "Solution Architect • Health Informatics • e-Governance",
  location: "Kathmandu, Nepal",
  email: "sunilparajuli2002@gmail.com",
  phone: "(+977) 9849298499",
  nationality: "Nepalese",
  birthplace: "Sindhupalchok, Nepal",
  address: "Tenzingchowk, 44600, Kathmandu, Nepal",
  cvPath: "/Sunil_Parajuli_CV.pdf",
  bio: "Solution Architect and Senior Digital Health / Social Protection Specialist with over 9+ years of track record engineering mission-critical national health insurance systems, social security registries, FHIR interoperability pipelines, and AI-driven claims verification platforms. Leading openIMIS modularization, DPG integrations (openCRVS, MOSIP, openG2P, DHIS2), and high-impact international deployments across Nepal, Germany, Kenya, Laos, and Cameroon.",
  stats: [
    { label: "Years Experience", value: "9+" },
    { label: "National & Global Deployments", value: "10+" },
    { label: "Beneficiaries & Lives Impacted", value: "10M+" },
    { label: "Master GPA in e-Governance", value: "3.76" }
  ],
  socials: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "mailto:sunilparajuli2002@gmail.com",
    phone: "tel:+9779849298499"
  },
  specializations: [
    {
      title: "Digital Health & openIMIS",
      desc: "Architecting national-scale openIMIS health insurance management systems, claims engines, and modular transitions.",
      tags: ["openIMIS", "Claims Automation", "Health Financing", "Beneficiary Registry"]
    },
    {
      title: "FHIR & Interoperability",
      desc: "Connecting EHRs, CRVS, and social registries using HL7 FHIR, openHIM, openHIE, and Digital Convergence Initiative (DCI) standards.",
      tags: ["HL7 FHIR", "openHIM", "openCRVS", "openHIE", "DCI APIs"]
    },
    {
      title: "Social Protection & AI",
      desc: "Developing OCR document verification, machine learning false claims detection, and automated social security scheme workflows.",
      tags: ["OCR Verification", "ML Claims Detection", "Social Security Fund", "Grievance Mgmt"]
    },
    {
      title: "Enterprise Architecture",
      desc: "Designing resilient cloud, microservices, and hybrid infrastructure with Python/Django, React, .NET, PostgreSQL, and Linux/VMware.",
      tags: ["Python / Django", "ReactJS", "VB.NET", "PostgreSQL", "Cloud / VMware"]
    }
  ]
};

export const featuredProjects: Project[] = [
  {
    id: "berlin-hackathon-2026",
    title: "OCR Automated Document Verification for Social Protection",
    subtitle: "Berlin Hackathon • SAP Data Space",
    client: "GIZ Germany",
    organization: "Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)",
    location: "Berlin, Germany",
    period: "Feb 2026",
    role: "Solution Architect & Lead Developer",
    category: "social-protection",
    summary: "AI/OCR-based automated supporting document verification tool for social protection services, systematically cross-checking evidence against application claims.",
    overview: "Engineered an intelligent document verification engine utilizing Optical Character Recognition (OCR) to automate eligibility assessment and program integrity for social protection programs. The system extracts structured parameters from unstructured uploaded citizen documents and cross-validates with application data in real-time.",
    keyResults: [
      "Significant reduction in manual verification effort and administrative processing time",
      "Enhanced automated detection of inconsistencies and fraudulent submissions",
      "Standardized validation pipeline seamlessly integrated with openIMIS",
      "Recognized at the Berlin Hackathon hosted at SAP Data Space"
    ],
    technologies: ["Python", "OCR / Computer Vision", "openIMIS", "FastAPI", "Docker", "Machine Learning"],
    metrics: [
      { label: "Verification Time", value: "-75%" },
      { label: "Fraud Detection", value: "+92%" },
      { label: "Deployment", value: "GIZ Global" }
    ],
    featured: true,
    link: "https://openimis.atlassian.net/wiki/spaces/OP/pages/4879515650/openIMIS+Hackathon+2026+-+Berlin+Germany",
    linkText: "Hackathon Wiki"
  },
  {
    id: "gdhf-nairobi-2025",
    title: "Global Goods Interoperability: Claim to Care",
    subtitle: "Global Digital Health Forum (GDHF)",
    client: "GDHF / Global Digital Health Community",
    organization: "Global Digital Health Forum",
    location: "Nairobi, Kenya",
    period: "Dec 2025",
    role: "Main Author & Presenter",
    category: "health-informatics",
    summary: "Pioneering model linking Community Health Worker (CHW) feedback with health financing and insurance systems using openIMIS and open standards.",
    overview: "Authored and presented the breakthrough research and technical demo 'From Claim to Care: A Global Goods Interoperability Model to Link CHW Feedback and Health Financing Systems', showcasing openIMIS as a primary catalyst for interoperability enabling Universal Health Coverage (UHC).",
    keyResults: [
      "Lead author of poster presentation on driving digital healthcare transformation",
      "Delivered live architecture demonstration of end-to-end CHW to Health Financing interoperability",
      "Engaged ministries of health, donors, and global NGOs on scalable digital public goods"
    ],
    technologies: ["openIMIS", "HL7 FHIR", "openHIE", "CHW Systems", "Digital Health Architecture"],
    metrics: [
      { label: "Impact Target", value: "Universal Health Coverage" },
      { label: "Forum", value: "GDHF Nairobi" }
    ],
    featured: true
  },
  {
    id: "openimis-modular-migration",
    title: "Legacy to Modular openIMIS Migration",
    subtitle: "National Health Insurance Architecture",
    client: "Tinker Technology / GIZ S2HSS",
    organization: "GIZ & Health Insurance Board Nepal",
    location: "Kathmandu, Nepal",
    period: "Nov 2025 - Present",
    role: "Solution Architect",
    category: "health-informatics",
    summary: "Leading the architectural overhaul of national legacy openIMIS installations into modern, modular microservice architecture.",
    overview: "Spearheading the comprehensive migration strategy for openIMIS from legacy monolithic codebase to modern decoupled modules. Ensuring zero-downtime transition, backward data compatibility for millions of records, and scalable API interfaces.",
    keyResults: [
      "Decoupled core health insurance services for high availability and throughput",
      "Architected clean APIs for interoperability with hospitals, pharmacies, and third parties",
      "Streamlined deployment and maintenance across multi-tier national infrastructure"
    ],
    technologies: ["Django", "ReactJS", "PostgreSQL", "Docker", "REST / GraphQL", "Microservices"],
    featured: true
  },
  {
    id: "opencrvs-openimis-interoperability",
    title: "Civil Registration & Health Insurance Interoperability (openCRVS & openIMIS)",
    subtitle: "Digital Public Goods Integration",
    client: "GIZ S2HSS / Tinker Tech",
    organization: "GIZ Support to Health Sector Strategy",
    location: "Kathmandu, Nepal",
    period: "Oct 2024 - Dec 2024",
    role: "Team Lead for Interoperability",
    category: "interoperability",
    summary: "End-to-end integration between openCRVS (Civil Registration) and openIMIS using openHIM and Digital Convergence Initiative (DCI) APIs.",
    overview: "Architected and configured the interoperability pipeline connecting openCRVS civil registration with openIMIS beneficiary management. Implemented FHIR protocols, openHIE architecture principles, and DCI standards to automate newborn enrollments and vital event updates.",
    keyResults: [
      "Configured openHIM mediator for secure transaction routing and logging",
      "Adopted Digital Convergence Initiative (DCI) specification for cross-system syncing",
      "Eliminated manual dual-entry of birth and death events across national databases"
    ],
    technologies: ["openHIM", "openCRVS", "openIMIS", "HL7 FHIR", "openHIE", "DCI APIs", "Node.js / Python"],
    metrics: [
      { label: "Data Latency", value: "Real-time" },
      { label: "Manual Errors", value: "-99%" }
    ],
    featured: true
  },
  {
    id: "laos-health-insurance",
    title: "National Health Insurance Requirement & System Analysis for Lao PDR",
    subtitle: "International Digital Health Advisory",
    client: "Asia eHealth Information Network (AeHIN) / MoH Laos / WHO",
    organization: "Ministry of Health, Lao PDR & AeHIN",
    location: "Vientiane, Laos (Hybrid)",
    period: "2023 - 2024",
    role: "openIMIS Expert & Technical Consultant",
    category: "health-informatics",
    summary: "Technical requirement analysis, stakeholder alignment, and system customization mapping for Lao PDR's national health insurance program.",
    overview: "Conducted in-depth technical consultations with the Ministry of Health Lao PDR, WHO country representatives, and technical committees to define the digital architecture for national health insurance. Demonstrated openIMIS capabilities for digital claims processing, beneficiary tracking, and executive analytics.",
    keyResults: [
      "Facilitated national stakeholder workshops adapting global digital health tools to Lao local context",
      "Delivered comprehensive technical roadmap and feasibility assessment for MoH Lao PDR",
      "Designed digital claim submission and automated verification workflows"
    ],
    technologies: ["openIMIS", "Health Financing Analytics", "Policy Modeling", "Workflow Automation"],
    featured: false
  },
  {
    id: "ssf-nepal-automation",
    title: "Social Security Fund Nepal Full-Spectrum Management System",
    subtitle: "Enterprise Social Protection Infrastructure",
    client: "Social Security Fund (SSF) Nepal with Tinker Tech",
    organization: "Social Security Fund Nepal",
    location: "Kathmandu, Nepal",
    period: "2023 - Present",
    role: "Health Insurance & Social Security Expert",
    category: "social-protection",
    summary: "Enterprise modules for formal sector registration, medical/non-medical claims, duplicate claims control, investment, and loan management.",
    overview: "Engineered core modules for SSF Nepal facilitating schemes for Medical Claims, Non-Medical Claims, Formal Sector Contributor Registration, Sick Leave, Maternity Care, and Unemployment Benefits. Supported FHIR integration between hospital EHR systems and SSF's core platform.",
    keyResults: [
      "Built automated rules for detecting and blocking duplicate claims across facilities",
      "Developed end-to-end modules: Contributor Registration, Payment Collection, Grievance Handling, Claims, Investment & Loans",
      "Integrated EHR systems with SSF via FHIR endpoints for real-time claim adjudication"
    ],
    technologies: ["Django", "VB.NET", "IIS", "ReactJS", "PostgreSQL", "HL7 FHIR"],
    featured: true
  },
  {
    id: "sarovara-ecommerce",
    title: "Sarovara On-Demand E-Commerce & Mobile Ecosystem",
    subtitle: "Grantha Technology",
    client: "Grantha Pvt. Ltd.",
    organization: "Grantha",
    location: "Kathmandu, Nepal",
    period: "2019 - 2020",
    role: "Team Lead & Senior Software Developer",
    category: "enterprise",
    summary: "Cross-platform iOS/Android mobile applications and cloud backend for location-based on-demand product ordering and logistics.",
    overview: "Led the development of a complete commercial logistics and e-commerce platform featuring geofenced inventory routing, live order dispatching, rider tracking, and customer loyalty rewards.",
    keyResults: [
      "Engineered backend using Django REST framework and cross-platform mobile apps using Flutter",
      "Deployed real-time order notifications and location-based store routing",
      "Managed cross-functional design and marketing collateral creation"
    ],
    technologies: ["Django", "Flutter", "PostgreSQL", "Google Maps API", "Redis", "FCM"],
    featured: false
  },
  {
    id: "attorney-general-ict",
    title: "Enterprise ICT Infrastructure & Systems Design",
    subtitle: "Office of the Attorney General Nepal",
    client: "Office of the Attorney General",
    organization: "Government of Nepal",
    location: "Kathmandu, Nepal",
    period: "2017 - 2025",
    role: "Computer Engineer (Consultant)",
    category: "enterprise",
    summary: "Long-term ICT consultancy covering system architecture, VMware virtual infrastructure, secure Linux/Windows servers, and government IT policies.",
    overview: "Served as principal technical advisor for government ICT modernization, hardware/software procurement, data center operations, virtualization, and digital court case tracking systems.",
    keyResults: [
      "Formulated comprehensive IT policy and system development guidelines for the department",
      "Deployed and maintained high-availability VMware clusters, Linux and Windows Server environments",
      "Spearheaded technical specifications and quality verification for all ICT equipment procurements"
    ],
    technologies: ["VMware ESXi", "Linux Server", "Windows Server", "Networking / Security", "IT Policy"],
    featured: false
  }
];

export const experiences: Experience[] = [
  {
    id: "tinker-solution-architect",
    role: "Solution Architect",
    company: "Tinker Technology / GIZ",
    location: "Kathmandu, Nepal",
    period: "11/2025 - Present",
    type: "Leadership",
    description: "Leading the architectural modernization of national openIMIS installations to a modular microservice paradigm.",
    achievements: [
      "Guiding system architecture, security compliance, and API interfaces for national health insurance platforms",
      "Leading technical teams in designing decoupled modules for contributor management, claims processing, and reporting"
    ],
    technologies: ["Python", "Django", "ReactJS", "PostgreSQL", "Docker", "Microservices"],
    highlight: true
  },
  {
    id: "giz-sandbox-expert",
    role: "Project Expert for Sandbox & Knowledge Creation",
    company: "Deutsche Gesellschaft für Internationale Zusammenarbeit (GIZ)",
    location: "Kathmandu, Nepal",
    period: "2024 - Present",
    type: "Consultant",
    description: "Global expert managing openIMIS Sandbox testing, QA, and interoperability across international Digital Public Goods (DPGs).",
    achievements: [
      "Validated cross-system interoperability between openIMIS, openCRVS, MOSIP, openG2P, openSPP, and DHIS2",
      "Created structured technical documentation and presented knowledge materials at international Bhela meetings",
      "Represented openIMIS community at global developer summits (Germany, Cameroon, Kenya)"
    ],
    technologies: ["openIMIS", "MOSIP", "openG2P", "openCRVS", "DHIS2", "openHIE"],
    highlight: true
  },
  {
    id: "ilo-social-security",
    role: "Social Security Protection Expert",
    company: "International Labor Organization (ILO) with Tinker Tech",
    location: "Kathmandu, Nepal",
    period: "2023 - Present",
    type: "Consultant",
    description: "Customizing openIMIS to execute formal sector social security schemes across healthcare, maternity, sick leave, and unemployment.",
    achievements: [
      "Engineered full suite of SSF operational modules (Registration, Payment Collection, Grievance, Claims, Loans)",
      "Supported FHIR protocol integration between healthcare provider EHRs and openIMIS",
      "Delivered high-performance solutions combining Django, VB.NET, IIS, and ReactJS"
    ],
    technologies: ["Django", "ReactJS", "VB.NET", "IIS", "HL7 FHIR", "PostgreSQL"],
    highlight: true
  },
  {
    id: "tinker-team-lead",
    role: "Team Lead",
    company: "Tinker Technology Pvt. Ltd.",
    location: "Kathmandu, Nepal",
    period: "2020 - Present",
    type: "Leadership",
    description: "Leading technical delivery for Health Insurance Board (HIB) Nepal and social health protection programs.",
    achievements: [
      "Oversaw nationwide deployment, performance tuning, and user adoption of openIMIS for public health insurance",
      "Conducted nationwide technical trainings and capacity-building programs for health facility operators",
      "Acted as primary bridge between engineering teams, health insurance board directors, and international donors"
    ],
    technologies: ["openIMIS", "Python", "ReactJS", "PostgreSQL", "Linux", "System Analytics"],
    highlight: true
  },
  {
    id: "oag-consultant",
    role: "Computer Engineer (Consultant)",
    company: "Office of the Attorney General",
    location: "Kathmandu, Nepal",
    period: "01/2017 - 2025",
    type: "Consultant",
    description: "ICT infrastructure, virtualization, system requirements gathering, and government IT policy consultancy.",
    achievements: [
      "Spearheaded IT infrastructure planning, hardware procurement specifications, and datacenter administration",
      "Maintained VMware virtualization clusters and multi-platform server farms (Linux, Windows Server)",
      "Authored IT operational guidelines and security best practices for internal legal workflows"
    ],
    technologies: ["VMware", "Linux", "Windows Server", "Network Security", "IT Governance"]
  },
  {
    id: "fixtrox-remote",
    role: "Software Support & Developer (Remote)",
    company: "Fixtrox Pte. Ltd.",
    location: "Singapore (Remote)",
    period: "2019 - 2020",
    type: "Contract",
    description: "Full-stack web application development and cloud server maintenance via Upwork.",
    achievements: [
      "Built and deployed bespoke web applications using WordPress, PHP, and modern frontend scripts",
      "Managed AWS EC2 instances, Apache web servers, and cPanel hosting configurations"
    ],
    technologies: ["PHP", "WordPress", "JavaScript / jQuery", "AWS EC2", "Apache"]
  },
  {
    id: "nepstralia-remote",
    role: "Lead Software Developer (Remote)",
    company: "Nepstralia Group",
    location: "Australia (Remote)",
    period: "2018 - 2019",
    type: "Contract",
    description: "Built classifieds portal for international students seeking accommodation and employment.",
    achievements: [
      "Designed REST API architecture and integrated third-party payment and verification services",
      "Executed technical SEO, Google Analytics, and ad conversion tracking strategies"
    ],
    technologies: ["PHP / Laravel", "REST APIs", "SEO", "Google Analytics", "MySQL"]
  },
  {
    id: "seva-software-engineer",
    role: "Associate Software Engineer",
    company: "Seva Development Ltd.",
    location: "Lamjung, Nepal",
    period: "2016 - 2017",
    type: "Full-time",
    description: "Quality assurance, software testing, user documentation, and agile release management.",
    achievements: [
      "Executed manual and automated test suites to ensure high software reliability against client SLAs",
      "Facilitated end-user training sessions and authored detailed functional manuals for seamless adoption"
    ],
    technologies: ["QA Testing", "Agile / Scrum", "Jira", "Documentation", "Release Management"]
  }
];

export const educationList: Education[] = [
  {
    id: "master-egov",
    degree: "Master in e-Governance (2-Year Program / 63 Credits)",
    institution: "Nepal Open University",
    location: "Kathmandu, Nepal",
    period: "Expected Graduation: June 2026",
    grade: "Final Grade: 3.76 / 4.0",
    eqfLevel: "Level 7 (EQF)",
    thesis: "Ongoing Thesis (9 Credits): Machine Learning for False Claim Detection in Health Insurance",
    details: [
      "Field of Study: Science, Health and Technology",
      "Focus: e-Governance Architecture, Digital Public Infrastructure, Health Informatics, Machine Learning, Legal & Ethical Frameworks in ICT",
      "Maintained top-tier academic standing (3.76/4.0)"
    ],
    website: "https://nou.edu.np"
  },
  {
    id: "bachelor-ce",
    degree: "Bachelor of Computer Engineering",
    institution: "Kathmandu University (KU)",
    location: "Dhulikhel, Nepal",
    period: "Graduated",
    eqfLevel: "Level 6 (EQF)",
    details: [
      "Field of Study: Engineering, Manufacturing and Construction",
      "Core courses: Algorithms, Operating Systems, Database Management Systems, Computer Networks, Software Engineering, Microprocessors",
      "Active participant in tech symposiums and software projects"
    ],
    website: "https://ku.edu.np"
  },
  {
    id: "higher-secondary",
    degree: "Higher Secondary Educational Board (+2 Science)",
    institution: "GoldenGate International College",
    location: "Kathmandu, Nepal",
    period: "Completed",
    eqfLevel: "Level 4 (EQF)",
    details: [
      "Physics, Chemistry, Mathematics, and Computer Science"
    ],
    website: "https://goldengateintl.com"
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Health Informatics & Interoperability",
    description: "Deep domain expertise in global digital health standards and digital public goods.",
    skills: [
      { name: "openIMIS Architecture", level: 98, highlight: true },
      { name: "HL7 FHIR Standards", level: 95, highlight: true },
      { name: "openHIM & openHIE", level: 92, highlight: true },
      { name: "Digital Convergence Initiative (DCI)", level: 90, highlight: true },
      { name: "openCRVS, MOSIP, openG2P", level: 88 },
      { name: "Health Insurance Claims Engines", level: 96, highlight: true }
    ]
  },
  {
    title: "Backend & Systems Architecture",
    description: "Designing resilient, scalable enterprise architectures and microservices.",
    skills: [
      { name: "Python / Django / FastAPI", level: 95, highlight: true },
      { name: "PostgreSQL / MS SQL / MySQL", level: 92 },
      { name: "VB.NET & IIS Enterprise", level: 85 },
      { name: "PHP (Laravel / WordPress)", level: 88 },
      { name: "RESTful & GraphQL APIs", level: 94 },
      { name: "Microservices & Distributed Systems", level: 90 }
    ]
  },
  {
    title: "Frontend & Mobile",
    description: "Building responsive, accessible, high-performance interfaces.",
    skills: [
      { name: "ReactJS & Next.js", level: 92, highlight: true },
      { name: "TypeScript & JavaScript (ES6+)", level: 90 },
      { name: "Tailwind CSS & Modern UI", level: 94 },
      { name: "Flutter (iOS & Android)", level: 82 },
      { name: "State Management & Responsive Design", level: 90 }
    ]
  },
  {
    title: "Infrastructure, AI & Methodologies",
    description: "Deploying secure, automated, and intelligent software environments.",
    skills: [
      { name: "OCR & Document AI", level: 90, highlight: true },
      { name: "ML False Claim Detection", level: 88, highlight: true },
      { name: "Docker & Containerization", level: 88 },
      { name: "Linux & VMware ESXi Administration", level: 92 },
      { name: "AWS Cloud Infrastructure", level: 85 },
      { name: "Agile, Scrum & Technical Leadership", level: 95 }
    ]
  }
];

export const globalFootprint = [
  { country: "Nepal", city: "Kathmandu", role: "Health Insurance Board, SSF, Attorney General, Tinker Tech" },
  { country: "Germany", city: "Berlin", role: "GIZ SAP Data Space Hackathon (OCR & Document AI)" },
  { country: "Kenya", city: "Nairobi", role: "Global Digital Health Forum (Lead Author & Presenter)" },
  { country: "Laos", city: "Vientiane", role: "Ministry of Health Lao PDR & AeHIN (openIMIS Advisory)" },
  { country: "Cameroon", city: "Yaoundé", role: "openIMIS Global Developer Meet" },
  { country: "Singapore", city: "Singapore", role: "Fixtrox Remote Cloud & Web Engineering" },
  { country: "Australia", city: "Sydney", role: "Nepstralia Group Platform Engineering" }
];
