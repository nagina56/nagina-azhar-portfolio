import Link from "next/link";

import {
  ArrowRightIcon,
  BrainIcon,
  BranchIcon,
  CodeIcon,
  LayoutIcon,
  PaletteIcon,
  PlugIcon,
  SparkIcon,
  TargetIcon,
  TerminalIcon,
  WorkflowIcon,
} from "@/components/Icons";
import ProfilePhoto from "@/components/ProfilePhoto";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { profile, projects, skills } from "@/lib/site";

const stackItems = [
  "Python",
  "Next.js",
  "React",
  "Tailwind CSS",
  "TypeScript",
  "AI & Machine Learning",
  "API Integration",
  "Automation",
  "JavaScript",
  "Git & GitHub",
  "HTML / CSS",
];

const skillIcons = {
  code: CodeIcon,
  layout: LayoutIcon,
  brain: BrainIcon,
  workflow: WorkflowIcon,
  plug: PlugIcon,
  palette: PaletteIcon,
  branch: BranchIcon,
  target: TargetIcon,
};

const pillars = [
  {
    icon: CodeIcon,
    title: "Web Development",
    body: "Modern, responsive websites built with React and Next.js â€” fast on mobile, tidy to maintain, and structured so the next change is easy.",
  },
  {
    icon: BrainIcon,
    title: "AI & Machine Learning",
    body: "Language models, classification and smart features integrated into real products, with prompts and outputs handled properly rather than demoed and dropped.",
  },
  {
    icon: WorkflowIcon,
    title: "AI Automation",
    body: "Python scripts, scheduled jobs and API calls that take repetitive work off your plate â€” with logging and error handling, so it keeps running quietly.",
  },
];

export default function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden">
        <div className="shell pb-20 pt-14 sm:pb-24 sm:pt-20 lg:pb-28 lg:pt-24">
          <div className="flex flex-col-reverse items-center gap-14 lg:flex-row lg:items-center lg:gap-16">
            {/* Copy */}
            <div className="w-full text-center lg:w-[58%] lg:text-left">
              <Reveal>
                <p className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.09] bg-white/[0.04] px-4 py-1.5 font-mono text-[0.75rem] uppercase tracking-[0.16em] text-muted backdrop-blur-md">
                  <span aria-hidden className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  {profile.availability}
                </p>
              </Reveal>

              <Reveal delay={70}>
                <h1 className="mt-7 text-balance font-display text-[2.6rem] font-semibold leading-[1.06] tracking-[-0.03em] text-gradient sm:text-6xl lg:text-[4.15rem]">
                  Nagina Azhar
                </h1>
              </Reveal>

              <Reveal delay={130}>
                <p className="mt-5 text-pretty font-mono text-[0.8rem] uppercase leading-relaxed tracking-[0.12em] text-accent-bright sm:text-[0.95rem]">
                  Python Developer
                  <span aria-hidden className="mx-2 text-white/20">
                    |
                  </span>
                  AI &amp; Web Developer
                  <span aria-hidden className="mx-2 text-white/20">
                    |
                  </span>
                  AI Automation
                </p>
              </Reveal>

              <Reveal delay={190}>
                <p className="mx-auto mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted lg:mx-0 lg:text-xl">
                  {profile.intro}
                </p>
              </Reveal>

              <Reveal delay={250}>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                  <Link href="/projects" className="btn btn-primary px-7 py-3.5">
                    View My Projects
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                  <Link href="/contact" className="btn btn-ghost px-7 py-3.5">
                    Contact Me
                  </Link>
                </div>
              </Reveal>

              <Reveal delay={310}>
                <dl className="mx-auto mt-14 grid max-w-lg grid-cols-3 gap-4 border-t border-white/[0.07] pt-8 lg:mx-0">
                  {[
                    { value: "5", label: "Live projects" },
                    { value: "6", label: "Core services" },
                    { value: "8", label: "Key skills" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <dt className="sr-only">{stat.label}</dt>
                      <dd>
                        <span className="block font-display text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                          {stat.value}
                        </span>
                        <span className="mt-1.5 block text-xs leading-tight text-faint sm:text-[0.8rem]">
                          {stat.label}
                        </span>
                      </dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </div>

            {/* Photograph with floating glass chips */}
            <div className="flex w-full justify-center lg:w-[42%]">
              <Reveal delay={140}>
                <div className="relative">
                  <div
                    aria-hidden
                    className="absolute -inset-16 -z-10 rounded-full bg-[conic-gradient(from_180deg_at_50%_50%,rgba(109,139,255,0.16),rgba(168,85,247,0.13),transparent_55%,rgba(109,139,255,0.16))] blur-3xl"
                  />

                  <ProfilePhoto size={300} priority />

                  <div
                    aria-hidden
                    className="glass absolute -left-8 top-10 hidden animate-float-slow items-center gap-2 rounded-2xl px-3.5 py-2 shadow-xl sm:flex lg:-left-12"
                  >
                    <CodeIcon className="h-3.5 w-3.5 text-accent" />
                    <span className="font-mono text-[0.78rem] tracking-wide text-muted">
                      Python
                    </span>
                  </div>

                  <div
                    aria-hidden
                    className="glass absolute -right-6 top-1/2 hidden -translate-y-1/2 animate-float-slow items-center gap-2 rounded-2xl px-3.5 py-2 shadow-xl sm:flex lg:-right-10 [animation-delay:-6s]"
                  >
                    <BrainIcon className="h-3.5 w-3.5 text-violet-soft" />
                    <span className="font-mono text-[0.78rem] tracking-wide text-muted">
                      AI
                    </span>
                  </div>

                  <div
                    aria-hidden
                    className="glass absolute -bottom-6 left-1/2 hidden -translate-x-1/2 animate-float-slow items-center gap-2 rounded-2xl px-3.5 py-2 shadow-xl sm:flex [animation-delay:-3s]"
                  >
                    <TerminalIcon className="h-3.5 w-3.5 text-accent-bright" />
                    <span className="font-mono text-[0.78rem] tracking-wide text-muted">
                      Automation
                    </span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>

        {/* Stack marquee */}
        <div className="relative border-y border-white/[0.07] bg-ink-950/40 py-5">
          <div className="marquee mask-fade-b">
            <div className="marquee-track gap-3 pr-3">
              {[...stackItems, ...stackItems].map((item, index) => (
                <span
                  key={`${item}-${index}`}
                  className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/[0.07] bg-white/[0.03] px-4 py-2 font-mono text-[0.78rem] tracking-wide text-faint"
                >
                  <span aria-hidden className="text-accent/60">
                    +
                  </span>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT I DO ================= */}
      <section className="shell py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="What I do"
            title={
              <>
                Three things I keep coming back to:{" "}
                <span className="text-accent-bright">building</span>,{" "}
                <span className="text-violet-soft">automating</span>, and
                getting the details right.
              </>
            }
          />
        </Reveal>

        <ul className="mt-14 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal as="li" key={pillar.title} delay={index * 90}>
                <div className="glass group h-full rounded-4xl p-7 transition-[transform,border-color] duration-500 hover:-translate-y-1 hover:border-white/[0.16]">
                  <span className="inline-grid h-12 w-12 place-items-center rounded-2xl border border-white/[0.09] bg-gradient-to-br from-white/[0.09] to-transparent text-accent transition-transform duration-500 group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-semibold tracking-tight text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-[0.94rem] leading-relaxed text-muted">
                    {pillar.body}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </section>

      {/* ================= FEATURED PROJECTS ================= */}
      <section className="shell py-20 sm:py-28">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow="Selected work"
              title="Projects you can open right now"
              description="Every project below is live on the web â€” click through to see it running, then find the rest on the projects page."
            />
          </Reveal>

          <Reveal delay={90}>
            <Link href="/projects" className="btn btn-ghost shrink-0 px-5 py-3">
              All projects
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {featured.map((project, index) => (
            <Reveal
              key={project.slug}
              delay={index * 80}
              className={index === 0 ? "lg:col-span-2" : ""}
            >
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="shell py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="The toolkit I reach for"
            description="A practical set of skills covering the front end, the Python behind it, and the glue that connects other people's APIs together."
          />
        </Reveal>

        <ul className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => {
            const Icon = skillIcons[skill.icon];
            const shortBlurb = skill.blurb.split(".")[0];
            return (
              <Reveal as="li" key={skill.name} delay={(index % 4) * 70}>
                <div className="glass group h-full rounded-3xl p-5 transition-[transform,border-color] duration-500 hover:-translate-y-1 hover:border-accent/30">
                  <Icon className="h-5 w-5 text-accent transition-colors duration-300 group-hover:text-accent-bright" />
                  <h3 className="mt-4 font-display text-[0.98rem] font-semibold tracking-tight text-white">
                    {skill.name}
                  </h3>
                  <p className="mt-2 text-[0.85rem] leading-relaxed text-faint">
                    {shortBlurb}.
                  </p>
                </div>
              </Reveal>
            );
          })}
        </ul>

        <Reveal delay={80}>
          <div className="mt-10">
            <Link href="/about" className="btn btn-ghost px-5 py-3">
              More about me
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* ================= CTA ================= */}
      <section className="shell pb-24 pt-8 sm:pb-32">
        <Reveal>
          <div className="glass ring-fade relative overflow-hidden rounded-5xl px-7 py-14 text-center sm:px-14 sm:py-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(109,139,255,0.22),transparent_65%)] blur-2xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.20),transparent_65%)] blur-2xl"
            />

            <div className="relative">
              <span className="inline-grid h-12 w-12 place-items-center rounded-2xl border border-white/[0.09] bg-white/[0.05] text-accent-bright">
                <SparkIcon className="h-5 w-5" />
              </span>

              <h2 className="mt-7 text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-gradient-soft sm:text-4xl">
                Have a project in mind?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted">
                Send over a short brief &mdash; what you need, who it&rsquo;s for
                and your timeline. I&rsquo;ll come back with honest feedback on
                what&rsquo;s realistic.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="btn btn-primary px-7 py-3.5">
                  Contact Me
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <Link href="/services" className="btn btn-ghost px-7 py-3.5">
                  See services
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}