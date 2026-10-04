import type { Metadata } from "next";

import ContactForm from "@/components/ContactForm";
import { GithubIcon, LinkedinIcon, MailIcon } from "@/components/Icons";
import Reveal from "@/components/Reveal";
import { profile } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Nagina Azhar by email, LinkedIn or GitHub â€” available for web development, AI and automation projects.",
};

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: profile.emailHref,
    hint: "Best for project briefs and detailed questions",
    icon: MailIcon,
  },
  {
    label: "LinkedIn",
    value: "Nagina Azhar",
    href: profile.linkedin,
    hint: "Professional profile and networking",
    icon: LinkedinIcon,
  },
  {
    label: "GitHub",
    value: "nagina56",
    href: profile.github,
    hint: "Code, experiments and project repositories",
    icon: GithubIcon,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ================= HEADER ================= */}
      <section className="shell pb-12 pt-14 sm:pb-14 sm:pt-20 lg:pt-24">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow">
              <span aria-hidden className="mr-2 text-accent">
                /
              </span>
              Contact
            </p>
          </Reveal>
          <Reveal delay={60}>
            <h1 className="mt-5 text-balance font-display text-4xl font-semibold leading-[1.08] tracking-tight text-gradient sm:text-5xl lg:text-[3.4rem]">
              Let&rsquo;s talk about your project.
            </h1>
          </Reveal>
          <Reveal delay={110}>
            <p className="mt-7 text-pretty text-lg leading-relaxed text-muted">
              Send a short message, or reach out directly on whichever channel
              suits you. I read everything and reply with an honest take on
              what&rsquo;s doable &mdash; even if that means telling you it
              isn&rsquo;t a fit.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ================= FORM + CHANNELS ================= */}
      <section className="shell pb-24 sm:pb-32">
        <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr] lg:gap-8">
          {/* Form */}
          <Reveal className="min-w-0">
            <ContactForm />
          </Reveal>

          {/* Channels */}
          <div className="flex min-w-0 flex-col gap-4">
            {channels.map((channel, index) => {
              const Icon = channel.icon;
              return (
                <Reveal key={channel.label} delay={90 + index * 70}>
                  <a
                    href={channel.href}
                    target={channel.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={
                      channel.href.startsWith("mailto:")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="glass group flex items-start gap-4 rounded-3xl p-5 transition-[transform,border-color] duration-500 hover:-translate-y-1 hover:border-accent/30 sm:p-6"
                  >
                    <span className="inline-grid h-11 w-11 shrink-0 place-items-center rounded-2xl border border-white/[0.09] bg-gradient-to-br from-white/[0.09] to-transparent text-accent transition-transform duration-500 group-hover:scale-105">
                      <Icon className="h-[1.15rem] w-[1.15rem]" />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block font-mono text-[0.75rem] uppercase tracking-[0.16em] text-faint">
                        {channel.label}
                      </span>
                      <span className="mt-1.5 block break-all font-display text-[1rem] font-semibold tracking-tight text-white">
                        {channel.value}
                      </span>
                      <span className="mt-1.5 block text-[0.85rem] leading-relaxed text-muted">
                        {channel.hint}
                      </span>
                    </span>
                  </a>
                </Reveal>
              );
            })}

            <Reveal delay={320}>
              <div className="glass rounded-3xl p-6">
                <p className="eyebrow">Good to know</p>
                <ul className="mt-5 space-y-3.5">
                  {[
                    "Include a rough timeline and budget range if you have one.",
                    "A brief or reference site is genuinely useful.",
                    "Small, well-defined projects are welcome too.",
                  ].map((item) => (
                    <li key={item} className="flex gap-3 text-[0.88rem] leading-relaxed text-muted">
                      <span
                        aria-hidden
                        className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full bg-accent"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}