import { describe, expect, it } from "vitest";
import { site, whatsappLink } from "./site";

const WA_BASE = `https://wa.me/${site.whatsapp}?text=`;
const DEFAULT_MESSAGE =
  "Merhaba, Lider Çocuklar Anaokulu hakkında bilgi almak istiyorum.";

describe("whatsappLink", () => {
  it("encodes the default message into wa.me", () => {
    expect(whatsappLink()).toBe(`${WA_BASE}${encodeURIComponent(DEFAULT_MESSAGE)}`);
  });

  it("encodes custom text into wa.me", () => {
    const text = "Merhaba, randevu almak istiyorum.";
    expect(whatsappLink(text)).toBe(`${WA_BASE}${encodeURIComponent(text)}`);
  });

  it("URL-encodes newlines and special characters", () => {
    const text = "Adım: Ayşe Yılmaz\nTelefon: 0507?x=1&y=2";
    const url = whatsappLink(text);

    expect(url.startsWith(WA_BASE)).toBe(true);
    expect(url).toBe(`${WA_BASE}${encodeURIComponent(text)}`);
    expect(url).not.toContain("\n");
    expect(url).not.toContain("Ayşe");
  });
});
