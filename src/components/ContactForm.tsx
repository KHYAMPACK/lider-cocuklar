"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { whatsappLink } from "@/lib/site";

type FieldErrors = {
  name?: string;
  phone?: string;
};

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent" | "blocked">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [fallbackHref, setFallbackHref] = useState<string | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const childAge = String(data.get("childAge") || "").trim();
    const message = String(data.get("message") || "").trim();

    const nextErrors: FieldErrors = {};
    if (!name) nextErrors.name = "Adınızı yazın.";
    if (!phone) nextErrors.phone = "Telefon numaranızı yazın.";

    if (nextErrors.name || nextErrors.phone) {
      setErrors(nextErrors);
      setStatus("idle");
      setFallbackHref(null);
      return;
    }

    setErrors({});

    const text = [
      "Merhaba, web sitesinden yazıyorum.",
      `Adım: ${name}`,
      `Telefon: ${phone}`,
      childAge ? `Çocuk yaşı: ${childAge}` : null,
      message ? `Mesaj: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    const href = whatsappLink(text);
    const popup = window.open(href, "_blank");
    if (!popup) {
      setFallbackHref(href);
      setStatus("blocked");
      return;
    }
    popup.opener = null;
    setFallbackHref(null);
    setStatus("sent");
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm font-semibold text-[var(--ink)]">
          Adınız
          <input
            name="name"
            required
            autoComplete="name"
            aria-invalid={errors.name ? true : undefined}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className="mt-1.5 w-full rounded-[14px] border border-[var(--line)] bg-[var(--paper)] px-4 py-3 text-base font-normal outline-none ring-[var(--grape)] focus-visible:ring-2"
            placeholder="Ad Soyad"
          />
          {errors.name ? (
            <p id="contact-name-error" role="alert" className="mt-1.5 text-sm font-medium text-[var(--coral)]">
              {errors.name}
            </p>
          ) : null}
        </label>
        <label className="block text-sm font-semibold text-[var(--ink)]">
          Telefon
          <input
            name="phone"
            required
            type="tel"
            autoComplete="tel"
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? "contact-phone-error" : undefined}
            className="mt-1.5 w-full rounded-[14px] border border-[var(--line)] bg-[var(--paper)] px-4 py-3 text-base font-normal outline-none ring-[var(--grape)] focus-visible:ring-2"
            placeholder="05xx xxx xx xx"
          />
          {errors.phone ? (
            <p id="contact-phone-error" role="alert" className="mt-1.5 text-sm font-medium text-[var(--coral)]">
              {errors.phone}
            </p>
          ) : null}
        </label>
      </div>
      <label className="block text-sm font-semibold text-[var(--ink)]">
        Çocuğunuzun yaşı
        <input
          name="childAge"
          className="mt-1.5 w-full rounded-[14px] border border-[var(--line)] bg-[var(--paper)] px-4 py-3 text-base font-normal outline-none ring-[var(--grape)] focus-visible:ring-2"
          placeholder="Örn. 4"
        />
      </label>
      <label className="block text-sm font-semibold text-[var(--ink)]">
        Mesajınız
        <textarea
          name="message"
          rows={4}
          className="mt-1.5 w-full resize-y rounded-[14px] border border-[var(--line)] bg-[var(--paper)] px-4 py-3 text-base font-normal outline-none ring-[var(--grape)] focus-visible:ring-2"
          placeholder="Gezi randevusu, kontenjan veya program hakkında yazabilirsiniz."
        />
      </label>
      <button type="submit" className="btn btn-primary w-full sm:w-auto">
        WhatsApp ile gönder
      </button>
      <p className="text-sm text-[var(--muted)]">
        Kişisel veriler{" "}
        <Link href="/gizlilik" className="font-semibold text-[var(--grape)] hover:text-[var(--blush)]">
          gizlilik metnine
        </Link>{" "}
        göre WhatsApp üzerinden iletilir.
      </p>
      {status === "sent" ? (
        <p className="rounded-2xl bg-[var(--mint-soft)] px-4 py-3 text-sm font-medium text-[var(--mint-deep)]" role="status">
          WhatsApp açıldı.
        </p>
      ) : null}
      {status === "blocked" && fallbackHref ? (
        <p className="rounded-2xl bg-[var(--pink-soft)] px-4 py-3 text-sm font-medium text-[var(--pink-deep)]" role="alert">
          WhatsApp açılamadı.{" "}
          <a href={fallbackHref} target="_blank" rel="noopener noreferrer" className="font-bold underline">
            wa.me üzerinden açın
          </a>{" "}
          veya yandaki WhatsApp / telefon butonunu kullanın.
        </p>
      ) : null}
    </form>
  );
}
