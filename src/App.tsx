import { FormEvent, useEffect, useState } from "react";
import examPrepImage from "./assets/projects/examprep-ng.webp";
import superMImage from "./assets/projects/superm.webp";

type IconName =
  | "arrow"
  | "code"
  | "server"
  | "layers"
  | "briefcase"
  | "globe"
  | "compass"
  | "mail"
  | "github"
  | "linkedin"
  | "whatsapp"
  | "sun"
  | "moon"
  | "menu"
  | "close"
  | "check";

const iconPaths: Record<IconName, React.ReactNode> = {
  arrow: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
  code: (
    <>
      <path d="m8 9-4 3 4 3M16 9l4 3-4 3M14 5l-4 14" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="6" rx="2" />
      <rect x="3" y="14" width="18" height="6" rx="2" />
      <path d="M7 7h.01M7 17h.01" />
    </>
  ),
  layers: (
    <>
      <path d="m12 2 9 5-9 5-9-5 9-5Z" />
      <path d="m3 12 9 5 9-5M3 17l9 5 9-5" />
    </>
  ),
  briefcase: (
    <>
      <rect x="3" y="7" width="18" height="13" rx="2" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15 9-2 4-4 2 2-4 4-2Z" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  github: (
    <>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.4 5.4 0 0 0 19.3 4 5 5 0 0 0 19.1.5S18 0 15 2a13.4 13.4 0 0 0-7 0C5 0 3.9.5 3.9.5A5 5 0 0 0 3.7 4a5.4 5.4 0 0 0-1.5 3.7c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4" />
      <path d="M8 19c-3 .9-3-1.5-4-2" />
    </>
  ),
  linkedin: (
    <>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M21 11.5a8.4 8.4 0 0 1-9 8.5 9.4 9.4 0 0 1-3.8-.9L3 21l1.8-5A8.5 8.5 0 1 1 21 11.5Z" />
      <path d="M8.5 8.5c.5 3 2 4.5 5 5" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  moon: <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />,
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  close: (
    <>
      <path d="m6 6 12 12M18 6 6 18" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
};

function Icon({ name, size = 20 }: { name: IconName; size?: number }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {iconPaths[name]}
    </svg>
  );
}

const navItems = ["Home", "About", "Skills", "Projects", "Experience", "Services", "Contact"];

const whatsappNumber =
  import.meta.env.VITE_WHATSAPP_NUMBER?.replace(/\D/g, "") || "2347059831230";
const whatsappMessage =
  import.meta.env.VITE_WHATSAPP_MESSAGE ||
  "Hello Richness, I found your portfolio and would like to discuss a project.";

const skills = [
  {
    label: "Frontend development",
    value: ["JavaScript", "React", "HTML5", "CSS3", "Tailwind CSS"],
  },
  { label: "Backend development", value: ["Node.js", "Express.js", "PHP", "Python", "REST APIs"] },
  {
    label: "Database & infrastructure",
    value: [
      "MongoDB",
      "Supabase",
      "Firebase",
      "Git & GitHub",
      "Docker",
      "Netlify",
      "Vercel",
      "Render",
    ],
  },
  {
    label: "Development & security",
    value: ["Bash", "Linux fundamentals", "CodeQL", "API security fundamentals"],
  },
];

const projects = [
  {
    number: "01",
    name: "SuperM",
    type: "Supermarket Management SaaS",
    description:
      "A focused business operations platform that brings products, inventory, customers, expenses, sales and profit tracking into one coherent system.",
    stack: ["React", "Node.js", "Database", "REST API"],
    features: ["Inventory control", "Sales & expense tracking", "Business insights"],
    tone: "lime",
    image: superMImage,
    imageAlt: "SuperM supermarket management dashboard displayed on a desktop computer",
    liveUrl: "https://super-m-ub42.vercel.app/",
  },
  {
    number: "02",
    name: "Estate Flow",
    type: "Estate Management Platform",
    description:
      "A central operating system for estate activities—designed to make communication, records and property operations easier to manage.",
    stack: ["JavaScript", "Express.js", "MongoDB", "REST API"],
    features: ["Property operations", "Landlord & tenant records", "Activity management"],
    tone: "violet",
    image: "",
    imageAlt: "",
    liveUrl: null,
  },
  {
    number: "03",
    name: "ExamPrep NG",
    type: "Educational Technology Platform",
    description:
      "A digital learning environment that helps students practise with purpose through examination questions, CBT flows and useful study tools.",
    stack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    features: ["CBT functionality", "Practice questions", "Learning progress tools"],
    tone: "orange",
    image: examPrepImage,
    imageAlt: "ExamPrep NG student dashboard displayed across laptop and mobile devices",
    liveUrl: "https://examprepp-tau.vercel.app/",
  },
];

const services: { icon: IconName; title: string; text: string }[] = [
  {
    icon: "layers",
    title: "Full-Stack Web Development",
    text: "End-to-end web products built around sound architecture and clear user needs.",
  },
  {
    icon: "code",
    title: "Frontend Development",
    text: "Responsive, accessible interfaces that feel precise and perform reliably.",
  },
  {
    icon: "server",
    title: "Backend & API Development",
    text: "Practical APIs and server-side systems designed for maintainability.",
  },
  {
    icon: "compass",
    title: "SaaS Product Development",
    text: "From early product thinking to scalable, usable software.",
  },
  {
    icon: "briefcase",
    title: "Business Management Systems",
    text: "Purpose-built tools that simplify operations and improve visibility.",
  },
  {
    icon: "globe",
    title: "Website Design & Development",
    text: "Professional web experiences that communicate clearly and convert.",
  },
  {
    icon: "arrow",
    title: "Technical Consulting",
    text: "Clear technical direction for product, architecture and delivery decisions.",
  },
];

function Header({ dark, setDark }: { dark: boolean; setDark: (value: boolean) => void }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Richness Olarinoye, home">
        <img className="brand-mark" src="/brand-mark.svg" alt="" />
        <b>Richness Olarinoye</b>
      </a>
      <nav className={open ? "nav open" : "nav"} aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setOpen(false)}>
            {item}
          </a>
        ))}
      </nav>
      <div className="header-actions">
        <button
          className="icon-button"
          onClick={() => setDark(!dark)}
          aria-label={`Switch to ${dark ? "light" : "dark"} theme`}
        >
          <Icon name={dark ? "sun" : "moon"} />
        </button>
        <a href="#contact" className="button button-small">
          Let's talk <Icon name="arrow" size={16} />
        </a>
        <button
          className="icon-button menu-button"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle navigation"
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>
    </header>
  );
}

function SectionHead({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="section-head reveal">
      <div className="eyebrow">
        <span />
        {eyebrow}
      </div>
      <div>
        <h2>{title}</h2>
        {intro && <p>{intro}</p>}
      </div>
    </div>
  );
}

function ProjectVisual({ project }: { project: (typeof projects)[number] }) {
  if (project.image) {
    return (
      <div className="project-visual project-photo">
        <img src={project.image} alt={project.imageAlt} loading="lazy" decoding="async" />
      </div>
    );
  }

  return (
    <div
      className={`project-visual ${project.tone}`}
      aria-label={`${project.name} product interface illustration`}
    >
      <div className="mock-top">
        <span />
        <span />
        <span />
        <b>{project.name}</b>
      </div>
      <div className="mock-layout">
        <div className="mock-sidebar">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="mock-main">
          <div className="mock-heading">
            <div>
              <small>OVERVIEW</small>
              <strong>Good morning.</strong>
            </div>
            <em>+ New</em>
          </div>
          <div className="metric-grid">
            <div>
              <small>ACTIVITY</small>
              <strong>24,680</strong>
              <span />
            </div>
            <div>
              <small>GROWTH</small>
              <strong>+18.4%</strong>
              <span />
            </div>
            <div>
              <small>STATUS</small>
              <strong>Active</strong>
              <span />
            </div>
          </div>
          <div className="chart">
            <small>PERFORMANCE</small>
            <svg viewBox="0 0 500 120" preserveAspectRatio="none">
              <path d="M0 100 C70 90,90 55,150 69 S250 92,300 48 S410 68,500 18" />
              <path
                className="fade"
                d="M0 100 C70 90,90 55,150 69 S250 92,300 48 S410 68,500 18 V120 H0Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <span className="preview-label">Product interface preview</span>
    </div>
  );
}

function ContactForm() {
  const [status, setStatus] = useState("");
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) return form.reportValidity();
    const fields = new FormData(form);
    const subject = `Project enquiry: ${fields.get("project")}`;
    const body = [
      `Name: ${fields.get("name")}`,
      `Email: ${fields.get("email")}`,
      `Project type: ${fields.get("project")}`,
      "",
      String(fields.get("message")),
    ].join("\n");
    window.location.href = `mailto:devrichy01@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus("Your email app is opening with the enquiry addressed to devrichy01@gmail.com.");
    form.reset();
  }
  return (
    <form onSubmit={submit} className="contact-form">
      <div className="field-row">
        <label>
          <span>Name</span>
          <input name="name" autoComplete="name" placeholder="Your name" required />
        </label>
        <label>
          <span>Email</span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
          />
        </label>
      </div>
      <label>
        <span>What would you like to build?</span>
        <select name="project" defaultValue="" required>
          <option value="" disabled>
            Select a project type
          </option>
          <option>Web application</option>
          <option>SaaS product</option>
          <option>Business system</option>
          <option>Website</option>
          <option>Technical consultation</option>
        </select>
      </label>
      <label>
        <span>Tell me a little about it</span>
        <textarea
          name="message"
          placeholder="Your goals, timeline, and what success looks like..."
          rows={5}
          minLength={20}
          required
        />
      </label>
      <button className="button" type="submit">
        Send enquiry <Icon name="arrow" size={18} />
      </button>
      {status && (
        <p className="form-status" role="status">
          <Icon name="check" size={18} />
          {status}
        </p>
      )}
    </form>
  );
}

function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Richness Olarinoye on WhatsApp"
    >
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20.5 11.5a8.5 8.5 0 0 1-12.6 7.42L3.2 20.1l1.17-4.55A8.5 8.5 0 1 1 20.5 11.5Z"
          fill="currentColor"
        />
        <path
          d="M8.25 7.5c.25-.55.5-.56.75-.57h.55c.18 0 .43-.02.65.5.23.55.78 1.9.85 2.04.07.14.12.31.02.5-.1.18-.15.29-.3.45-.15.15-.31.34-.44.46-.15.13-.3.27-.13.54.17.27.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.35 1.46.29.15.46.13.63-.08.17-.21.73-.85.92-1.14.19-.29.38-.24.64-.15.25.1 1.61.76 1.89.9.28.14.46.21.53.33.07.12.07.69-.16 1.36-.23.67-1.34 1.28-1.85 1.36-.48.08-1.1.11-1.78-.11-.41-.13-.94-.31-1.61-.61-2.83-1.22-4.68-4.07-4.82-4.26-.14-.19-1.15-1.53-1.15-2.92 0-1.39.73-2.07.99-2.35.26-.28.57-.31.76-.31Z"
          fill="#25D366"
        />
      </svg>
      <span className="whatsapp-tooltip" role="tooltip">
        Chat with me
      </span>
    </a>
  );
}

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem("theme") !== "light");
  useEffect(() => {
    document.documentElement.dataset.theme = dark ? "dark" : "light";
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("visible")),
      { threshold: 0.08 },
    );
    document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="app">
      <WhatsAppButton />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header dark={dark} setDark={setDark} />
      <main id="main">
        <section id="home" className="hero section">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-copy reveal">
            <div className="availability">
              <i /> Available for select projects <span>2025</span>
            </div>
            <p className="kicker">Software Engineer · Full-Stack Developer · Founder</p>
            <h1>
              Building digital products that <em>solve real problems.</em>
            </h1>
            <p className="hero-intro">
              I’m Richness Olarinoye, a software engineer and product builder creating scalable web
              applications, SaaS platforms and business systems that turn complex ideas into clear,
              useful technology.
            </p>
            <div className="hero-actions">
              <a className="button" href="#projects">
                Explore my work <Icon name="arrow" size={18} />
              </a>
              <a className="text-link" href="#contact">
                Let’s work together <Icon name="arrow" size={18} />
              </a>
            </div>
            <div className="proof">
              <div>
                <strong>5</strong>
                <span>
                  Years building
                  <br />
                  digital products
                </span>
              </div>
              <div>
                <strong>03</strong>
                <span>
                  Flagship products
                  <br />
                  in development
                </span>
              </div>
              <div>
                <strong>360°</strong>
                <span>
                  Product-minded
                  <br />
                  engineering
                </span>
              </div>
            </div>
          </div>
          <div className="hero-portrait reveal">
            <div className="portrait-frame">
              <img
                src="https://images.unsplash.com/photo-1740658241944-c2e2b64f9dfa?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&q=82&w=900"
                alt="Abstract black and white architectural facade"
              />
              <div className="portrait-monogram">RO</div>
              <div className="portrait-note">
                <span>Based in</span>
                <strong>Nigeria · Building globally</strong>
              </div>
              <div className="portrait-code">
                <span>01</span>
                <code>ideas → systems</code>
              </div>
            </div>
            <p className="image-credit">Architecture photograph by Adrian Regeci / Unsplash</p>
          </div>
          <a className="scroll-cue" href="#about">
            <span>Scroll to explore</span>
            <i />
          </a>
        </section>

        <section id="about" className="section about">
          <SectionHead eyebrow="About" title="Engineering with a product builder’s perspective." />
          <div className="about-grid reveal">
            <div className="about-lead">
              <p>
                Over the last five years, I’ve grown through the practical work of turning ideas
                into products—understanding the people behind a problem, shaping the system, and
                building technology that supports real operations.
              </p>
            </div>
            <div className="about-copy">
              <p>
                My work spans responsive frontend experiences, backend services, APIs, databases and
                deployment. That breadth helps me see a product as a complete system rather than a
                collection of isolated screens.
              </p>
              <p>
                I’m especially interested in SaaS and business software: products that make
                complicated processes simpler, give teams better visibility, and create room for
                companies to grow.
              </p>
              <p>
                As a founder, I also think beyond implementation. I care about product clarity,
                commercial context, maintainability and the decisions that make software genuinely
                useful over time.
              </p>
            </div>
            <aside className="principle">
              <span>Working principle / 01</span>
              <blockquote>
                “The best software starts with a clear understanding of the problem—not the
                technology.”
              </blockquote>
            </aside>
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <SectionHead
            eyebrow="Technical capabilities"
            title="Versatile by design. Practical by nature."
            intro="A broad, evolving toolkit for choosing the right approach—not forcing every problem into the same stack."
          />
          <div className="skills-grid">
            {skills.map((group, index) => (
              <article className="skill-card reveal" key={group.label}>
                <span className="skill-number">0{index + 1}</span>
                <h3>{group.label}</h3>
                <div className="tags">
                  {group.value.map((item) => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <SectionHead
            eyebrow="Selected products"
            title="Products built around real operations."
            intro="A selection of platforms shaped by practical business and learning needs."
          />
          <div className="projects">
            {projects.map((project) => (
              <article className="project reveal" key={project.name}>
                <ProjectVisual project={project} />
                <div className="project-info">
                  <div className="project-index">
                    <span>{project.number}</span>
                    <span>Featured product</span>
                  </div>
                  <p className="project-type">{project.type}</p>
                  <h3>{project.name}</h3>
                  <p>{project.description}</p>
                  <ul>
                    {project.features.map((item) => (
                      <li key={item}>
                        <Icon name="check" size={15} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="tags">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  <div className="project-link-state">
                    <span>Live demo</span>
                    {project.liveUrl ? (
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        View live site <Icon name="arrow" size={14} />
                      </a>
                    ) : (
                      <b>Not publicly linked</b>
                    )}
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="project-disclaimer">
            
          </p>
        </section>

        <section id="experience" className="section journey-section">
          <SectionHead eyebrow="Professional journey" title="Five years of learning by building." />
          <div className="journey">
            <article className="journey-intro reveal">
              <span className="year">5 years</span>
              <h3>Engineering experience shaped by real products.</h3>
              <p>
                My journey is defined by practical growth across interfaces, systems, infrastructure
                and product thinking—not by a single framework or job title.
              </p>
            </article>
            <div className="timeline reveal">
              <div>
                <span>Foundation</span>
                <h4>Learning the web as a complete system</h4>
                <p>
                  Built fundamentals across HTML, CSS, JavaScript, programming logic, version
                  control and the Linux environment.
                </p>
              </div>
              <div>
                <span>Expansion</span>
                <h4>From interfaces to full-stack products</h4>
                <p>
                  Expanded into backend development, APIs, databases, deployment and the
                  architecture behind reliable web applications.
                </p>
              </div>
              <div>
                <span>Product building</span>
                <h4>Solving operational problems with software</h4>
                <p>
                  Applied engineering skills to management platforms, SaaS ideas and education
                  technology grounded in real user needs.
                </p>
              </div>
              <div>
                <span>Today</span>
                <h4>Building with an entrepreneurial lens</h4>
                <p>
                  Combining engineering, user experience and product strategy to create useful
                  digital products with room to scale.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section services-section">
          <SectionHead
            eyebrow="What I do"
            title="From product idea to working system."
            intro="Flexible engineering support for founders, teams and businesses building meaningful digital products."
          />
          <div className="services-grid">
            {services.map((service, index) => (
              <article className="service-card reveal" key={service.title}>
                <div className="service-icon">
                  <Icon name={service.icon} />
                </div>
                <span>0{index + 1}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section approach-section">
          <SectionHead eyebrow="My approach" title="Clear thinking before complex code." />
          <div className="approach-grid">
            {[
              ["Understand", "Start with the problem, the people and the business requirements."],
              ["Plan", "Shape the architecture, product flow and user experience before building."],
              ["Build", "Develop reliable, scalable solutions with care for every layer."],
              ["Improve", "Test, secure, optimise and continue learning from real use."],
            ].map((item, index) => (
              <article className="reveal" key={item[0]}>
                <span>0{index + 1}</span>
                <div className="approach-icon">
                  <i />
                  <b>{index + 1}</b>
                </div>
                <h3>{item[0]}</h3>
                <p>{item[1]}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-grid">
            <div className="contact-copy reveal">
              <div className="eyebrow">
                <span />
                Start a conversation
              </div>
              <h2>Have a useful product in mind? Let’s make it real.</h2>
              <p>
                Whether you’re shaping a SaaS product, improving a business process or need an
                experienced engineering perspective, I’d be glad to hear what you’re working on.
              </p>
              <div className="contact-details">
                <div>
                  <Icon name="mail" />
                  <span>
                    <small>Email</small>devrichy01@gmail.com
                  </span>
                </div>
                <div>
                  <Icon name="linkedin" />
                  <span>
                    <small>LinkedIn</small>https://www.linkedin.com/in/richness-olarinoye-78859128a/
                  </span>
                </div>
                <div>
                  <Icon name="github" />
                  <span>
                    <small>GitHub</small>https://github.com/richnmond
                  </span>
                </div>
                <div>
                  <Icon name="whatsapp" />
                  <span>
                    <small>WhatsApp</small>+234 705 983 1230
                  </span>
                </div>
              </div>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <footer>
        <a className="brand" href="#home">
          <img className="brand-mark" src="/brand-mark.svg" alt="" />
          <b>Richness Olarinoye</b>
        </a>
        <p>Software engineer. Product builder. Turning real problems into useful technology.</p>
        <div>
          <span>© {new Date().getFullYear()} Richness Olarinoye</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </div>
  );
}
