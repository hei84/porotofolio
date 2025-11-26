import React, { useEffect, useMemo, useState } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope
} from 'react-icons/fa';
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';
import {
  navLinks,
  heroContent,
  aboutContent,
  services as fallbackServices,
  experience as fallbackExperience,
  contactDetails,
  academicBackground,
  competitiveProgramming,
  webDevelopmentSkills,
  uiuxDesign,
  featureShowcase,
  cybersecurity,
  techCommunities,
  certifications,
  achievements,
  futureGoals
} from './data/content';
import Button from './components/Button';
import useScrollSpy from './hooks/useScrollSpy';
import usePortfolioContent from './hooks/usePortfolioContent';
import {
  fetchProjects,
  fetchTestimonials,
  submitContactForm
} from './services/api';

const socialLinks = [
  { href: 'https://github.com/nigusuwario', icon: FaGithub, label: 'GitHub' },
  {
    href: 'https://linkedin.com/in/nigusuwario',
    icon: FaLinkedin,
    label: 'LinkedIn'
  },
  { href: 'https://twitter.com/nigusuwario', icon: FaTwitter, label: 'Twitter' }
];

const SectionHeader = ({ eyebrow, title, description }) => (
  <div className="section-heading">
    {eyebrow ? <p className="section-eyebrow">{eyebrow}</p> : null}
    <div>
      <h2>{title}</h2>
      {description ? <p className="section-description">{description}</p> : null}
    </div>
  </div>
);

const App = () => {
  const sectionIds = navLinks.map(link => link.id);
  const activeId = useScrollSpy(sectionIds);
  const { content, loading: contentLoading, error: contentError } =
    usePortfolioContent();

  const services = content.services?.length
    ? content.services
    : fallbackServices;
  const experience = content.experience?.length
    ? content.experience
    : fallbackExperience;
  const heroStats = useMemo(
    () => (content.stats?.length ? content.stats : heroContent.heroStats),
    [content.stats]
  );

  const availability = content.availability;

  const [projects, setProjects] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [remoteStatus, setRemoteStatus] = useState({
    projects: { loading: true, error: null },
    testimonials: { loading: true, error: null }
  });
  const [theme, setTheme] = useState('dark');
  useEffect(() => {
    const storedTheme = localStorage.getItem('portfolio-theme');
    if (storedTheme && storedTheme !== theme) {
      setTheme(storedTheme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const handleThemeSelection = nextTheme => {
    setTheme(nextTheme);
  };

  useEffect(() => {
    const loadRemoteCollections = async () => {
      try {
        const [projectsResponse, testimonialsResponse] = await Promise.all([
          fetchProjects(),
          fetchTestimonials()
        ]);
        setProjects(projectsResponse);
        setTestimonials(testimonialsResponse);
        setRemoteStatus({
          projects: { loading: false, error: null },
          testimonials: { loading: false, error: null }
        });
      } catch (error) {
        console.error('Failed to fetch remote collections', error);
        setRemoteStatus({
          projects: {
            loading: false,
            error: 'Unable to load latest projects.'
          },
          testimonials: {
            loading: false,
            error: 'Unable to load testimonials right now.'
          }
        });
      }
    };

    loadRemoteCollections();
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formState, setFormState] = useState({
    submitting: false,
    feedback: null,
    error: null
  });

  const handleNavClick = id => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleContactSubmit = async event => {
    event.preventDefault();
    setFormState({ submitting: true, feedback: null, error: null });

    try {
      await submitContactForm(formData);
      setFormState({
        submitting: false,
        feedback: 'Thanks for reaching out — I will reply shortly.',
        error: null
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Failed to submit contact form', error);
      setFormState({
        submitting: false,
        feedback: null,
        error:
          error.response?.data?.error ||
          'Unable to send message. Please email me directly.'
      });
    }
  };

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="container nav-wrapper">
          <a href="#home" className="brand">
            <span className="brand-kicker">Portfolio</span>
            <strong>Nigusu Wario</strong>
          </a>
          <nav>
            {navLinks.map(link => (
              <button
                key={link.id}
                type="button"
                onClick={() => handleNavClick(link.id)}
                className={activeId === link.id ? 'active' : undefined}
              >
                {link.label}
              </button>
            ))}
          </nav>
          <div className="nav-actions">
            <div className="theme-toggle" role="group" aria-label="Color theme">
              <button
                type="button"
                onClick={() => handleThemeSelection('dark')}
                className={theme === 'dark' ? 'active' : undefined}
                aria-pressed={theme === 'dark'}
              >
                Dark
              </button>
              <button
                type="button"
                onClick={() => handleThemeSelection('light')}
                className={theme === 'light' ? 'active' : undefined}
                aria-pressed={theme === 'light'}
              >
                Light
              </button>
            </div>
            <Button href={heroContent.secondaryCta.href} target="_blank">
              {heroContent.secondaryCta.label}
            </Button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="container hero-grid">
            <div className="hero-visual">
              {heroContent.photo?.src ? (
                <div className="hero-photo-card">
                  <img
                    src={heroContent.photo.src}
                    alt={heroContent.photo.alt || heroContent.name}
                    loading="eager"
                  />
                </div>
              ) : null}
              <div className="hero-stats">
                {heroStats.map(stat => (
                  <div key={stat.label}>
                    <p className="stat-value">{stat.value}</p>
                    <p className="stat-label">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <p className="hero-greeting">{heroContent.greeting}</p>
              <h1>
                {heroContent.name}
                <span className="hero-gradient">
                  {heroContent.roles.join(' • ')}
                </span>
              </h1>
              <p className="hero-summary">{heroContent.summary}</p>
              <div className="hero-cta">
                <Button href={heroContent.primaryCta.href} variant="primary">
                  {heroContent.primaryCta.label}
                </Button>
                <Button
                  href={heroContent.secondaryCta.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                  icon={FaArrowUpRightFromSquare}
                >
                  {heroContent.secondaryCta.label}
                </Button>
              </div>
              <div className="hero-socials">
                {socialLinks.map(link => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    <link.icon />
                  </a>
                ))}
              </div>
              <p className="hero-loop" aria-live="polite">
                <span>UI/UX Designer</span>
                <span>Frontend Engineer</span>
                <span>Mentor</span>
              </p>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <SectionHeader
              eyebrow="About"
              title={aboutContent.title}
              description={aboutContent.paragraphs[0]}
            />
            <div className="about-grid">
              <div>
                {aboutContent.paragraphs.slice(1).map(paragraph => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="about-card">
                <p>Highlights</p>
                <ul>
                  {aboutContent.highlights.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                {availability ? (
                  <div className="availability">
                    <p>{availability.status}</p>
                    {availability.nextAvailability ? (
                      <small>{availability.nextAvailability}</small>
                    ) : null}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        <section id="academic" className="section tinted">
          <div className="container">
            <SectionHeader
              eyebrow="Academic Background"
              title={academicBackground.degree}
              description={academicBackground.description}
            />
            <div className="academic-grid">
              <div className="card">
                <h3>{academicBackground.university}</h3>
                <p className="muted">Current Institution</p>
              </div>
              <div className="card">
                <h4>Key Coursework</h4>
                <div className="chips">
                  {academicBackground.coursework.map(course => (
                    <span key={course}>{course}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="competitive" className="section">
          <div className="container">
            <SectionHeader
              eyebrow="Competitive Programming"
              title={competitiveProgramming.title}
              description={competitiveProgramming.description}
            />
            <div className="competitive-grid">
              <div className="card">
                <h3>Primary Language</h3>
                <p className="language-badge">{competitiveProgramming.language}</p>
                <p className="muted">Preferred for speed and efficiency</p>
              </div>
              <div className="card">
                <h4>Topics I Master</h4>
                <div className="chips">
                  {competitiveProgramming.topics.map(topic => (
                    <span key={topic}>{topic}</span>
                  ))}
                </div>
              </div>
              <div className="card">
                <h4>Platforms</h4>
                {competitiveProgramming.platforms.map(platform => (
                  <div key={platform.name} className="platform-item">
                    <strong>{platform.name}</strong>
                    <p className="muted">{platform.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section tinted">
          <div className="container">
            <SectionHeader
              eyebrow="Technical Skills"
              title="Web Development Expertise"
              description="Full-stack development with modern technologies and best practices."
            />
            <div className="skills-grid">
              <div className="card">
                <h3>{webDevelopmentSkills.frontend.title}</h3>
                <div className="chips">
                  {webDevelopmentSkills.frontend.technologies.map(tech => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <p className="muted">{webDevelopmentSkills.frontend.description}</p>
              </div>
              <div className="card">
                <h3>{webDevelopmentSkills.backend.title}</h3>
                <div className="chips">
                  {webDevelopmentSkills.backend.technologies.map(tech => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <p className="muted">{webDevelopmentSkills.backend.description}</p>
              </div>
              <div className="card">
                <h3>{webDevelopmentSkills.databases.title}</h3>
                <div className="chips">
                  {webDevelopmentSkills.databases.technologies.map(tech => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
              </div>
              <div className="card">
                <h3>Best Practices</h3>
                <div className="chips">
                  {webDevelopmentSkills.practices.map(practice => (
                    <span key={practice}>{practice}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="uiux" className="section">
          <div className="container">
            <SectionHeader
              eyebrow="UI/UX Design"
              title={uiuxDesign.title}
              description={uiuxDesign.description}
            />
            <div className="uiux-grid">
              <div className="card uiux-pillars-card">
                <h4>Experience Pillars</h4>
                <div className="uiux-pillars">
                  {uiuxDesign.pillars.map(pillar => (
                    <article key={pillar.label}>
                      <div className="pillar-icon" aria-hidden="true">
                        {pillar.icon}
                      </div>
                      <div>
                        <h5>{pillar.label}</h5>
                        <p className="muted">{pillar.detail}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
              <div className="card uiux-features-card">
                <h4>Feature Highlights</h4>
                <ul className="uiux-features">
                  <li>Component libraries that mirror production-ready React code.</li>
                  <li>Lottie micro-interactions for onboarding and confirmation states.</li>
                  <li>Color systems validated for AAA contrast and dark-mode parity.</li>
                </ul>
                <div className="chip-row">
                  {uiuxDesign.tooling.map(tool => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="feature-lab" className="section tinted">
          <div className="container">
            <SectionHeader
              eyebrow="Feature Lab"
              title="Shipped Experiments & Product Drops"
              description="A quick look at the prototypes and tools I iterate on to unblock students, teams, and clients."
            />
            <div className="feature-grid">
              {featureShowcase.map(feature => (
                <article key={feature.title} className="card feature-card">
                  <div className="feature-icon" aria-hidden="true">
                    {feature.icon}
                  </div>
                  <div>
                    <h4>{feature.title}</h4>
                    <p className="muted">{feature.description}</p>
                    <span className="feature-pill">{feature.tag}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cybersecurity" className="section tinted">
          <div className="container">
            <SectionHeader
              eyebrow="Cybersecurity"
              title="Security Training & Expertise"
              description={cybersecurity.goal}
            />
            <div className="cybersecurity-grid">
              <div className="card">
                <h3>{cybersecurity.training}</h3>
                <p className="muted">Professional Training Program</p>
              </div>
              <div className="card">
                <h4>Focus Areas</h4>
                <div className="chips">
                  {cybersecurity.focus.map(area => (
                    <span key={area}>{area}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="communities" className="section">
          <div className="container">
            <SectionHeader
              eyebrow="Tech Communities"
              title="Leadership & Mentorship"
              description="Active participation in tech communities and peer mentorship programs."
            />
            <div className="communities-grid">
              {techCommunities.map((community, idx) => (
                <div className="card" key={community.name + idx}>
                  <h3>{community.name}</h3>
                  <ul>
                    {community.activities.map((activity, activityIdx) => (
                      <li key={`${community.name}-${activityIdx}`}>{activity}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="section tinted">
          <div className="container">
            <SectionHeader
              eyebrow="Services"
              title="Partner with someone who ships."
              description="I help companies move faster with pragmatic engineering leadership, clear communication, and durable delivery."
            />
            <div className="grid three">
              {services.map(service => (
                <article key={service.title} className="card">
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <div className="chips">
                    {service.stack.map(item => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" className="section">
          <div className="container">
            <SectionHeader
              eyebrow="Experience"
              title="Leadership and hands-on execution."
              description="A snapshot of the roles where I led engineering initiatives, coached teams, and delivered production systems."
            />
            <div className="timeline">
              {experience.map(role => (
                <article key={role.company + role.period}>
                  <header>
                    <div>
                      <p className="role">{role.role}</p>
                      <p className="company">{role.company}</p>
                    </div>
                    <span className="period">{role.period}</span>
                  </header>
                  <ul>
                    {role.contributions.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="chips">
                    {role.tech.map(item => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section tinted">
          <div className="container">
            <SectionHeader
              eyebrow="Projects"
              title="Case studies & playgrounds."
              description="Select work highlighting product sense, systems design, and teaching."
            />
            {remoteStatus.projects.loading ? (
              <p className="muted">Loading projects...</p>
            ) : remoteStatus.projects.error ? (
              <p className="error-text">{remoteStatus.projects.error}</p>
            ) : (
              <div className="grid two">
                {projects.map(project => (
                  <article key={project.id} className="card project-card">
                    <img src={project.image} alt={project.title} />
                    <div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>
                      <div className="chips">
                        {project.tech.map(item => (
                          <span key={item}>{item}</span>
                        ))}
                      </div>
                      <div className="project-links">
                        {project.liveUrl ? (
                          <Button
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="secondary"
                          >
                            Live site
                          </Button>
                        ) : null}
                        {project.githubUrl ? (
                          <Button
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="ghost"
                          >
                            Code
                          </Button>
                        ) : null}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        <section id="certifications" className="section tinted">
          <div className="container">
            <SectionHeader
              eyebrow="Certifications"
              title="Continuous Learning"
              description="Professional certifications and training programs."
            />
            <div className="grid two">
              {certifications.map((cert, idx) => (
                <article key={idx} className="card certification-card">
                  <div className="cert-header">
                    <h3>{cert.name}</h3>
                    <span className={`status-badge ${cert.status.toLowerCase()}`}>
                      {cert.status}
                    </span>
                  </div>
                  <p>{cert.course}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="achievements" className="section">
          <div className="container">
            <SectionHeader
              eyebrow="Achievements"
              title="Recognition & Milestones"
              description="Key achievements and recognitions throughout my journey."
            />
            <div className="grid three">
              {achievements.map((achievement, idx) => (
                <article key={idx} className="card achievement-item">
                  <div className="achievement-icon">{achievement.icon}</div>
                  <h3>{achievement.title}</h3>
                  <p className="muted">{achievement.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="goals" className="section tinted">
          <div className="container">
            <SectionHeader
              eyebrow="Future Goals"
              title="Vision & Aspirations"
              description="Where I'm heading and what I aim to achieve."
            />
            <div className="goals-grid">
              {futureGoals.map((goal, idx) => (
                <div key={idx} className="card goal-item">
                  <div className="goal-number">{idx + 1}</div>
                  <p>{goal}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="section">
          <div className="container">
            <SectionHeader
              eyebrow="Testimonials"
              title="Trust earns repeat work."
              description="Feedback from collaborators, clients, and students."
            />
            {remoteStatus.testimonials.loading ? (
              <p className="muted">Loading testimonials...</p>
            ) : remoteStatus.testimonials.error ? (
              <p className="error-text">{remoteStatus.testimonials.error}</p>
            ) : (
              <div className="grid three">
                {testimonials.map(testimonial => (
                  <article key={testimonial.id} className="card testimonial">
                    <div className="testimonial-header">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        loading="lazy"
                      />
                      <div>
                        <p className="name">{testimonial.name}</p>
                        <p className="role">{testimonial.role}</p>
                      </div>
                    </div>
                    <p className="quote">"{testimonial.content}"</p>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        <section id="contact" className="section tinted">
          <div className="container contact-grid">
            <div>
              <SectionHeader
                eyebrow="Contact"
                title="Let’s build or teach together."
                description="Tell me about the problem, audience, and timelines. I reply within 48 hours."
              />
              <ul className="contact-details">
                {contactDetails.map(detail => (
                  <li key={detail.label}>
                    <span>{detail.label}</span>
                    {detail.href ? (
                      <a href={detail.href}>{detail.value}</a>
                    ) : (
                      <p>{detail.value}</p>
                    )}
                  </li>
                ))}
              </ul>
              <div className="contact-cta">
                <Button
                  href="mailto:nigusuwario5@gmail.com"
                  icon={FaEnvelope}
                  variant="secondary"
                >
                  Email me directly
                </Button>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleContactSubmit}>
              <label>
                Name
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </label>
              <label>
                Subject
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project, mentorship, workshop..."
                />
              </label>
              <label>
                Message
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  required
                />
              </label>
              <Button as="button" type="submit" variant="primary" className="submit-btn">
                {formState.submitting ? 'Sending…' : 'Send message'}
              </Button>
              {formState.feedback ? (
                <p className="success-text">{formState.feedback}</p>
              ) : null}
              {formState.error ? (
                <p className="error-text">{formState.error}</p>
              ) : null}
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <p className="brand">Nigusu Wario</p>
            <p>Engineer • Educator • Partner</p>
          </div>
          <div className="footer-links">
            {socialLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="muted">
            © {new Date().getFullYear()} Built with React & Node.js
          </p>
        </div>
      </footer>

      {contentError ? (
        <div className="banner warning">
          <p>{contentError}</p>
        </div>
      ) : contentLoading ? (
        <div className="banner info">
          <p>Refreshing latest content…</p>
        </div>
      ) : null}
    </div>
  );
};

export default App;


