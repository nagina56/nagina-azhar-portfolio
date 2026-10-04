import Image from "next/image";

import { profile } from "@/lib/site";

type ProfilePhotoProps = {
  /** Overall pixel size of the square frame. */
  size?: number;
  priority?: boolean;
  className?: string;
};

/**
 * Nagina Azhar's profile photo in a circular frame.
 *
 * The photograph is served exactly as uploaded — no filters, no colour
 * grading, no retouching. Only the framing, ring and glow around it are styled.
 */
export default function ProfilePhoto({
  size = 260,
  priority = false,
  className = "",
}: ProfilePhotoProps) {
  return (
    <div
      className={`relative aspect-square ${className}`}
      style={{
        // Never wider than the viewport minus the page gutter, so the
        // decorative rings around it cannot bleed off-screen.
        width: `min(${size}px, calc(100vw - 3.5rem))`,
      }}
    >
      {/* Soft ambient glow */}
      <div
        aria-hidden
        className="absolute -inset-8 rounded-full bg-[radial-gradient(circle_at_50%_45%,rgba(109,139,255,0.28),rgba(168,85,247,0.16)_45%,transparent_70%)] blur-2xl"
      />

      {/* Slow orbiting ring */}
      <div
        aria-hidden
        className="absolute -inset-3 animate-[spin_44s_linear_infinite] rounded-full border border-dashed border-white/[0.10]"
      />
      <div
        aria-hidden
        className="absolute -inset-[1.15rem] hidden animate-[spin_60s_linear_infinite_reverse] rounded-full border border-white/[0.05] sm:block"
      />

      {/* Gradient frame */}
      <div
        aria-hidden
        className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/70 via-accent/25 to-violet/60 p-px"
      >
        <div className="h-full w-full rounded-full bg-ink-900" />
      </div>

      {/* The photograph */}
      <div className="relative h-full w-full overflow-hidden rounded-full">
        <Image
          src={profile.photo}
          alt={profile.photoAlt}
          fill
          priority={priority}
          sizes={`${size}px`}
          className="object-cover"
        />
      </div>
    </div>
  );
}