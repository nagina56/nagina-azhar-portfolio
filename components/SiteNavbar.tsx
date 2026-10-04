"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { CloseIcon, GithubIcon, LinkedinIcon, MenuIcon } from "@/components/Icons";
import { navLinks, profile } from "@/lib/site";

function Monogram({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={`relative grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-white/10 bg-gradient-to-br from-accent-deep/60 to-violet/50 font-display text-[0.8rem] font-semibold tracking-tight text-white ${className}`}
    >
      NA
    </span>
  );
}

export default function SiteNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation.
  const closeMenu = () => setOpen(false);

  // Lock body scroll and allow Escape to dismiss while the menu is open.
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled || open
          ? "border-b border-white/[0.07] bg-ink-950/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="shell flex h-16 items-center justify-between gap-4 sm:h-[4.5rem]"
      >
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-xl"
          aria-label={`${profile.name} â€” home`}
        >
          <Monogram className="transition-transform duration-300 group-hover:scale-105" />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="font-display text-sm font-semibold tracking-tight text-white">
              Nagina Azhar
            </span>
            <span className="font-mono text-[0.75rem] uppercase tracking-[0.16em] text-faint">
              Developer
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative block rounded-full px-4 py-2 text-sm transition-colors duration-200 ${
                    active
                      ? "text-white"
                      : "text-muted hover:text-white"
                  }`}
                >
                  {active && (
                    <span
                      aria-hidden
                      className="absolute inset-0 -z-10 rounded-full border border-white/10 bg-white/[0.06]"
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <div className="hidden items-center gap-1 lg:flex">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="grid h-9 w-9 place-items-center rounded-lg text-muted transition-colors duration-200 hover:bg-white/[0.06] hover:text-white"
            >
              <GithubIcon className="h-[1.05rem] w-[1.05rem]" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="grid h-9 w-9 place-items-center rounded-lg text-muted transition-colors duration-200 hover:bg-white/[0.06] hover:text-white"
            >
              <LinkedinIcon className="h-[1.05rem] w-[1.05rem]" />
            </a>
          </div>

          <Link
            href="/contact"
            onClick={closeMenu}
            className="btn btn-primary hidden px-5 py-2.5 text-sm sm:inline-flex"
          >
            Let&rsquo;s talk
          </Link>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.04] text-white md:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-white/[0.07] bg-ink-950/95 backdrop-blur-xl md:hidden"
      >
        <ul className="shell flex flex-col gap-1 py-5">
          {navLinks.map((link) => {
            const active = isActive(link.href);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  className={`flex items-center justify-between rounded-xl border px-4 py-3.5 text-[0.95rem] transition-colors duration-200 ${
                    active
                      ? "border-accent/35 bg-accent/10 text-white"
                      : "border-white/[0.07] bg-white/[0.02] text-muted"
                  }`}
                >
                  {link.label}
                  <span
                    aria-hidden
                    className={`h-1.5 w-1.5 rounded-full ${
                      active ? "bg-accent" : "bg-white/15"
                    }`}
                  />
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="shell flex items-center gap-3 pb-6">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-muted"
          >
            <GithubIcon className="h-4 w-4" /> GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-muted"
          >
            <LinkedinIcon className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}