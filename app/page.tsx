import Link from "next/link";
import {
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Github,
  Linkedin,
  Mail,
  Network,
  Radio,
  Sparkles,
} from "lucide-react";
import { Reveal } from "./components/Reveal";
import { ThemeToggle } from "./components/ThemeToggle";

const LINKS = {
  email: "mailto:ansamr76@gmail.com",
  github: "https://github.com/C974",
  linkedin: "https://www.linkedin.com/in/anas-madkoor-035224298/",
};

type Experience = {
  role: string;
  org: string;
  orgUrl: string;
  dates: string;
  current?: boolean;
  points: string[];
};

const experience: Experience[] = [
  {
    role: "AI Research Assistant",
    org: "Qatar Computing Research Institute (QCRI)",
    orgUrl: "https://www.hbku.edu.qa/en/qcri",
    dates: "2025 - Present",
    current: true,
    points: ["Applied AI research spanning Arabic NLP and LLM-based systems."],
  },
  {
    role: "Research Assistant, Smart Irrigation",
    org: "Qatar Research, Development and Innovation (QRDI) Council",
    orgUrl: "https://connect.qrdi.org.qa/scientific-research/p/opportunities",
    dates: "March 2025 - Present",
    current: true,
    points: [
      "UREP 32-0227-250242: IoT- and AI-enabled smart irrigation for sustainable greenhouse farming.",
      "Combining sensor data and machine learning to optimize irrigation, resources, and environmental control.",
    ],
  },
  {
    role: "Software Engineering Intern",
    org: "Middle East Council on Global Affairs",
    orgUrl: "https://mecouncil.org/",
    dates: "September 2024 - Present",
    current: true,
    points: [
      "Built a news aggregation and summarization app with React, Tailwind CSS, and MongoDB.",
      "Wrote Python scrapers and integrated NewsAPI for real-time coverage across outlets.",
      "Designed MongoDB schemas for efficient storage and retrieval.",
    ],
  },
  {
    role: "Research Intern",
    org: "Qatar Computing Research Institute (QCRI)",
    orgUrl: "https://www.hbku.edu.qa/en/qcri",
    dates: "September 2024 - February 2025",
    points: [
      "Designed and optimized prompts for the Fanar model to improve output relevance and accuracy.",
      "Worked on NLP for Modern Standard Arabic and regional dialects.",
    ],
  },
  {
    role: "Software Engineering Intern",
    org: "Qatar Computing Research Institute (QCRI)",
    orgUrl: "https://www.hbku.edu.qa/en/qcri",
    dates: "May 2024 - August 2024",
    points: [
      "Built a chatbot on a Retrieval-Augmented Generation (RAG) pipeline.",
      "Used Llama 3 for structured data extraction from crawled web content.",
      "Shipped a full-stack site with Next.js and React.",
    ],
  },
  {
    role: "Research Assistant, VR Micro-mobility",
    org: "Qatar Research, Development and Innovation (QRDI) Council",
    orgUrl: "https://connect.qrdi.org.qa/scientific-research/p/opportunities/p/25",
    dates: "March 2024 - Present",
    current: true,
    points: [
      "UREP 31-013-3-004: VR-simulated interaction between micro-mobility vehicles and pedestrians in Qatar.",
    ],
  },
  {
    role: "Network Staff Member",
    org: "FIFA World Cup 2022",
    orgUrl: "https://www.fifa.com/",
    dates: "October 2022 - December 2022",
    points: [
      "Maintained and monitored fan zone network infrastructure under high-volume traffic.",
    ],
  },
];

type Publication = {
  title: string;
  venue: string;
  authors: string;
  url?: string;
};

const publications: Publication[] = [];

const skillGroups = [
  {
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    items: [
      "Python & PyTorch",
      "LLM prompt design & evaluation",
      "Retrieval-Augmented Generation",
      "Arabic & English NLP",
      "Data collection & analysis",
    ],
  },
  {
    title: "Software Engineering",
    icon: Code2,
    items: [
      "TypeScript & JavaScript",
      "React & Next.js",
      "SQL, PostgreSQL & MongoDB",
      "REST APIs & Prisma",
      "Git & GitHub",
    ],
  },
  {
    title: "Systems & Security",
    icon: Network,
    items: ["Network engineering", "Linux", "Security fundamentals", "Agile teamwork"],
  },
];

const community = [
  {
    name: "Microsoft QU Student Club",
    role: "Co-founder & Treasurer",
    dates: "February 2025 - Present",
    url: "https://www.linkedin.com/company/microsoft-qu",
  },
  {
    name: "ACM Qatar University",
    role: "Events management team",
    dates: "December 2024 - Present",
    url: "https://www.linkedin.com/company/acm-qu/",
  },
  {
    name: "MENA ML Winter School",
    role: "Volunteer",
    dates: "February 2025",
    url: "https://www.mena.ml/",
  },
  {
    name: "WISE 2024 Conference",
    role: "Volunteer",
    dates: "December 2024",
    url: "https://wise2024-qatar.com/",
  },
  {
    name: "Qatar University Open Day",
    role: "Volunteer",
    dates: "February 2024",
    url: "https://qu.edu.qa",
  },
  {
    name: "FIFA Arab Cup 2021",
    role: "Volunteer",
    dates: "November 2021 - December 2021",
    url: "https://www.fifa.com/",
  },
];

const highlights = [
  { label: "Research tracks", value: "AI + IoT + VR" },
  { label: "Current base", value: "Doha, Qatar" },
  { label: "Focus", value: "Arabic NLP" },
];

const accentLink =
  "text-cyan-700 transition-colors hover:text-cyan-800 dark:text-cyan-300 dark:hover:text-cyan-200";

export default function Home() {
  return (
    <>
      <div className="site-backdrop" aria-hidden="true">
        <div className="orb orb-one" />
        <div className="orb orb-two" />
        <div className="signal-grid" />
      </div>

      <header className="fixed inset-x-0 top-0 z-40 border-b border-zinc-900/10 bg-zinc-50/75 backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-950/70">
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
          <Link href="/" className="group flex items-center gap-3 text-sm font-semibold tracking-tight">
            <span className="grid h-8 w-8 place-items-center rounded-full border border-cyan-500/30 bg-cyan-400/10 text-xs text-cyan-700 dark:text-cyan-200">
              AM
            </span>
            <span>Anas Madkoor</span>
          </Link>
          <div className="flex items-center gap-1 sm:gap-2">
            <a href="#experience" className="nav-link">
              Experience
            </a>
            <a href="#publications" className="nav-link">
              Publications
            </a>
            <a href="#contact" className="nav-link hidden sm:inline-flex">
              Contact
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <section className="grid min-h-[100dvh] items-center gap-10 pb-20 pt-24 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <Reveal>
              <p className="inline-flex rounded-full border border-cyan-500/25 bg-cyan-400/10 px-4 py-2 font-mono text-xs uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-200">
                AI Research Assistant, QCRI
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[0.95] tracking-tighter text-zinc-950 dark:text-white sm:text-7xl lg:text-8xl">
                Building useful AI systems for language, data, and the real world.
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-300 sm:text-lg">
                I work across Arabic NLP, LLM evaluation, RAG systems, IoT research, and full-stack products with a research-first engineering mindset.
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href={LINKS.email} className="primary-button">
                  <Mail className="h-4 w-4" strokeWidth={1.7} />
                  Get in touch
                </a>
                <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="secondary-button">
                  <Github className="h-4 w-4" strokeWidth={1.7} />
                  GitHub
                </a>
                <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="secondary-button">
                  <Linkedin className="h-4 w-4" strokeWidth={1.7} />
                  LinkedIn
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.18} className="lg:justify-self-end">
            <div className="hero-panel">
              <div className="hero-panel-scan" />
              <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-200/80">
                    Live profile
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                    Research engineer in motion
                  </h2>
                </div>
                <span className="grid h-12 w-12 place-items-center rounded-full bg-cyan-300 text-zinc-950">
                  <Radio className="h-5 w-5" strokeWidth={1.7} />
                </span>
              </div>
              <div className="mt-7 grid gap-3">
                {highlights.map((item, index) => (
                  <div key={item.label} className="metric-row" style={{ animationDelay: `${index * 0.7}s` }}>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                ))}
              </div>
              <div className="mt-8 overflow-hidden rounded-[1.25rem] border border-white/10 bg-white/[0.04] p-4">
                <div className="signal-line" />
                <div className="mt-4 grid grid-cols-5 gap-2">
                  {Array.from({ length: 15 }).map((_, index) => (
                    <span key={index} className="data-cell" style={{ animationDelay: `${index * 0.08}s` }} />
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        <section id="experience" className="section-shell">
          <Reveal>
            <div className="section-heading">
              <h2>Experience</h2>
              <p>
                Research, engineering, and field systems work across institutes, policy teams, and public-scale events.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-4">
            {experience.map((job, i) => (
              <Reveal key={`${job.role}-${job.dates}`} delay={(i % 3) * 0.05}>
                <article className="experience-card group">
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-xl font-semibold tracking-tight text-zinc-950 dark:text-white">
                          {job.role}
                        </h3>
                        {job.current ? <span className="status-pill">Current</span> : null}
                      </div>
                      <a href={job.orgUrl} target="_blank" rel="noopener noreferrer" className={`mt-2 inline-flex ${accentLink}`}>
                        {job.org}
                      </a>
                    </div>
                    <p className="font-mono text-xs text-zinc-500 dark:text-zinc-400 md:text-right">
                      {job.dates}
                    </p>
                  </div>
                  <ul className="mt-6 grid gap-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300 md:grid-cols-2">
                    {job.points.map((point) => (
                      <li key={point} className="relative pl-5 before:absolute before:left-0 before:top-[0.8em] before:h-1.5 before:w-1.5 before:rounded-full before:bg-cyan-500">
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section id="publications" className="section-shell">
          <Reveal>
            <div className="section-heading">
              <h2>Publications</h2>
              <p>Research outputs and papers from ongoing work will appear here as they become available.</p>
            </div>
          </Reveal>
          {publications.length > 0 ? (
            <div className="mt-10 grid gap-4">
              {publications.map((pub) => (
                <Reveal key={pub.title}>
                  <article className="experience-card">
                    {pub.url ? (
                      <a href={pub.url} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold tracking-tight transition-colors hover:text-cyan-700 dark:hover:text-cyan-300">
                        {pub.title}
                      </a>
                    ) : (
                      <h3 className="text-xl font-semibold tracking-tight">{pub.title}</h3>
                    )}
                    <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{pub.authors}</p>
                    <p className="mt-2 font-mono text-xs text-zinc-500">{pub.venue}</p>
                  </article>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="empty-state">
                <Sparkles className="h-6 w-6 text-cyan-600 dark:text-cyan-300" strokeWidth={1.7} />
                <h3>Publications are in preparation.</h3>
                <p>Papers from ongoing research at QCRI and Qatar University will be listed here.</p>
              </div>
            </Reveal>
          )}
        </section>

        <section className="section-shell">
          <Reveal>
            <div className="section-heading">
              <h2>Skills</h2>
              <p>A practical stack for AI research, production web apps, data systems, and reliable infrastructure.</p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {skillGroups.map((group, i) => {
              const Icon = group.icon;
              return (
                <Reveal key={group.title} delay={i * 0.07}>
                  <div className="skill-card">
                    <Icon className="h-6 w-6 text-cyan-700 dark:text-cyan-300" strokeWidth={1.7} />
                    <h3>{group.title}</h3>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </section>

        <section className="section-shell">
          <Reveal>
            <div className="section-heading">
              <h2>Community & Education</h2>
              <p>Leadership, volunteering, and academic work connected to computing communities in Qatar and MENA.</p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {community.map((item, i) => (
              <Reveal key={item.name} delay={(i % 2) * 0.06}>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="community-card group">
                  <span>
                    <strong>{item.name}</strong>
                    <small>{item.role}</small>
                  </span>
                  <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">{item.dates}</span>
                </a>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="education-strip">
              <div>
                <a href="https://qu.edu.qa" target="_blank" rel="noopener noreferrer">
                  Qatar University
                </a>
                <p>BSc Computer Science, Concentration in Cybersecurity</p>
              </div>
              <span>2021 - 2025</span>
            </div>
          </Reveal>
        </section>

        <section id="contact" className="section-shell pb-16">
          <Reveal>
            <div className="contact-panel">
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-200">
                Open to research and engineering conversations
              </p>
              <a href={LINKS.email} className="group mt-6 inline-flex max-w-5xl items-center gap-4 text-5xl font-semibold leading-none tracking-tighter text-zinc-950 transition-colors hover:text-cyan-700 dark:text-white dark:hover:text-cyan-200 sm:text-7xl lg:text-8xl">
                Get in touch
                <ArrowUpRight className="h-9 w-9 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:h-12 sm:w-12" strokeWidth={1.5} />
              </a>
              <div className="mt-12 flex flex-col justify-between gap-6 text-sm text-zinc-600 dark:text-zinc-300 sm:flex-row sm:items-end">
                <div className="flex flex-wrap gap-x-8 gap-y-3">
                  <a href={LINKS.email} className={accentLink}>
                    ansamr76@gmail.com
                  </a>
                  <a href={LINKS.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-zinc-950 dark:hover:text-white">
                    GitHub
                  </a>
                  <a href={LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-zinc-950 dark:hover:text-white">
                    LinkedIn
                  </a>
                </div>
                <p className="text-zinc-500">Doha, Qatar. (c) 2026 Anas Madkoor</p>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
