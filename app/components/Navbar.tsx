"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const OFFSET = 80; // <- Hier später den Abstand anpassen

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (!section) return;

    const y =
      section.getBoundingClientRect().top +
      window.pageYOffset -
      OFFSET;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setMenuOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">

        {/* Logo */}

        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="cursor-pointer"
        >
          <Image
            src="/logo.png"
            alt="Bühlmann Precision"
            width={165}
            height={46}
            priority
            className="transition duration-300 hover:opacity-90"
          />
        </button>

        {/* Desktop */}

        <nav className="hidden items-center gap-10 md:flex">

          <button
            onClick={() => scrollToSection("leistungen")}
            className="font-medium text-[#0F2346] transition hover:text-[#2E66B8]"
          >
            Leistungen
          </button>

          <button
            onClick={() => scrollToSection("maschinen")}
            className="font-medium text-[#0F2346] transition hover:text-[#2E66B8]"
          >
            Maschinen
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="font-medium text-[#0F2346] transition hover:text-[#2E66B8]"
          >
            Über BP
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="font-medium text-[#0F2346] transition hover:text-[#2E66B8]"
          >
            Kontakt
          </button>

        </nav>

        {/* Mobile Button */}

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-xl p-2 transition hover:bg-gray-100 md:hidden"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`overflow-hidden border-t border-gray-200 bg-white transition-all duration-300 md:hidden ${
          menuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-8 py-6">

          <button
            onClick={() => scrollToSection("leistungen")}
            className="border-b border-gray-100 py-4 text-left font-medium text-[#0F2346] transition hover:text-[#2E66B8]"
          >
            Leistungen
          </button>

          <button
            onClick={() => scrollToSection("maschinen")}
            className="border-b border-gray-100 py-4 text-left font-medium text-[#0F2346] transition hover:text-[#2E66B8]"
          >
            Maschinen
          </button>

          <button
            onClick={() => scrollToSection("about")}
            className="border-b border-gray-100 py-4 text-left font-medium text-[#0F2346] transition hover:text-[#2E66B8]"
          >
            Über BP
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="py-4 text-left font-medium text-[#0F2346] transition hover:text-[#2E66B8]"
          >
            Kontakt
          </button>

        </nav>
      </div>
    </header>
  );
}