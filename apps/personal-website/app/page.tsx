// app/page.tsx
import { Badge } from "@/components/ui/badge";
import { WorksCarousel } from "@/components/WorksCarousel";
import { Terminal } from "lucide-react";
import { CircleSmall } from "lucide-react";
import Image from "next/image";
export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 pb-24 ">
      {/* Role */}
      <section className="mb-12">
        <h1 className="text-[27px] font-bold tracking-tight leading-tight mb-4 ">
          Casey Lentz <Terminal className="inline" />
        </h1>
        <h2 className="text-[22px] font-bold tracking-tight leading-tight mb-4">
          Frontend Software Engineer
        </h2>
        <p className="text-lg text-muted-foreground leading-7 ">
          Software Engineer based in San Diego. I specialize in React,
          TypeScript and Next.js — building scalable, accessible component
          systems and high-performance interfaces. I work closely with design
          and engineering teams to build modern product experiences with modern
          agentic workflows. focusing on performance, WCAG compliance, and
          turning product requirements into reliable, production-grade UI.
        </p>
      </section>
      {/* Skills */}
      <Section label="skills & expertise">
        <div className="flex flex-wrap gap-1.5">
          {[
            "JavaScript",
            "typescript",
            "react",
            "Agentic workflows",
            "claude",
            "copilot",
            "MCP",
            "next.js",
            "A/B testing",
            "tailwind / scss / css",
            "component architecture",
            "graphql",
            "Rest APIs",
            "state management",
            "wcag / a11y",
            "core web vitals",
            "shadcn / bootstrap / baseui / mui",
            "ci/cd",
            "web performance",
            "Figma",
            "Photoshop",
            "Jira",
          ].map((s) => (
            <Badge
              key={s}
              className="tracking-widest uppercase bg-secondary text-muted-foreground px-2.5 py-1 rounded border border-border"
            >
              {s}
            </Badge>
          ))}
        </div>
      </Section>
      <Divider />

      {/* Experience */}
      <Section label="Work Experience">
        {experience.map((job) => (
          <div key={job.company} className="mb-7 last:mb-0">
            <div className="flex justify-between items-baseline mb-1">
              <span className="font-semibold text-foreground">
                {job.company}
              </span>
              <span className=" text-muted-foreground tracking-wide">
                {job.period}
              </span>
            </div>
            <div className="italic mb-2">{job.title}</div>
            <ul className="space-y-2">
              {job.bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-muted-foreground"
                >
                  <CircleSmall className="mt-1 shrink-0" size={15} />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Section>

      <Divider />

      {/* Past Works Carousel */}
      <Section label="Featured Works">
        <WorksCarousel />
      </Section>

      <Divider />

      {/* Education */}
      <Section label="About Me">
        <p className="text-foreground">
          Raised in rural Illinois in a town of 1200. Post high school I rambled
          around Wyoming as a professional ski bum.{" "}
        </p>{" "}
        <p>
          {" "}
          Studied in Chicago to become a Graphic Designer turned Software
          Engineer.{" "}
        </p>{" "}
        <p>Husband, animal lover, human leading with kindness. </p>{" "}
        <p>Currently calling San Diego home.</p>
      </Section>
      <Divider />

      {/* Education */}
      <Section label="education">
        <div className=" text-muted-foreground mt-0.5">
          Illinois Institute of Art · 2009 – 2012
        </div>
        <div className=" text-foreground">
          Web Design & Interactive Media — BFA
        </div>
      </Section>
    </main>
  );
}

/* ── Shared layout primitives ── */

function Divider() {
  return <hr className="border-border my-10" />;
}

function Section({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10 last:mb-0">
      <div className="flex items-center gap-2.5 mb-5">
        <h2 className="font-bold tracking-[.2em] uppercase text-muted-foreground/60 shrink-0">
          {label}
        </h2>
        <div className="flex-1 h-px bg-border" />
      </div>
      {children}
    </section>
  );
}

/* ── Data ── */

const experience = [
  {
    company: "NewsBank Inc",
    period: "2018 – present",
    title: "Senior Software Engineer",
    bullets: [
      "Estimate, plan and develop interfaces collaboratively in an agile environment between product, design, and backend engineering teams.",
      "Contribute in peer reviews to maintain code quality and establish engineering standards across the team.",
      "Implement and maintain a React component library and design system used across multiple products, ensuring accessibility, performance, and consistency.",
      "Implement standards and quality for Agentic workflows using Copilot and Claude",
      "Write thorough tests and documentation to ensure long-term maintainability and stability of codebases.",
    ],
  },
  {
    company: "6D Global",
    period: "2017 – 2018",
    title: "Frontend Engineer",
    bullets: [
      "Audit and set up client infrastructure and deployment processes.",
      "Develop user interfaces with HTML, PHP and JavaScript.",
      "Translated technical constraints and tradeoffs into clear language for non-technical stakeholders.",
    ],
  },
  {
    company: "Underground Elephant",
    period: "2015 – 2017",
    title: "Frontend Engineer",
    bullets: [
      "Develop responsive web pages with semantic HTML5, SASS, PHP, JavaScript, jQuery.",
      "Integrate internal APIs with third-party vendors using PHP and Node.",
      "Develop, manage, and deploy several WordPress instances.",
    ],
  },
];
