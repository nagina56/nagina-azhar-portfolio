/**
 * Fixed decorative background.
 *
 * Built as a stack of low-contrast layers so the page reads as deep,
 * textured charcoal rather than a flat fill, while the copy and the
 * profile photo stay the brightest things on screen:
 *
 *   1. layered charcoal base   2. coarse + fine grid   3. gradient glows
 *   4. horizon light band      5. diagonal streaks     6. film grain
 *   7. vignette                8. nav surface
 *
 * Purely presentational, non-interactive and hidden from assistive tech.
 */
export default function Backdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* 1. Layered charcoal base */}
      <div className="bg-charcoal absolute inset-0" />

      {/* 2. Geometric line work, densest behind the hero */}
      <div className="mask-hero absolute inset-0">
        <div className="bg-grid-macro absolute inset-0 opacity-60" />
        <div className="bg-grid absolute inset-0 opacity-70" />
      </div>
      <div className="bg-grid mask-fade-y absolute inset-0 opacity-30" />

      {/* 3. Soft blue / violet glows drifting slowly behind the content */}
      <div className="mask-fade-y absolute inset-0">
        <div className="glow-blue animate-drift absolute -left-[16%] -top-[20%] h-[42rem] w-[42rem] rounded-full" />
        <div className="glow-violet animate-drift-reverse absolute -right-[14%] top-[6%] h-[38rem] w-[38rem] rounded-full" />
        <div className="glow-indigo animate-drift absolute -bottom-[22%] left-[24%] h-[36rem] w-[36rem] rounded-full [animation-delay:-8s]" />
      </div>

      {/* 4. One wide, heavily blurred horizon band low on the page */}
      <div className="bg-horizon absolute inset-x-0 bottom-[18%] h-32 blur-2xl opacity-70" />

      {/* 5. Diagonal light streaks */}
      <div className="absolute inset-0">
        <div className="bg-streaks absolute inset-0" />
      </div>

      {/* 6. Film grain */}
      <div className="bg-grain absolute inset-0 opacity-[0.022]" />

      {/* 7. Vignette for depth */}
      <div className="bg-vignette absolute inset-0" />

      {/* 8. Top vignette so the sticky nav sits on a clean surface */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink-950/70 to-transparent" />
    </div>
  );
}