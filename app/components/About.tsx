import { CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#F8F9FB] py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-20 px-8 lg:grid-cols-2">

        {/* Linke Seite */}

        <div>

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#2E66B8]">
            Über Bühlmann Precision
          </p>

          <h2 className="text-4xl font-bold leading-tight text-[#0F2346] md:text-5xl">
            Präzision entsteht
            <br />
            nicht zufällig.
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Bühlmann Precision steht für hochwertige CNC-Fertigung und
            technischen 3D-Druck mit höchsten Qualitätsansprüchen.
            Jedes Projekt wird mit grosser Sorgfalt geplant und gefertigt –
            von der ersten Idee bis zum fertigen Bauteil.
          </p>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Moderne Fertigungstechnologien, präzises Arbeiten und der
            persönliche Kontakt zu unseren Kunden bilden die Grundlage
            unserer täglichen Arbeit.
          </p>

          <div className="mt-12 grid gap-5">

            <div className="group flex items-center gap-4 rounded-2xl border border-transparent bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#2E66B8] hover:shadow-xl">
              <CheckCircle2
                size={24}
                className="text-[#2E66B8]"
              />
              <span className="text-lg font-medium text-[#0F2346]">
                Persönliche Betreuung
              </span>
            </div>

            <div className="group flex items-center gap-4 rounded-2xl border border-transparent bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#2E66B8] hover:shadow-xl">
              <CheckCircle2
                size={24}
                className="text-[#2E66B8]"
              />
              <span className="text-lg font-medium text-[#0F2346]">
                Präzision bis ins Detail
              </span>
            </div>

            <div className="group flex items-center gap-4 rounded-2xl border border-transparent bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#2E66B8] hover:shadow-xl">
              <CheckCircle2
                size={24}
                className="text-[#2E66B8]"
              />
              <span className="text-lg font-medium text-[#0F2346]">
                Moderne Fertigungstechnologien
              </span>
            </div>

            <div className="group flex items-center gap-4 rounded-2xl border border-transparent bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#2E66B8] hover:shadow-xl">
              <CheckCircle2
                size={24}
                className="text-[#2E66B8]"
              />
              <span className="text-lg font-medium text-[#0F2346]">
                Schweizer Qualitätsanspruch
              </span>
            </div>

          </div>

        </div>

        {/* Rechte Seite */}

        <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm transition hover:shadow-xl">

          <div className="h-[600px] overflow-hidden">

            <img
              src="/ich.jpg"
              alt="Jarno Bühlmann"
              className="h-full w-full -translate-y-10 object-cover transition duration-500"
            />

          </div>

        </div>

      </div>
    </section>
  );
}