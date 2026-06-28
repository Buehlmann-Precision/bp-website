import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-[#F8FAFD] to-[#EEF4FB]">

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center px-8 lg:flex-row">

        {/* Linke Seite */}

        <div className="w-full py-20 lg:w-1/2 lg:py-0">

          <Image
            src="/logo.png"
            alt="Bühlmann Precision"
            width={260}
            height={70}
            priority
            className="mb-12"
          />

          <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-[#2E66B8]">
            FEHLER 404
          </p>

          <h1 className="text-5xl font-bold leading-tight text-[#0F2346] sm:text-6xl lg:text-7xl">
            Diese Seite
            <br />
            existiert nicht.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-700">
            Die gewünschte Seite konnte leider nicht gefunden werden.
            Möglicherweise wurde sie verschoben oder der Link ist
            nicht mehr verwendet.
          </p>

          <div className="mt-12">

            <Link
              href="/"
              className="inline-flex rounded-xl bg-[#0F2346] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#2E66B8] hover:shadow-xl"
            >
              Zur Homepage
            </Link>

          </div>

        </div>

        {/* Rechte Seite */}

        <div className="flex w-full items-center justify-center pb-16 lg:w-1/2 lg:pb-0">

          <div className="group rounded-3xl border border-[#2E66B8]/15 bg-white p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-[#2E66B8]/40 hover:shadow-2xl">

            <Image
              src="/mh.png"
              alt="Gefrästes Matterhorn"
              width={520}
              height={520}
              priority
              className="transition-transform duration-500 group-hover:scale-105"
            />

          </div>

        </div>

      </div>

    </main>
  );
}