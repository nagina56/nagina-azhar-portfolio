import Link from "next/link";

import { ArrowRightIcon } from "@/components/Icons";
import { navLinks } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-mono text-[0.75rem] uppercase tracking-[0.2em] text-accent">
        Error 404
      </p>
      <h1 className="mt-6 text-balance font-display text-4xl font-semibold leading-tight tracking-tight text-gradient-soft sm:text-5xl">
        That page isn&rsquo;t here.
      </h1>
      <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted">
        The link may be out of date, or the page may have moved. Here&rsquo;s
        where everything lives.
      </p>

      <ul className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="btn btn-ghost px-5 py-2.5 text-sm">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link href="/" className="btn btn-primary mt-8 px-6 py-3">
        Back to home
        <ArrowRightIcon className="h-4 w-4" />
      </Link>
    </section>
  );
}