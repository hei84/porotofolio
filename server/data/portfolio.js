const portfolioContent = {
  services: [
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
  ],
  experience: [
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
  ],
  skills: {
    core: [
      'React',
      'Next.js',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'PostgreSQL',
      'GraphQL'
    ],
    tooling: [
      'Docker',
      'AWS',
      'CI/CD',
      'Jest',
      'Cypress',
      'Storybook',
      'Figma',
      'Notion'
    ]
  },
  stats: [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Delivered', value: '28' },
    { label: 'Students Mentored', value: '120+' }
  ],
  availability: {
    status: 'Accepting new freelance engagements',
    nextAvailability: 'Q1 2026',
    location: 'Remote • Addis Ababa'
  }
};

const projects = [
  {
    id: 1,
    title: 'Full-Stack Grade Management System',
    description:
      'A comprehensive grade management system with role-based authentication (Admin, Student, Teacher) and secure grade management features. Includes secure login, dashboard views, and grade tracking.',
    tech: ['React.js', 'Node.js', 'Express', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Personal Portfolio Website',
    description:
      'A modern, mobile-responsive portfolio website showcasing projects, skills, and achievements with clean design and smooth animations. Built with React and Node.js backend.',
    tech: ['React', 'Node.js', 'Express', 'CSS3'],
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Digital Clock House (Python)',
    description:
      'A functional and educational GUI application built with Tkinter featuring custom graphics and real-time clock functionality. Demonstrates Python GUI development skills.',
    tech: ['Python', 'Tkinter'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 4,
    title: 'Secure Login System',
    description:
      'A robust authentication system demonstrating secure coding practices with password hashing, session control, and JWT tokens. Follows OWASP security guidelines.',
    tech: ['Node.js', 'Express', 'MongoDB', 'JWT'],
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800',
    liveUrl: '#',
    githubUrl: '#'
  }
];

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    role: 'Student',
    content:
      'Nigusu is an excellent tutor who made complex programming concepts easy to understand. His patience and teaching style helped me excel in my studies.',
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: 2,
    name: 'Sarah Smith',
    role: 'Colleague',
    content:
      'Working with Nigusu has been a pleasure. His attention to detail and clean code practices make him an outstanding developer.',
    avatar: 'https://i.pravatar.cc/150?img=5'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    role: 'Client',
    content:
      "The website Nigusu built for us exceeded our expectations. It's fast, beautiful, and user-friendly. Highly recommended!",
    avatar: 'https://i.pravatar.cc/150?img=12'
  }
];

module.exports = {
  portfolioContent,
  projects,
  testimonials
};


