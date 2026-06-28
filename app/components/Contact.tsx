"use client";

import { useState } from "react";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const [status, setStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);
    setStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus("success");

        setForm({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }

    setLoading(false);
  }

  return (
    <section
      id="contact"
      className="bg-white py-32"
    >
      <div className="mx-auto max-w-7xl px-8">

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#2E66B8]">
          Kontakt
        </p>

        <h2 className="text-4xl font-bold leading-tight text-[#0F2346] md:text-5xl">
          Lassen Sie uns
          <br />
          über Ihr Projekt sprechen.
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
          Ob Einzelteil, Prototyp oder Kleinserie –
          wir freuen uns auf Ihre Anfrage und beraten Sie gerne persönlich.
        </p>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          {/* Kontakt */}

          <div className="space-y-8">

            <div className="rounded-3xl border border-gray-200 bg-[#F8F9FB] p-8 shadow-sm">

              <h3 className="mb-8 text-2xl font-bold text-[#0F2346]">
                Kontaktinformationen
              </h3>

              <div className="space-y-8">

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2E66B8]">
                    E-Mail
                  </p>

                  <p className="mt-2 break-all text-lg text-[#0F2346]">
                    suppajeator@gmail.com
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2E66B8]">
                    Telefon
                  </p>

                  <p className="mt-2 text-lg text-[#0F2346]">
                    +41 78 814 78 94
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#2E66B8]">
                    Standort
                  </p>

                  <p className="mt-2 text-lg text-[#0F2346]">
                    Biel/Bienne, Schweiz
                  </p>
                </div>

              </div>

            </div>

          </div>

          {/* Formular */}

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm md:p-10"
          >

            <div className="grid gap-7">

              <input
                required
                placeholder="Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
                className="rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-[#2E66B8]"
              />

              <input
                required
                type="email"
                placeholder="E-Mail"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
                className="rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-[#2E66B8]"
              />

              <input
                required
                placeholder="Betreff"
                value={form.subject}
                onChange={(e) =>
                  setForm({ ...form, subject: e.target.value })
                }
                className="rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-[#2E66B8]"
              />

              <textarea
                required
                rows={6}
                placeholder="Nachricht"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
                className="rounded-xl border border-gray-300 px-5 py-4 outline-none transition focus:border-[#2E66B8]"
              />

              <button
                type="submit"
                disabled={loading}
                className="rounded-xl bg-[#0F2346] py-4 text-lg font-semibold text-white transition hover:bg-[#2E66B8] disabled:opacity-70"
              >
                {loading ? "Wird gesendet..." : "Anfrage senden"}
              </button>

              {status === "success" && (
                <div className="rounded-xl border border-green-200 bg-green-50 px-5 py-4 text-green-700">
                  ✅ Vielen Dank! Ihre Anfrage wurde erfolgreich gesendet.
                </div>
              )}

              {status === "error" && (
                <div className="rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-red-700">
                  ❌ Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.
                </div>
              )}

            </div>

          </form>

        </div>

      </div>
    </section>
  );
}