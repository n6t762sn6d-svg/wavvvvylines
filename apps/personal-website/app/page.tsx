export default function HomePage() {
  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-10 px-4 py-12 md:px-8">
      <header className="flex flex-col gap-2 border-b border-white/10 pb-6">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-white/70">Casey Lentz</p>
          <h1 className="mt-1 font-display text-3xl text-white">Senior Software Engineer</h1>
          <p className="mt-3 max-w-3xl text-sm text-white/80">
            Senior Software Engineer focused on building, operating, and evolving scalable UI systems
            using JavaScript, TypeScript, React, and CSS, with strong technical judgment,
            cross-functional communication, and a focus on quality.
          </p>
        </div>
      </header>

      <section className="grid gap-10 md:grid-cols-[2fr_1fr] md:gap-12">
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="font-display text-lg text-white">Skills and Expertise</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
              <li>Component-driven design, scalable UI patterns, and design systems</li>
              <li>Technical input into scoping, prioritization, and tradeoff decisions</li>
              <li>UI development with JavaScript, TypeScript, React, and CSS</li>
              <li>Web performance, accessibility, and production UI quality</li>
              <li>Cross-functional collaboration and clear technical communication</li>
            </ul>
            
          </div>

          <div className="space-y-6">
            <h2 className="font-display text-lg text-white">Work Experience</h2>
            <div className="space-y-4 text-sm text-white/80">
              <div>
                <p className="font-semibold text-white">NewsBank Inc</p>
                <p className="text-white/70">Senior Software Engineer | 2018 - Present</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Estimate, plan and develop interfaces with React, TypeScript, CSS through CI/CD.</li>
                  <li>Integrate third-party APIs to improve the user experience.</li>
                  <li>Gather business intelligence reports for product stakeholders.</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-white">6D Global</p>
                <p className="text-white/70">Frontend Engineer | 2017 - 2018</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Audit and set up client infrastructure and deployment processes.</li>
                  <li>Develop user interfaces with HTML, PHP and JavaScript.</li>
                  <li>Manage client expectations.</li>
                </ul>
              </div>

              <div>
                <p className="font-semibold text-white">Underground Elephant</p>
                <p className="text-white/70">Frontend Engineer | 2017 - 2018</p>
                <ul className="mt-2 list-disc space-y-1 pl-5">
                  <li>Develop responsive web pages with semantic HTML5, SASS, PHP, JavaScript, jQuery.</li>
                  <li>Integrate internal APIs with third-party vendors using PHP and Node.</li>
                  <li>Develop, manage, and deploy several WordPress instances.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        <aside className="space-y-8 md:sticky md:top-8 md:self-start md:h-min">
          <div>
            <h2 className="font-display text-lg text-white">Languages &amp; Libraries</h2>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-white/80">
              <li>JavaScript, TypeScript</li>
              <li>HTML, CSS</li>
              <li>React, Tailwind, Next.js</li>
              <li>Jest unit testing</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg text-white">Contact</h2>
            <ul className="mt-2 space-y-1 text-sm text-white/80">
              <li>
                <a
                  href="https://www.linkedin.com/in/casey-lentz/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 no-underline text-white hover:text-white"
                >
                 linkedin.com/in/casey-lentz/
                  <span aria-hidden="true" className="text-white/70">
                    ↗
                  </span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="font-display text-lg text-white">Education</h2>
            <div className="mt-2 text-sm text-white/80">
              <p className="font-semibold text-white">Web Design &amp; Interactive Media - BFA</p>
              <p>Illinois Institute of Art | 2009 – 2012</p>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
