import type { Metadata } from "next";
import Link from "next/link";

import { ArrowRightIcon, GithubIcon } from "@/components/Icons";
import ProjectCard from "@/components/ProjectCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import { profile, projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected work by Nagina Azhar — fashion e-commerce, restaurant, beauty studio and dental clinic websites, plus an AI web application. All live and openable.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* ================= HEADER ================= */}
      <section className="shell pb-14 pt-14 sm:pb-16 sm:pt-20 lg:pt-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-2xl">
            <Reveal>
              <p className="eyebrow">
                <span aria-hidden className="mr-2 text-accent">
                  /
                </span>
                Projects
              </p>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-gradient sm:text-5xl lg:text-[3.4rem]">
                Five projects, all live and openable.
              </h1>
            </Reveal>
            <Reveal delay={110}>
              <p className="mt-7 text-pretty text-lg leading-relaxed text-muted">
                Each of these is deployed and running &mdash; no mockups, no
                private links. Open one in a new tab, judge the detail, and come
                back for the rest.
              </p>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost px-5 py-3"
            >
              <GithubIcon className="h-4 w-4" />
              GitHub
            </a>
          </Reveal>
        </div>
      </section>

      {/* ================= PROJECT GRID ================= */}
      <section className="shell pb-20 sm:pb-24">
        <ul className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal as="li" key={project.slug} delay={(index % 2) * 90}>
              <ProjectCard project={project} index={index} />
            </Reveal>
          ))}
        </ul>
      </section>

      {/* ================= NOTE ================= */}
      <section className="shell pb-24 sm:pb-32">
        <Reveal>
          <div className="glass rounded-4xl px-7 py-10 sm:px-10">
            <SectionHeading
              eyebrow="A note on the work"
              title="Different industries, same approach"
              description="Four of these are client-style business sites across fashion, dining, beauty and dental care — each with its own palette, layout and content structure, but the same underlying priorities: mobile-first responsiveness, clear information hierarchy, and pages that load quickly. FlowAI is the AI side of the work, where prompts drive real tasks instead of sitting in a demo."
            />

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/services" className="btn btn-primary px-6 py-3">
                See what I offer
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <Link href="/contact" className="btn btn-ghost px-6 py-3">
                Start a project
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}