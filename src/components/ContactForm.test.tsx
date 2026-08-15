import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ContactForm } from "./ContactForm";

function fillRequiredFields() {
  fireEvent.change(screen.getByLabelText("Adınız"), {
    target: { value: "Ayşe Yılmaz" },
  });
  fireEvent.change(screen.getByLabelText("Telefon"), {
    target: { value: "05071234567" },
  });
}

describe("ContactForm", () => {
  beforeEach(() => {
    vi.spyOn(window, "open").mockReturnValue({
      closed: false,
      opener: {},
    } as Window);
  });

  afterEach(() => {
    cleanup();
    vi.restoreAllMocks();
  });

  it("does not claim success on empty submit", () => {
    const { container } = render(<ContactForm />);
    fireEvent.submit(container.querySelector("form")!);

    expect(window.open).not.toHaveBeenCalled();
    expect(screen.queryByText(/whatsapp açıldı/i)).toBeNull();
    expect(screen.getAllByRole("alert").length).toBeGreaterThan(0);
  });

  it("opens WhatsApp when name and phone are valid", () => {
    const { container } = render(<ContactForm />);
    fillRequiredFields();
    fireEvent.submit(container.querySelector("form")!);

    expect(window.open).toHaveBeenCalled();
    const url = String(vi.mocked(window.open).mock.calls[0]?.[0]);
    expect(url.startsWith("https://wa.me/905072453746?text=")).toBe(true);
    expect(url).toContain(encodeURIComponent("Ayşe Yılmaz"));
    expect(url).toContain(encodeURIComponent("05071234567"));
  });

  it("does not claim success when the popup is blocked", () => {
    vi.mocked(window.open).mockReturnValue(null);
    const { container } = render(<ContactForm />);
    fillRequiredFields();
    fireEvent.submit(container.querySelector("form")!);

    expect(window.open).toHaveBeenCalled();
    expect(screen.queryByText(/whatsapp açıldı/i)).toBeNull();
  });
});
