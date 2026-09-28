"use client";

import { useState, type FormEvent } from "react";
import { footer } from "@/content/site";
import { PillButton, SmartLink } from "./ui";

const field =
  "w-full border-b border-line bg-transparent px-1 py-5 text-[13px] text-ink outline-none placeholder:text-muted/70 focus:border-ink transition-colors";

export function Footer() {
  const { contact } = footer;
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) throw new Error(json.error || "Something went wrong. Please try again.");
      form.reset();
      setStatus("sent");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  const buttonLabel =
    status === "sending" ? "Sending…" : status === "sent" ? "Thanks, we’ll be in touch" : contact.button;

  return (
    <footer className="px-4 pt-[104px] md:px-16">
      <div className="grid border-t border-line md:grid-cols-2">
        <div className="flex flex-col justify-between gap-16 pt-[70px] pb-16">
          <div className="grid grid-cols-3 gap-6 md:gap-0">
            {footer.columns.map((col) => (
              <div key={col.title}>
                <p className="text-[10px] leading-[13.5px] tracking-[0.08em] text-muted uppercase">{col.title}</p>
                <ul className="mt-6 space-y-4">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <SmartLink href={link.href} className="text-[13px] tracking-[-0.01em] hover:text-muted">
                        {link.label}
                      </SmartLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-[10px] tracking-[0.08em] text-muted">{footer.copyright}</p>
        </div>

        <div
          id="contact"
          className="scroll-mt-10 border-t border-line pt-14 pb-16 md:border-t-0 md:border-l md:pt-[70px] md:pl-12"
        >
          <p className="text-[10px] leading-[13.5px] tracking-[0.08em] text-muted uppercase">{contact.eyebrow}</p>
          <h2 className="mt-4 text-[40px] leading-[0.95] tracking-[-0.055em] md:text-[48px]">
            {contact.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h2>
          <p className="mt-5 text-[13px] leading-[1.5] text-muted">{contact.body}</p>

          <form onSubmit={onSubmit} className="mt-14">
            <input className={field} name="name" placeholder={contact.fields.name} maxLength={120} required />
            <input
              className={field}
              name="email"
              type="email"
              placeholder={contact.fields.email}
              maxLength={200}
              required
            />
            <textarea
              className={`${field} min-h-[88px] resize-y`}
              name="message"
              placeholder={contact.fields.message}
              maxLength={5000}
            />
            {/* Honeypot for bots; hidden from people and screen readers */}
            <input
              name="company"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              className="absolute -left-[9999px] h-0 w-0 opacity-0"
            />
            <div className={`mt-8 transition-opacity ${status === "sending" ? "pointer-events-none opacity-60" : ""}`}>
              <PillButton type="submit" tone="dark">
                {buttonLabel}
              </PillButton>
            </div>
          </form>
          <p
            className={`mt-6 text-[10px] tracking-[0.08em] ${status === "error" ? "text-[#b3261e]" : "text-muted"}`}
            role="status"
            aria-live="polite"
          >
            {status === "error" ? errorMsg : contact.note}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line py-6 text-[10px] tracking-[0.08em] text-muted">
        <span>{footer.tagline}</span>
        <div className="flex flex-wrap items-center justify-end gap-x-6 gap-y-2">
          {footer.legal.map((link) => (
            <SmartLink key={link.label} href={link.href} className="hover:text-ink">
              {link.label}
            </SmartLink>
          ))}
          <a href="#top" className="hover:text-ink">
            Back to top
          </a>
        </div>
      </div>
    </footer>
  );
}
