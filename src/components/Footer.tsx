import Image from "next/image";
import Link from "next/link";
import { navLinks, site, whatsappLink } from "@/lib/site";

function IconPhone() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.6a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.5-1.1a2 2 0 0 1 2.1-.4c.8.3 1.7.5 2.6.6a2 2 0 0 1 1.7 2z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="mt-auto">
      <div className="bg-[var(--grape-deep)] text-[var(--foam)]">
        <div className="mx-auto grid max-w-[74rem] gap-12 px-4 py-16 md:grid-cols-[1.2fr_0.8fr_0.9fr] md:px-6">
          <div>
            <p className="font-[family-name:var(--font-display)] text-3xl font-extrabold leading-none tracking-tight">
              {site.shortName}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">{site.description}</p>
            <a href={`tel:${site.phoneTel}`} className="mt-6 inline-flex items-center gap-2 text-lg font-bold text-[var(--star)]">
              <IconPhone />
              {site.phoneDisplay}
            </a>
          </div>

          <div>
            <p className="font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.2em] text-[var(--star)]">
              Sayfalar
            </p>
            <ul className="mt-4 space-y-2.5 text-sm text-white/85">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[var(--star)]">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/sss" className="hover:text-[var(--star)]">
                  SSS
                </Link>
              </li>
              <li>
                <Link href="/gizlilik" className="hover:text-[var(--star)]">
                  Gizlilik
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.2em] text-[var(--star)]">
              Ziyaret
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/85">{site.address.full}</p>
            <p className="mt-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.14em] text-white/55">
              {site.hours[0].days} · {site.classHours}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp">
                WhatsApp
              </a>
              <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[var(--star)]">
        <div className="mx-auto flex max-w-[74rem] flex-col items-start justify-between gap-3 px-4 py-3 text-sm font-semibold text-[var(--ink)] md:flex-row md:items-center md:px-6">
          <div>
            <p>
              © {new Date().getFullYear()} {site.name}
            </p>
            <p className="mt-1 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.16em]">
              {site.ageRange} · M.E.B · ISO 9001
            </p>
          </div>
          <a
            href="https://ekizyazilim.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-[10px] transition hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--grape)]"
          >
            <span className="font-[family-name:var(--font-mono)] text-[10px] font-medium uppercase tracking-[0.2em] text-[var(--ink)]">
              Powered by
            </span>
            <span className="inline-flex overflow-hidden rounded-[10px] bg-[var(--ink)]">
              <Image
                src="/ekiz-yazilim-watermark.png"
                alt="Ekiz Yazılım"
                width={2000}
                height={2000}
                className="h-12 w-auto md:h-14"
              />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
