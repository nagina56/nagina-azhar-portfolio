import Image from "next/image";

import { ArrowUpRightIcon, GithubIcon } from "@/components/Icons";
import { profile, type Project } from "@/lib/site";

type ProjectCardProps = {
  project: Project;
  /** Index within the list, used to stagger the reveal animation. */
  index?: number;
};

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <article className="glass group relative flex h-full flex-col overflow-hidden rounded-4xl transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_28px_70px_-40px_rgba(0,0,0,0.95)]">
      {/* Accent glow that fades in on hover */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-px rounded-4xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          boxShadow: `inset 0 0 0 1px ${project.accent}40, 0 26px 60px -34px ${project.accent}80`,
        }}
      />

      {/* Preview */}
      <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/[0.07] bg-ink-850">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width: 1023px) 100vw, 900px"
          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.045]"
        />
        {/* Darken the preview slightly so the chips stay legible */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/25 to-ink-950/40"
        />

        <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-4 sm:p-5">
          <span
            className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[0.75rem] uppercase tracking-[0.14em] backdrop-blur-md"
            style={{
              borderColor: `${project.accent}55`,
              backgroundColor: `${project.accent}1f`,
              color: project.accentSoft,
            }}
          >
            <span
              aria-hidden
              className="h-1.5 w-1.5 rounded-full"
              style={{ backgroundColor: project.accent }}
            />
            {project.category}
          </span>
          <span className="rounded-full border border-white/10 bg-ink-950/60 px-3 py-1.5 font-mono text-[0.75rem] tracking-wider text-muted backdrop-blur-md">
            {project.year}
          </span>
        </div>

        {/* Sequence number, ghosted into the preview's bottom-left corner */}
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-3 left-4 font-display text-4xl font-semibold leading-none tracking-tighter text-white/[0.09] sm:bottom-4 sm:left-5 sm:text-5xl"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Live badge */}
        <div className="absolute bottom-4 right-4 flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-950/70 px-3 py-1.5 font-mono text-[0.78rem] uppercase tracking-[0.16em] text-muted backdrop-blur-md sm:bottom-5 sm:right-5">
          <span aria-hidden className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Live
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-xl font-semibold tracking-tight text-white sm:text-2xl">
          {project.name}
        </h3>

        <p className="mt-3 text-pretty text-[0.95rem] leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="mt-5 space-y-2.5">
          {project.highlights.map((highlight) => (
            <li key={highlight} className="flex gap-2.5 text-sm text-muted">
              <span
                aria-hidden
                className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full"
                style={{ backgroundColor: project.accent }}
              />
              <span className="leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Tags */}
        <ul className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-1.5 font-mono text-[0.75rem] tracking-wide text-faint"
            >
              {tag}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="mt-7 flex flex-col gap-3 border-t border-white/[0.07] pt-6 sm:flex-row sm:items-center">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary flex-1 px-5 py-3"
            aria-label={`Open the live demo of ${project.name} in a new tab`}
          >
            Live Demo
            <ArrowUpRightIcon className="h-4 w-4" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost px-5 py-3"
            aria-label={`View ${project.name} and other projects on GitHub in a new tab`}
          >
            <GithubIcon className="h-4 w-4" />
            Code
          </a>
        </div>
      </div>
    </article>
  );
}