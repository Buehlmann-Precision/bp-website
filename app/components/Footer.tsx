import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0F2346] text-white">

      <div className="mx-auto max-w-7xl px-8 py-20">

        {/* Logo */}

        <div className="flex items-center justify-center gap-8">

          <div className="h-[2px] flex-1 bg-white/20"></div>

          <Image
            src="/logo.png"
            alt="Bühlmann Precision"
            width={320}
            height={90}
            className="rounded-lg bg-white px-6 py-4 shadow-lg"
          />

          <div className="h-[2px] flex-1 bg-white/20"></div>

        </div>

        {/* Inhalt */}

        <div className="mt-20 grid gap-16 md:grid-cols-3">

          {/* Firma */}

          <div>

            <h3 className="mb-6 text-2xl font-bold">
              Bühlmann Precision
            </h3>

            <p className="leading-8 text-white/70">
              Schweizer CNC-Fertigung und technischer 3D-Druck
              für hochwertige Einzelteile, Prototypen
              und Sonderanfertigungen.
            </p>

          </div>

          {/* Navigation */}

          <div>

            <h3 className="mb-6 text-2xl font-bold">
              Navigation
            </h3>

            <div className="flex flex-col gap-4 text-white/70">

              <a
                href="#leistungen"
                className="transition hover:text-white"
              >
                Leistungen
              </a>

              <a
                href="#maschinen"
                className="transition hover:text-white"
              >
                Maschinen
              </a>

              <a
                href="#about"
                className="transition hover:text-white"
              >
                Über BP
              </a>

              <a
                href="#contact"
                className="transition hover:text-white"
              >
                Kontakt
              </a>

            </div>

          </div>

          {/* Kontakt */}

          <div>

            <h3 className="mb-6 text-2xl font-bold">
              Kontakt
            </h3>

            <div className="space-y-4 leading-7 text-white/70">

              <p>
                J.-H.-Pestalozziallee 68
                <br />
                2503 Biel/Bienne
              </p>

              <p>
                +41 78 814 78 94
              </p>

              <p>
                suppajeator@gmail.com
              </p>

            </div>

          </div>

        </div>

        {/* Linie */}

        <div className="my-14 h-px bg-white/10"></div>

        {/* Copyright */}

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-white/50 md:flex-row">

          <p>
            © {new Date().getFullYear()} Bühlmann Precision.
            Alle Rechte vorbehalten.
          </p>

          <div className="flex items-center gap-6">

            <Link
              href="/impressum"
              className="transition hover:text-white"
            >
              Impressum
            </Link>

            <Link
              href="/datenschutz"
              className="transition hover:text-white"
            >
              Datenschutz
            </Link>

            <span>
              Präzision beginnt im Detail.
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}