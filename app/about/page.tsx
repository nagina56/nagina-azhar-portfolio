import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRightIcon,
  BrainIcon,
  BranchIcon,
  CodeIcon,
  LayoutIcon,
  PaletteIcon,
  PlugIcon,
  TargetIcon,
  WorkflowIcon,
} from "@/components/Icons";
import ProfilePhoto from "@/components/ProfilePhoto";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { skills } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Nagina Azhar is a Python Developer, AI & Web Developer and AI Automation enthusiast focused on practical digital solutions.",
};

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

const principles = [
  {
    title: "Useful over impressive",
    body: "A feature only earns its place if it makes something easier for the person using it. Everything else is decoration.",
  },
  {
    title: "Say what is realistic",
    body: "Scope gets agreed before the work starts, so timelines hold and expectations stay honest on both sides.",
  },
  {
    title: "Clean enough to hand over",
    body: "Readable structure, sensible naming and version control from the first commit, so the project is not a dead end later.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* ================= INTRO ================= */}
      <section className="shell pb-16 pt-14 sm:pb-20 sm:pt-20 lg:pt-24">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
          {/* Copy */}
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow">
                <span aria-hidden className="mr-2 text-accent">
                  /
                </span>
                About
              </p>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-gradient sm:text-5xl lg:text-[3.4rem]">
                Hi, I&rsquo;m Nagina â€” I build things that work.
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-8 space-y-5 text-[1.02rem] leading-[1.75] text-muted">
                <p>
                  I&rsquo;m a developer working across Python, AI and the web.
                  Most of what I build sits in one of two places: a website
                  that needs to be fast, clear and genuinely pleasant to use, or
                  an automated process that quietly removes a repetitive task
                  from someone&rsquo;s week.
                </p>
                <p>
                  I like problems that need a bit of thinking before they need
                  code â€” understanding what a business actually needs from an
                  &ldquo;AI solution&rdquo;, working out which parts of a
                  workflow can be automated and which genuinely need a person
                  involved. Getting that scope right up front is usually what
                  decides whether a project goes well.
                </p>
                <p>
                  On the technical side I&rsquo;m comfortable with Python for
                  the logic and automation behind a product, modern front-end
                  frameworks for the interface people actually touch, and API
                  integration to connect the two. I care about the details that
                  are easy to skip â€” mobile layout, loading speed, accessible
                  contrast, readable code â€” because they are the difference
                  between a site that works and one that frustrates people.
                </p>
                <p>
                  When I&rsquo;m not building, I&rsquo;m usually reading about
                  how AI models can be used more reliably in production, or
                  refactoring something I built three months ago that I now know
                  could be a lot simpler.
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link href="/projects" className="btn btn-primary px-6 py-3">
                  View My Projects
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <Link href="/contact" className="btn btn-ghost px-6 py-3">
                  Get in touch
                </Link>
              </div>
            </Reveal>
          </div>

          {/* Photograph */}
          <Reveal delay={120} className="flex justify-center lg:justify-end">
            <ProfilePhoto size={280} priority />
          </Reveal>
        </div>
      </section>

      {/* ================= PRINCIPLES ================= */}
      <section className="shell py-16 sm:py-20">
        <ul className="grid gap-4 md:grid-cols-3">
          {principles.map((principle, index) => (
            <Reveal as="li" key={principle.title} delay={index * 80}>
              <div className="glass h-full rounded-3xl p-6">
                <span className="font-mono text-[0.75rem] tracking-[0.2em] text-accent/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-4 font-display text-[1.02rem] font-semibold tracking-tight text-white">
                  {principle.title}
                </h2>
                <p className="mt-2.5 text-[0.9rem] leading-relaxed text-muted">
                  {principle.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="shell py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Skills"
            title="What I work with"
            description="Eight areas I build in day to day â€” from the Python that runs the logic, to the interface people see, to the integrations that tie everything together."
          />
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2">
          {skills.map((skill, index) => {
            const Icon = skillIcons[skill.icon];
            return (
              <Reveal as="li" key={skill.name} delay={(index % 2) * 70}>
                <div className="glass group flex h-full gap-5 rounded-3xl p-6 transition-[transform,border-color] duration-500 hover:-translate-y-1 hover:border-accent/25 sm:p-7">
                  <span className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/[0.09] bg-gradient-to-br from-white/[0.09] to-transparent text-accent transition-transform duration-500 group-hover:scale-105">
                    <Icon className="h-[1.15rem] w-[1.15rem]" />
                  </span>

                  <div className="min-w-0">
                    <h3 className="font-display text-[1.02rem] font-semibold tracking-tight text-white">
                      {skill.name}
                    </h3>
                    <p className="mt-2 text-[0.9rem] leading-relaxed text-muted">
                      {skill.blurb}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-1.5">
                      {skill.points.map((point) => (
                        <li
                          key={point}
                          className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-2.5 py-1 font-mono text-[0.75rem] tracking-wide text-faint"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </section>

      {/* ================= CURRENT FOCUS ================= */}
      <section className="shell pb-24 sm:pb-32">
        <Reveal>
          <div className="glass ring-fade relative overflow-hidden rounded-5xl p-8 sm:p-12">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.18),transparent_65%)] blur-2xl"
            />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="max-w-xl">
                <p className="eyebrow">
                  <span aria-hidden className="mr-2 text-accent">
                    /
                  </span>
                  Right now
                </p>
                <h2 className="mt-4 text-balance font-display text-2xl font-semibold leading-tight tracking-tight text-gradient-soft sm:text-3xl">
                  Taking on new projects across web development and AI automation.
                </h2>
                <p className="mt-5 leading-relaxed text-muted">
                  If you have a website that needs building or improving, or a
                  repetitive process you&rsquo;d like to hand over to a script,
                  get in touch and tell me what you&rsquo;re working with.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Link href="/contact" className="btn btn-primary px-6 py-3.5">
                  Contact Me
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <Link href="/services" className="btn btn-ghost px-6 py-3.5">
                  What I offer
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}