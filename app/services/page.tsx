import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRightIcon,
  BrainIcon,
  BranchIcon,
  CheckIcon,
  CodeIcon,
  LayoutIcon,
  PaletteIcon,
  PlugIcon,
  TargetIcon,
  WorkflowIcon,
} from "@/components/Icons";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { processSteps, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web development, AI-powered web solutions, AI automation, API integration and UI/UX implementation by Nagina Azhar.",
};

const serviceIcons = {
  code: CodeIcon,
  layout: LayoutIcon,
  brain: BrainIcon,
  workflow: WorkflowIcon,
  plug: PlugIcon,
  palette: PaletteIcon,
  branch: BranchIcon,
  target: TargetIcon,
};

export default function ServicesPage() {
  return (
    <>
      {/* ================= HEADER ================= */}
      <section className="shell pb-14 pt-14 sm:pb-16 sm:pt-20 lg:pt-24">
        <div className="max-w-3xl">
          <Reveal>
            <p className="eyebrow">
              <span aria-hidden className="mr-2 text-accent">
                /
              </span>
              Services
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-gradient sm:text-5xl lg:text-[3.4rem]">
              What I can build for you.
            </h1>
          </Reveal>
          <Reveal delay={110}>
            <p className="mt-7 text-pretty text-lg leading-relaxed text-muted">
              Six areas I work in. Each one is scoped honestly before we start,
              with anything out of scope named up front &mdash; and priced and
              planned around what the project actually needs.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= SERVICE CARDS ================= */}
      <section className="shell pb-20 sm:pb-24">
        <ul className="grid gap-5 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            return (
              <Reveal as="li" key={service.slug} delay={(index % 2) * 80}>
                <article className="glass ring-fade group relative h-full overflow-hidden rounded-4xl p-7 transition-[transform,border-color] duration-500 hover:-translate-y-1 sm:p-9">
                  <div
                    aria-hidden
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(109,139,255,0.16),transparent_68%)] blur-xl transition-opacity duration-500 group-hover:opacity-100 md:opacity-0"
                  />

                  <div className="relative">
                    <div className="flex items-start justify-between gap-4">
                      <span className="inline-grid h-12 w-12 place-items-center rounded-2xl border border-white/[0.09] bg-gradient-to-br from-white/[0.09] to-transparent text-accent transition-transform duration-500 group-hover:scale-105">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="font-mono text-[0.75rem] tracking-[0.2em] text-white/15">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h2 className="mt-6 text-balance font-display text-xl font-semibold tracking-tight text-white">
                      {service.title}
                    </h2>
                    <p className="mt-3.5 text-[0.95rem] leading-relaxed text-muted">
                      {service.summary}
                    </p>

                    <div className="mt-7 border-t border-white/[0.07] pt-6">
                      <p className="font-mono text-[0.75rem] uppercase tracking-[0.16em] text-faint">
                        What&rsquo;s included
                      </p>
                      <ul className="mt-4 space-y-2.5">
                        {service.deliverables.map((deliverable) => (
                          <li
                            key={deliverable}
                            className="flex gap-2.5 text-[0.88rem] leading-relaxed text-muted"
                          >
                            <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" />
                            <span>{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </ul>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="shell py-20 sm:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="A simple, predictable process"
            description="No jargon-heavy proposals and no surprises at the end. Four steps, and you know roughly where things stand at any point."
          />
        </Reveal>

        <ol className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <Reveal as="li" key={step.step} delay={index * 80}>
              <div className="glass h-full rounded-3xl p-6">
                <span className="font-display text-2xl font-semibold tracking-tight text-accent/45">
                  {step.step}
                </span>
                <h3 className="mt-4 font-display text-[1.02rem] font-semibold tracking-tight text-white">
                  {step.title}
                </h3>
                <p className="mt-2.5 text-[0.9rem] leading-relaxed text-muted">
                  {step.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* ================= CTA ================= */}
      <section className="shell pb-24 sm:pb-32">
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
              <h2 className="text-balance font-display text-3xl font-semibold leading-tight tracking-tight text-gradient-soft sm:text-4xl">
                Not sure which service fits?
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-muted">
                Describe the problem in your own words. I&rsquo;ll tell you what
                I&rsquo;d approach first, whether it needs building at all, and
                roughly what it would take.
              </p>

              <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/contact" className="btn btn-primary px-7 py-3.5">
                  Contact Me
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <Link href="/projects" className="btn btn-ghost px-7 py-3.5">
                  See the work
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}