import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Sora } from "next/font/google";

import Backdrop from "@/components/Backdrop";
import SiteFooter from "@/components/SiteFooter";
import SiteNavbar from "@/components/SiteNavbar";
import { profile } from "@/lib/site";

import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono-jb",
  display: "swap",
  weight: ["400", "500"],
});

// Absolute URLs (canonical, Open Graph, social cards) need a real origin.
// Falls back to the dev server so nothing invented is ever published; set
// NEXT_PUBLIC_SITE_URL in the deployment environment to the live domain.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.title}`,
    template: `%s — ${profile.name}`,
  },
  description:
    "Nagina Azhar is a Python Developer, AI & Web Developer and AI Automation enthusiast building modern websites and practical AI-powered solutions.",
  keywords: [
    "Nagina Azhar",
    "Python Developer",
    "AI Developer",
    "Web Developer",
    "AI Automation",
    "API Integration",
  ],
  authors: [{ name: profile.name, url: "https://github.com/nagina56" }],
  creator: profile.name,
  openGraph: {
    type: "website",
    title: `${profile.name} — ${profile.title}`,
    description:
      "Modern websites and practical AI-powered solutions that turn ideas into simple, useful digital experiences.",
    // Image supplied by app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.title}`,
    description:
      "Modern websites and practical AI-powered solutions that turn ideas into simple, useful digital experiences.",
    // Image supplied by app/twitter-image.tsx
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0b11",
  colorScheme: "dark",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "Python Developer | AI & Web Developer | AI Automation",
  description: profile.intro,
  image: `${profile.photo}`,
  email: `mailto:${profile.email}`,
  sameAs: [profile.linkedin, profile.github],
  knowsAbout: [
    "Python",
    "Web Development",
    "Artificial Intelligence",
    "Machine Learning",
    "AI Automation",
    "API Integration",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <body className="flex min-h-dvh flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />

        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-xl focus:bg-accent focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to content
        </a>

        <Backdrop />
        <SiteNavbar />

        <main id="main" className="flex-1">
          {children}
        </main>

        <SiteFooter />
      </body>
    </html>
  );
}