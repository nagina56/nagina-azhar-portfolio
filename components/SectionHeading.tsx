import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={`${centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"} ${className}`}
    >
      {eyebrow && (
        <p className={`eyebrow ${centered ? "" : "pl-px"}`}>
          <span aria-hidden className="mr-2 text-accent">
            /
          </span>
          {eyebrow}
        </p>
      )}
      <h2 className="mt-4 text-balance font-display text-3xl font-semibold leading-[1.12] tracking-tight text-gradient-soft sm:text-4xl lg:text-[2.7rem]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-pretty text-[0.98rem] leading-relaxed text-muted sm:text-base">
          {description}
        </p>
      )}
    </div>
  );
}