"use client";

import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [open, setOpen] = useState(false);

  const scrollToContact = () => {
    const section = document.getElementById("contact");

    if (!section) return;

    const offset = 10;

    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset +
      offset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#F8FAFD] to-[#EEF4FB] pt-20">
        <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center px-8 lg:flex-row">

          {/* Linke Seite */}

          <div className="w-full py-20 lg:w-1/2 lg:py-0">

            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-[#2E66B8]">
              SCHWEIZER QUALITÄT
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight text-[#0F2346] sm:text-6xl lg:text-7xl">
              Präzision
              <br />
              beginnt im Detail.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-gray-700">
              Schweizer CNC-Fertigung und technischer 3D-Druck
              für hochwertige Einzelteile, Prototypen und
              Sonderanfertigungen.
            </p>

            <div className="mt-12 flex flex-col gap-5 sm:flex-row">

              <button
                onClick={scrollToContact}
                className="rounded-xl bg-[#0F2346] px-8 py-4 text-center font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#2E66B8]"
              >
                Offerte anfragen
              </button>

              <a
                href="#leistungen"
                className="rounded-xl border border-[#0F2346] px-8 py-4 text-center font-semibold text-[#0F2346] transition-all duration-300 hover:bg-[#0F2346] hover:text-white"
              >
                Leistungen
              </a>

            </div>

          </div>

          {/* Rechte Seite */}

          <div className="flex w-full items-center justify-center pb-16 lg:w-1/2 lg:pb-0">

            <button
              onClick={() => setOpen(true)}
              className="
                group
                rounded-3xl
                border
                border-gray-200
                bg-white
                p-8
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[#2E66B8]
                hover:shadow-xl
              "
            >

              <div className="relative h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] lg:h-[520px] lg:w-[520px]">

                <Image
                  src="/mh.png"
                  alt="Gefrästes Matterhorn"
                  fill
                  priority
                  className="object-contain transition-transform duration-300 group-hover:scale-105"
                />

              </div>

            </button>

          </div>

        </div>
      </section>

      {/* Lightbox */}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-8 backdrop-blur-sm"
        >

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative"
          >

            <button
              onClick={() => setOpen(false)}
              className="absolute -right-5 -top-5 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-3xl shadow-xl transition hover:bg-[#0F2346] hover:text-white"
            >
              ×
            </button>

            <Image
              src="/mh.png"
              alt="Gefrästes Matterhorn"
              width={1400}
              height={1400}
              priority
              className="max-h-[85vh] w-auto rounded-3xl object-contain"
            />

          </div>

        </div>
      )}
    </>
  );
}