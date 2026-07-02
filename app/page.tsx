import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";
import { Reveal } from "./components/Reveal";
import { ThemeToggle } from "./components/ThemeToggle";

/*
  Shape system: interactive elements are pills (rounded-full),
  containers are sharp (no radius). One accent: emerald.
*/

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
    points: [
      "Applied AI research spanning Arabic NLP and LLM-based systems.",
    ],
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

/*
  Publications: add entries here and they will render automatically.
  Example shape:
  {
    title: "Paper title",
    venue: "Conference or journal, year",
    authors: "A. Madkoor, ...",
    url: "https://...",
  }
*/
type Publication = {
  title: string;
  venue: string;
  authors: string;
  url?: string;
};

const publications: Publication[] = [];

const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "AI & Machine Learning",
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
    items: [
      "Network engineering",
      "Linux",
      "Security fundamentals",
      "Agile teamwork",
    ],
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

const accentLink =
  "text-emerald-700 transition-colors hover:text-emerald-800 dark:text-emerald-400 dark:hover:text-emerald-300";

export default function Home() {
  return (
    <>
      <header className="fixed inset-x-0 top-0 z-40 border-b border-zinc-200/80 bg-zinc-50/80 backdrop-blur-md dark:border-zinc-800/80 dark:bg-zinc-950/80">
        <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
          <Link
            href="/"
            className="whitespace-nowrap text-sm font-medium tracking-tight"
          >
            Anas Madkoor
          </Link>
          <div className="flex items-center gap-1 sm:gap-2">
            <a
              href="#experience"
              className="rounded-full px-2.5 py-1.5 text-sm text-zinc-600 transition-colors hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 sm:px-3"
            >
              Experience
            </a>
            <a
              href="#publications"
              className="rounded-full px-2.5 py-1.5 text-sm text-zinc-600 transition-colors hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 sm:px-3"
            >
              Publications
            </a>
            <a
              href="#contact"
              className="hidden rounded-full px-3 py-1.5 text-sm text-zinc-600 transition-colors hover:bg-zinc-200 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-zinc-100 sm:block"
            >
              Contact
            </a>
            <ThemeToggle />
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-5xl px-6">
        {/* Hero */}
        <section className="flex min-h-[100dvh] flex-col justify-center pt-16">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">
              AI Research Assistant, QCRI
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-6 text-6xl font-medium leading-none tracking-tighter sm:text-7xl md:text-8xl">
              Anas Madkoor
            </h1>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-8 max-w-[52ch] text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Working on Arabic NLP, LLM evaluation, and applied machine
              learning at the Qatar Computing Research Institute in Doha.
            </p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href={LINKS.email}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-700 px-6 py-3 text-sm font-medium text-white transition-all hover:bg-emerald-800 active:scale-[0.98] dark:bg-emerald-400 dark:text-zinc-950 dark:hover:bg-emerald-300"
              >
                <Mail className="h-4 w-4" strokeWidth={1.5} />
                Get in touch
              </a>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-3 text-sm text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900 active:scale-[0.98] dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-zinc-100"
              >
                <Github className="h-4 w-4" strokeWidth={1.5} />
                GitHub
              </a>
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-3 text-sm text-zinc-700 transition-colors hover:border-zinc-400 hover:text-zinc-900 active:scale-[0.98] dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-zinc-100"
              >
                <Linkedin className="h-4 w-4" strokeWidth={1.5} />
                LinkedIn
              </a>
            </div>
          </Reveal>
        </section>

        {/* Experience */}
        <section id="experience" className="grid gap-10 border-t border-zinc-200 py-24 dark:border-zinc-800 md:grid-cols-12">
          <div className="md:col-span-4">
            <h2 className="sticky top-24 text-2xl font-medium tracking-tight">
              Experience
            </h2>
          </div>
          <div className="md:col-span-8">
            {experience.map((job, i) => (
              <Reveal key={`${job.role}-${job.dates}`}>
                <article
                  className={
                    i === 0
                      ? "pb-10"
                      : "border-t border-zinc-200 py-10 last:pb-0 dark:border-zinc-800"
                  }
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-medium tracking-tight">
                      {job.role}
                    </h3>
                    <p className="font-mono text-xs text-zinc-500 dark:text-zinc-500">
                      {job.dates}
                    </p>
                  </div>
                  <a
                    href={job.orgUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-1 inline-block text-sm ${accentLink}`}
                  >
                    {job.org}
                  </a>
                  <ul className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Publications */}
        <section id="publications" className="border-t border-zinc-200 py-24 dark:border-zinc-800">
          <Reveal>
            <h2 className="text-2xl font-medium tracking-tight">
              Publications
            </h2>
          </Reveal>
          {publications.length > 0 ? (
            <div className="mt-10">
              {publications.map((pub, i) => (
                <Reveal key={pub.title}>
                  <article
                    className={
                      i === 0
                        ? "pb-8"
                        : "border-t border-zinc-200 py-8 last:pb-0 dark:border-zinc-800"
                    }
                  >
                    {pub.url ? (
                      <a
                        href={pub.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-medium tracking-tight transition-colors hover:text-emerald-700 dark:hover:text-emerald-400"
                      >
                        {pub.title}
                      </a>
                    ) : (
                      <h3 className="text-lg font-medium tracking-tight">
                        {pub.title}
                      </h3>
                    )}
                    <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                      {pub.authors}
                    </p>
                    <p className="mt-1 font-mono text-xs text-zinc-500">
                      {pub.venue}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>
          ) : (
            <Reveal>
              <div className="mt-10 border border-dashed border-zinc-300 px-8 py-16 text-center dark:border-zinc-700">
                <p className="text-lg font-medium tracking-tight">
                  Publications will be listed here.
                </p>
                <p className="mx-auto mt-3 max-w-[45ch] text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  Papers from ongoing research at QCRI and Qatar University are
                  in preparation.
                </p>
              </div>
            </Reveal>
          )}
        </section>

        {/* Skills */}
        <section className="border-t border-zinc-200 py-24 dark:border-zinc-800">
          <Reveal>
            <h2 className="text-2xl font-medium tracking-tight">Skills</h2>
          </Reveal>
          <div className="mt-10 grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {skillGroups.map((group, i) => (
              <Reveal key={group.title} delay={i * 0.06}>
                <div className="border-l-2 border-emerald-700/60 pl-5 dark:border-emerald-400/50">
                  <h3 className="text-sm font-medium">{group.title}</h3>
                  <ul className="mt-4 space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Community & Education */}
        <section className="border-t border-zinc-200 py-24 dark:border-zinc-800">
          <Reveal>
            <h2 className="text-2xl font-medium tracking-tight">
              Community & Education
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-x-12 gap-y-6 sm:grid-cols-2">
            {community.map((item, i) => (
              <Reveal key={item.name} delay={(i % 2) * 0.06}>
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <div>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium transition-colors hover:text-emerald-700 dark:hover:text-emerald-400"
                    >
                      {item.name}
                    </a>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {item.role}
                    </p>
                  </div>
                  <p className="font-mono text-xs text-zinc-500 sm:shrink-0">
                    {item.dates}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <div className="mt-16 flex flex-wrap items-baseline justify-between gap-4 border-t border-zinc-200 pt-10 dark:border-zinc-800">
              <div>
                <a
                  href="https://qu.edu.qa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-medium tracking-tight transition-colors hover:text-emerald-700 dark:hover:text-emerald-400"
                >
                  Qatar University
                </a>
                <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
                  BSc Computer Science, Concentration in Cybersecurity
                </p>
              </div>
              <p className="font-mono text-xs text-zinc-500">2021 - 2025</p>
            </div>
          </Reveal>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-zinc-200 py-24 dark:border-zinc-800">
          <Reveal>
            <a
              href={LINKS.email}
              className="group inline-flex items-baseline gap-3 text-5xl font-medium tracking-tighter transition-colors hover:text-emerald-700 dark:hover:text-emerald-400 sm:text-6xl md:text-7xl"
            >
              Get in touch
              <ArrowUpRight
                className="h-8 w-8 self-center transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 sm:h-10 sm:w-10"
                strokeWidth={1.5}
              />
            </a>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-12 flex flex-col justify-between gap-6 text-sm text-zinc-600 dark:text-zinc-400 sm:flex-row sm:items-end">
              <div className="flex flex-wrap gap-x-8 gap-y-2">
                <a href={LINKS.email} className={accentLink}>
                  ansamr76@gmail.com
                </a>
                <a
                  href={LINKS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                >
                  GitHub
                </a>
                <a
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-zinc-900 dark:hover:text-zinc-100"
                >
                  LinkedIn
                </a>
              </div>
              <p className="text-zinc-500">
                Doha, Qatar. © 2026 Anas Madkoor
              </p>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  );
}
