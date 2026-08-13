"use client";

import { FormEvent, useState } from "react";
import { whatsappLink } from "@/lib/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const childAge = String(data.get("childAge") || "").trim();
    const message = String(data.get("message") || "").trim();

    const text = [
      "Merhaba, web sitesinden yazıyorum.",
      name ? `Adım: ${name}` : null,
      phone ? `Telefon: ${phone}` : null,
      childAge ? `Çocuk yaşı: ${childAge}` : null,
      message ? `Mesaj: ${message}` : null,
    ]
      .filter(Boolean)
      .join("\n");

    window.open(whatsappLink(text), "_blank", "noopener,noreferrer");
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
            className="mt-1.5 w-full rounded-[14px] border border-[var(--line)] bg-[var(--paper)] px-4 py-3 text-base font-normal outline-none ring-[var(--grape)] focus:ring-2"
            placeholder="Ad Soyad"
          />
        </label>
        <label className="block text-sm font-semibold text-[var(--ink)]">
          Telefon
          <input
            name="phone"
            required
            type="tel"
            autoComplete="tel"
            className="mt-1.5 w-full rounded-[14px] border border-[var(--line)] bg-[var(--paper)] px-4 py-3 text-base font-normal outline-none ring-[var(--grape)] focus:ring-2"
            placeholder="05xx xxx xx xx"
          />
        </label>
      </div>
      <label className="block text-sm font-semibold text-[var(--ink)]">
        Çocuğunuzun yaşı
        <input
          name="childAge"
          className="mt-1.5 w-full rounded-[14px] border border-[var(--line)] bg-[var(--paper)] px-4 py-3 text-base font-normal outline-none ring-[var(--grape)] focus:ring-2"
          placeholder="Örn. 4"
        />
      </label>
      <label className="block text-sm font-semibold text-[var(--ink)]">
        Mesajınız
        <textarea
          name="message"
          rows={4}
          className="mt-1.5 w-full resize-y rounded-[14px] border border-[var(--line)] bg-[var(--paper)] px-4 py-3 text-base font-normal outline-none ring-[var(--grape)] focus:ring-2"
          placeholder="Gezi randevusu, kontenjan veya program hakkında yazabilirsiniz."
        />
      </label>
      <button type="submit" className="btn btn-primary w-full sm:w-auto">
        WhatsApp ile gönder
      </button>
      {status === "sent" ? (
        <p className="rounded-2xl bg-[var(--mint-soft)] px-4 py-3 text-sm font-medium text-[var(--mint-deep)]" role="status">
          WhatsApp açıldı.
        </p>
      ) : null}
    </form>
  );
}
