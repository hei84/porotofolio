export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' }
];

export const heroContent = {
  greeting: "Hello, I'm",
  name: 'Nigusu Wario Hei',
  roles: ['Computer Science Student', 'Full-Stack Developer', 'UI/UX Designer', 'Competitive Programmer'],
  summary:
    'A dedicated and forward-thinking Computer Science and Engineering student at ASTU. My passion spans web development, competitive programming, design systems, and cybersecurity. Every line of code is an opportunity to solve real-world problems.',
  primaryCta: { label: 'Get In Touch', href: '#contact' },
  secondaryCta: {
    label: 'Download CV',
    href: 'https://drive.google.com/file/d/18z1oLwCVDemoCV/view?usp=sharing'
  },
  photo: {
    src: '/photo_2025-11-25_23-10-57.jpg',
    alt: 'Nigusu Wario Hei portrait'
  },
  heroStats: [
    { label: 'Design Systems Shipped', value: '5' },
    { label: 'Projects Built', value: '10+' },
    { label: 'Students Mentored', value: '50+' }
  ]
};

export const aboutContent = {
  title: 'Passionate about technology, dedicated to solving real-world problems.',
  paragraphs: [
    "I'm Nigusu Wario Hei, a dedicated Computer Science and Engineering student at Adama Science and Technology University (ASTU). My passion for technology spans web development, competitive programming, UI/UX design, and cybersecurity.",
    'I believe every line of code is an opportunity to solve real-world problems, improve digital experiences, and grow into a responsible tech leader. This portfolio reflects my journey—my skills, achievements, and aspirations.'
  ],
  highlights: [
    'Full-Stack Development: React, Node.js, Express, MongoDB',
    'Competitive Programming: Python, Data Structures & Algorithms',
    'Design Systems: Interaction prototypes, motion guidelines, and accessibility-first reviews',
    'Cybersecurity: Cisco Networking Academy training'
  ]
};

export const services = [
  {
    title: 'Custom Web Apps',
    description:
      'Design and build responsive, component-driven applications with clean architecture and measurable business impact.',
    stack: ['React', 'Next.js', 'Node', 'REST']
  },
  {
    title: 'API & Backend Systems',
    description:
      'Secure, observable Node.js services powered by data modeling, caching, and integration with payment, auth, or messaging providers.',
    stack: ['Express', 'Nest', 'MongoDB', 'Postgres']
  },
  {
    title: 'Technical Mentorship',
    description:
      'Personalized coaching, curriculum design, and code reviews for junior teams or bootcamp cohorts that need hands-on leadership.',
    stack: ['Career guidance', 'Workshop facilitation']
  }
];

export const experience = [
  {
    role: 'Senior Full-Stack Engineer',
    company: 'BlueOrbit Labs',
    period: '2022 — Present',
    contributions: [
      'Led the rebuild of a B2B analytics suite, cutting load times by 48%.',
      'Established a design system plus component library consumed by 3 product pods.',
      'Introduced automated testing strategy (Cypress + Playwright) raising coverage to 82%.'
    ],
    tech: ['React', 'TypeScript', 'Node.js', 'Azure']
  },
  {
    role: 'Instructor & Mentor',
    company: 'OpenCode Academy',
    period: '2020 — 2022',
    contributions: [
      'Shipped project-based curriculum for 150+ learners across 5 cohorts.',
      'Facilitated weekly architecture reviews and pair-programming clinics.',
      'Graduates achieved 86% placement in junior engineering roles.'
    ],
    tech: ['React', 'Express', 'MongoDB', 'Git workflows']
  },
  {
    role: 'Software Engineer',
    company: 'Freelance & Agencies',
    period: '2018 — 2020',
    contributions: [
      'Delivered responsive marketing sites, e-commerce stores, and dashboards.',
      'Owned stakeholder communication, project timelines, and hosting.',
      'Integrated payment, CRM, and analytics platforms for SMB clients.'
    ],
    tech: ['Next.js', 'Shopify', 'Node.js', 'Firebase']
  }
];

export const academicBackground = {
  degree: 'Bachelor of Science in Computer Science and Engineering',
  university: 'Adama Science and Technology University (ASTU)',
  coursework: [
    'Data Structures & Algorithms',
    'Database Systems',
    'Computer Networks',
    'Operating Systems',
    'Software Engineering',
    'Web Technologies'
  ],
  description: 'Strong academic performance with continuous expansion of knowledge through online platforms and real-world projects.'
};

export const competitiveProgramming = {
  title: 'Competitive Programming',
  description: 'One of my strongest areas. I actively participate in contests on Codeforces and LeetCode, solving challenges involving advanced algorithms and data structures.',
  language: 'Python',
  topics: [
    'Dynamic Programming',
    'Graph Algorithms',
    'Greedy Techniques',
    'Number Theory',
    'Data Structures'
  ],
  platforms: [
    { name: 'Codeforces', description: 'Regular contestant' },
    { name: 'LeetCode', description: 'Solving advanced interview-level problems' }
  ]
};

export const webDevelopmentSkills = {
  frontend: {
    title: 'Frontend',
    technologies: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js'],
    description: 'Responsive design & UI/UX principles'
  },
  backend: {
    title: 'Backend',
    technologies: ['Node.js', 'Express.js', 'Java (Spring Boot basics)'],
    description: 'RESTful APIs'
  },
  databases: {
    title: 'Databases',
    technologies: ['MongoDB', 'MySQL', 'SQLite']
  },
  practices: ['Authentication', 'Dashboards', 'CRUD Systems', 'API Integrations', 'Clean Code', 'Testing', 'Git Version Control']
};

export const uiuxDesign = {
  title: 'UI/UX Systems Thinking',
  description:
    'Designing delightful experiences that stay consistent from the very first wireframe to the shipped product.',
  pillars: [
    {
      icon: '🎨',
      label: 'Visual Language',
      detail: 'Design tokens, color systems, and typography authorities for responsive canvases.'
    },
    {
      icon: '🧭',
      label: 'User Journeys',
      detail: 'Storyboards and flow maps that expose gaps before writing a single line of code.'
    },
    {
      icon: '🧪',
      label: 'Prototype & Validate',
      detail: 'Interactive Figma prototypes, usability tests, and iteration playbooks.'
    }
  ],
  tooling: ['Figma', 'Framer', 'Adobe XD', 'Lottie', 'FigJam']
};

export const featureShowcase = [
  {
    icon: '⚡',
    title: 'Instant Resume Builder',
    description: 'Single-click PDF resume generation powered by React Server Components and dynamic theming.',
    tag: 'Automation'
  },
  {
    icon: '🧱',
    title: 'Design Token Pipeline',
    description: 'CLI that syncs Figma variables to CSS custom properties and JSON for mobile apps.',
    tag: 'Design Ops'
  },
  {
    icon: '📊',
    title: 'Insight Dashboard',
    description: 'Composable analytics widgets with drag-to-reorder layouts and persisted user settings.',
    tag: 'Product'
  },
  {
    icon: '💬',
    title: 'Mentor Chat Studio',
    description: 'LLM-assisted study buddy that suggests practice plans and tracks learner progress.',
    tag: 'AI'
  }
];

export const cybersecurity = {
  training: 'Cisco Networking Academy',
  focus: [
    'Ethical Hacking',
    'Network Security',
    'Cyber Defense',
    'Security Best Practices'
  ],
  goal: 'Specialize in secure software development and ethical hacking, ensuring systems are safe and resistant to attacks.'
};

export const techCommunities = [
  {
    name: 'ASTU Cybersecurity Guild',
    activities: [
      'Ethical hacking workshops',
      'CTF (Capture the Flag) practices',
      'Digital safety awareness initiatives'
    ]
  },
  {
    name: 'Peer Mentorship Circle',
    activities: [
      'Teaching juniors Python and DSA',
      'Hosting problem-solving sessions',
      'Sharing learning resources and tools'
    ]
  },
  {
    name: 'Product Design Collective',
    activities: [
      'Running weekly design critiques and pattern library reviews',
      'Pairing designers and engineers for accessibility fixes',
      'Documenting lessons learned for future cohorts'
    ]
  }
];

export const certifications = [
  {
    name: 'Cisco Networking Academy',
    course: 'Introduction to Cybersecurity',
    status: 'Ongoing'
  },
  {
    name: 'Coursera',
    course: 'Full-Stack Web Development (React, Node.js, MongoDB)',
    status: 'Completed'
  },
  {
    name: 'FreeCodeCamp',
    course: 'JavaScript Algorithms & Data Structures',
    status: 'Completed'
  },
  {
    name: 'LinkedIn Learning',
    course: 'OWASP & Secure Coding',
    status: 'Planned'
  }
];

export const achievements = [
  { icon: '🎨', title: 'Design Systems', description: 'Launched 5 multi-brand component libraries' },
  { icon: '💡', title: 'Full-Stack Applications', description: 'Built multiple full-stack applications' },
  { icon: '👨‍🏫', title: 'Mentorship', description: 'Mentored juniors in Python and algorithms' },
  { icon: '🎯', title: 'Coding Contests', description: 'Active participant in coding contests' },
  { icon: '📚', title: 'Top Peer-Mentor', description: 'Recognized as top peer-mentor within the ASTU tech community' }
];

export const futureGoals = [
  'Advance in cybersecurity and ethical hacking',
  'Contribute to open-source security tools',
  'Work in a development + security hybrid role',
  'Build impactful tools for communities',
  'Lead workshops and share knowledge'
];

export const skills = {
  core: [
    'React',
    'Node.js',
    'Express',
    'JavaScript',
    'Python',
    'Java',
    'MongoDB',
    'MySQL'
  ],
  tooling: ['Git', 'REST APIs', 'Design Systems', 'Data Structures', 'Algorithms', 'Cybersecurity']
};

export const contactDetails = [
  {
    label: 'Email',
    value: 'nigusuwario5@gmail.com',
    href: 'mailto:nigusuwario5@gmail.com'
  },
  {
    label: 'Phone',
    value: '0942735689',
    href: 'tel:0942735689'
  },
  {
    label: 'Location',
    value: 'Adama, Ethiopia'
  }
];

