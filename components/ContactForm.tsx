"use client";

import { useState, type FormEvent } from "react";

import { ArrowUpRightIcon, CheckIcon, MailIcon } from "@/components/Icons";
import { profile } from "@/lib/site";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function validate(values: { name: string; email: string; message: string }): Errors {
  const errors: Errors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  } else if (values.name.trim().length < 2) {
    errors.name = "Please enter at least 2 characters.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Please write a short message.";
  } else if (values.message.trim().length < 10) {
    errors.message = "Please add a little more detail (10 characters minimum).";
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  const setField = (field: keyof typeof values, value: string) => {
    const next = { ...values, [field]: value };
    setValues(next);
    if (touched[field]) {
      setErrors(validate(next));
    }
  };

  const handleBlur = (field: keyof typeof values) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setErrors(validate(values));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    setTouched({ name: true, email: true, message: true });

    if (Object.keys(nextErrors).length > 0) {
      // Move focus to the first field that needs attention.
      const firstField = (["name", "email", "message"] as const).find(
        (field) => nextErrors[field],
      );
      if (firstField) {
        document.getElementById(firstField)?.focus();
      }
      return;
    }

    // Hand the message to the visitor's email client with everything
    // pre-filled, so it reaches Nagina's inbox without a backend.
    const subject = `Portfolio enquiry from ${values.name.trim()}`;
    const body = `${values.message.trim()}\n\nâ€”\nFrom: ${values.name.trim()}\nEmail: ${values.email.trim()}`;
    const href = `mailto:${profile.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = href;
    setStatus("sent");
  };

  const fieldClass = (field: keyof typeof values) =>
    `field ${errors[field] && touched[field] ? "border-red-400/60" : ""}`;

  if (status === "sent") {
    return (
      <div
        role="status"
        className="glass flex flex-col items-start gap-4 rounded-4xl p-8 sm:p-10"
      >
        <span className="grid h-12 w-12 place-items-center rounded-2xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-300">
          <CheckIcon className="h-6 w-6" />
        </span>
        <h3 className="font-display text-xl font-semibold text-white">
          Your email client should be open
        </h3>
        <p className="text-sm leading-relaxed text-muted">
          Your message has been prepared and addressed to{" "}
          <span className="text-white">{profile.email}</span>. Send it from
          there and I&rsquo;ll get back to you. If nothing opened, email me
          directly at that address.
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setValues({ name: "", email: "", message: "" });
            setTouched({});
            setErrors({});
          }}
          className="btn btn-ghost mt-1 px-5 py-2.5 text-sm"
        >
          Write another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="glass rounded-4xl p-6 sm:p-8"
    >
      <div className="flex flex-col gap-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label
              htmlFor="name"
              className="mb-2.5 block font-mono text-[0.78rem] uppercase tracking-[0.16em] text-faint"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              value={values.name}
              onChange={(event) => setField("name", event.target.value)}
              onBlur={() => handleBlur("name")}
              aria-invalid={Boolean(errors.name && touched.name)}
              aria-describedby={errors.name && touched.name ? "name-error" : undefined}
              className={fieldClass("name")}
            />
            {errors.name && touched.name && (
              <p id="name-error" className="mt-2 text-xs text-red-300">
                {errors.name}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-2.5 block font-mono text-[0.78rem] uppercase tracking-[0.16em] text-faint"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@company.com"
              value={values.email}
              onChange={(event) => setField("email", event.target.value)}
              onBlur={() => handleBlur("email")}
              aria-invalid={Boolean(errors.email && touched.email)}
              aria-describedby={
                errors.email && touched.email ? "email-error" : undefined
              }
              className={fieldClass("email")}
            />
            {errors.email && touched.email && (
              <p id="email-error" className="mt-2 text-xs text-red-300">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div>
          <label
            htmlFor="message"
            className="mb-2.5 block font-mono text-[0.78rem] uppercase tracking-[0.16em] text-faint"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Tell me about your project, what you need and your timeline."
            value={values.message}
            onChange={(event) => setField("message", event.target.value)}
            onBlur={() => handleBlur("message")}
            aria-invalid={Boolean(errors.message && touched.message)}
            aria-describedby={
              errors.message && touched.message ? "message-error" : undefined
            }
            className={`${fieldClass("message")} resize-y`}
          />
          {errors.message && touched.message && (
            <p id="message-error" className="mt-2 text-xs text-red-300">
              {errors.message}
            </p>
          )}
        </div>

        <button type="submit" className="btn btn-primary w-full px-6 py-3.5 sm:w-auto sm:self-start">
          Send message
          <ArrowUpRightIcon className="h-4 w-4" />
        </button>

        <p className="flex items-start gap-2.5 text-xs leading-relaxed text-faint">
          <MailIcon className="mt-px h-3.5 w-3.5 shrink-0" />
          Submitting opens your own email app with the message pre-filled and
          addressed to {profile.email} â€” nothing is stored on this site.
        </p>
      </div>
    </form>
  );
}