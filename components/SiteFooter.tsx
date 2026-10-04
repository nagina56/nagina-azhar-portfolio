import Link from "next/link";

import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/Icons";
import { navLinks, profile } from "@/lib/site";

export default function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-auto border-t border-white/[0.07] bg-ink-950/60">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent"
      />

      <div className="shell py-14 sm:py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Identity */}
          <div className="max-w-sm">
            <p className="font-display text-lg font-semibold tracking-tight text-white">
              Nagina Azhar
            </p>
            <p className="mt-1.5 font-mono text-[0.78rem] uppercase leading-relaxed tracking-[0.14em] text-faint">
              Python Developer
              <br />
              AI &amp; Web Developer
              <br />
              AI Automation
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Modern websites and practical AI-powered solutions, built to be
              simple and genuinely useful.
            </p>
          </div>

          {/* Pages */}
          <nav aria-label="Footer">
            <h2 className="eyebrow">Pages</h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-muted transition-colors duration-200 hover:text-white"
                  >
                    <span
                      aria-hidden
                      className="h-px w-0 bg-accent transition-all duration-300 group-hover:w-4"
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Elsewhere */}
          <div>
            <h2 className="eyebrow">Get in touch</h2>
            <ul className="mt-5 space-y-3">
              <li>
                <a
                  href={profile.emailHref}
                  className="group inline-flex items-center gap-2.5 text-sm text-muted transition-colors duration-200 hover:text-white"
                >
                  <MailIcon className="h-4 w-4 text-faint transition-colors group-hover:text-accent" />
                  {profile.email}
                </a>
              </li>
              <li>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 text-sm text-muted transition-colors duration-200 hover:text-white"
                >
                  <LinkedinIcon className="h-4 w-4 text-faint transition-colors group-hover:text-accent" />
                  LinkedIn
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
              <li>
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 text-sm text-muted transition-colors duration-200 hover:text-white"
                >
                  <GithubIcon className="h-4 w-4 text-faint transition-colors group-hover:text-accent" />
                  GitHub
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/[0.07] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[0.78rem] tracking-wide text-faint">
            &copy; {year} Nagina Azhar. All rights reserved.
          </p>
          <p className="font-mono text-[0.78rem] tracking-wide text-faint">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}