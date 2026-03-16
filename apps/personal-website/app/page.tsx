// app/page.tsx
import { WorksCarousel } from "@/components/WorksCarousel"

export default function Home() {
  return (
    <main className="max-w-[640px] mx-auto px-6 py-16 pb-24 font-mono">

      {/* Header */}
      <header className="flex justify-between items-start mb-14">
        <span className="text-sm text-foreground">
          Casey Lentz
          <span className="inline-block w-[5px] h-[5px] rounded-full bg-foreground mx-1 align-middle relative -top-[1px]" />
        </span>
        <div className="text-xs text-muted-foreground text-right leading-relaxed">
          Software Engineer<br />
          Remote, CA
        </div>
      </header>

      {/* Role */}
      <section className="mb-12">
        <h1 className="text-[22px] font-light tracking-tight leading-tight mb-4">
           Software<br />Engineer
        </h1>
        <p className="text-xs text-muted-foreground leading-[1.8] max-w-[520px]">
          Specializing in building, operating, and evolving scalable systems
          using React and TypeScript. Focused on high-quality implementation, performance,
          accessibility, and translating product and design requirements into reliable,
          maintainable UI.
        </p>
      </section>

      <Divider />

      {/* Skills */}
      <Section label="skills & expertise">
        <div className="flex flex-wrap gap-1.5">
          {[
            "component architecture",
            "design systems",
            "react",
            "typescript",
            "css",
            "web performance",
            "accessibility",
            "cross-functional collab",
          ].map((s) => (
            <span
              key={s}
              className="text-[10px] tracking-widest uppercase bg-secondary text-muted-foreground px-2.5 py-1 rounded border border-border"
            >
              {s}
            </span>
          ))}
        </div>
      </Section>

    


      {/* Past Works Carousel */}
      <Section label="The Work">
        <WorksCarousel />
      </Section>

        <Divider />

      {/* Experience */}
      <Section label="experience">
        {experience.map((job) => (
          <div key={job.company} className="mb-7 last:mb-0">
            <div className="flex justify-between items-baseline mb-1">
              <span className="text-xs font-medium text-foreground">{job.company}</span>
              <span className="text-[10px] text-muted-foreground tracking-wide">{job.period}</span>
            </div>
            <div className="text-[11px] text-muted-foreground mb-2">{job.title}</div>
            <ul className="space-y-0.5">
              {job.bullets.map((b, i) => (
                <li key={i} className="text-[11px] text-muted-foreground pl-3 relative before:content-['—'] before:absolute before:left-0 before:text-border">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Section>

      <Divider />




      {/* Languages */}
      <Section label="languages & libraries">
        <div className="grid grid-cols-2 gap-y-1 gap-x-8">
          {[
            "JavaScript, TypeScript",
            "React, Tailwind, Next.js",
            "HTML, CSS",
            "Jest unit testing",
          ].map((l) => (
            <span key={l} className="text-[11px] text-muted-foreground">{l}</span>
          ))}
        </div>
      </Section>

      <Divider />

      {/* Contact */}
      <Section label="contact">
        <a
          href="https://www.linkedin.com/in/casey-lentz/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-foreground border-b border-border hover:border-muted-foreground transition-colors"
        >
          linkedin.com/in/casey-lentz ↗
        </a>
      </Section>

      <Divider />

      {/* Education */}
      <Section label="education">
        <div className="text-xs text-foreground">Web Design & Interactive Media — BFA</div>
        <div className="text-[11px] text-muted-foreground mt-0.5">
          Illinois Institute of Art · 2009 – 2012
        </div>
      </Section>

    </main>
  )
}

/* ── Shared layout primitives ── */

function Divider() {
  return <hr className="border-border my-10" />
}

function Section({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="mb-10 last:mb-0">
      <div className="flex items-center gap-2.5 mb-5">
        <span className="text-[10px] tracking-[.2em] uppercase text-muted-foreground/60 shrink-0">
          {label}
        </span>
        <div className="flex-1 h-px bg-border" />
      </div>
      {children}
    </section>
  )
}

/* ── Data ── */

const experience = [
  {
    company: "NewsBank Inc",
    period: "2018 – present",
    title: "Senior Software Engineer",
    bullets: [
      "Estimate, plan and develop interfaces with React, TypeScript, CSS through CI/CD.",
      "Integrate third-party APIs to improve the user experience.",
      "Gather business intelligence reports for product stakeholders.",
    ],
  },
  {
    company: "6D Global",
    period: "2017 – 2018",
    title: "Frontend Engineer",
    bullets: [
      "Audit and set up client infrastructure and deployment processes.",
      "Develop user interfaces with HTML, PHP and JavaScript.",
      "Manage client expectations.",
    ],
  },
  {
    company: "UE.co",
    period: "2015 – 2017",
    title: "Frontend Engineer",
    bullets: [
      "Develop responsive web pages with semantic HTML5, SASS, PHP, JavaScript, jQuery.",
      "Integrate internal APIs with third-party vendors using PHP and Node.",
      "Develop, manage, and deploy several WordPress instances.",
    ],
  },
]
