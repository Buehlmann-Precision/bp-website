import {
  Cog,
  Printer,
  Ruler,
  Target,
} from "lucide-react";

export default function Leistungen() {
  return (
    <section
      id="leistungen"
      className="bg-[#F8F9FB] py-32"
    >
      <div className="mx-auto max-w-7xl px-8">

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#2E66B8]">
          Leistungen
        </p>

        <h2 className="mb-8 text-4xl font-bold leading-tight text-[#0F2346] md:text-5xl">
          Präzisionsfertigung
          <br />
          aus einer Hand.
        </h2>

        <p className="mb-20 max-w-2xl text-lg leading-8 text-gray-600">
          Von der ersten Idee über Konstruktion und Programmierung bis zum
          fertigen Präzisionsteil. Persönlich, flexibel und zuverlässig.
        </p>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {/* CNC */}

          <div className="group flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#2E66B8] hover:shadow-xl">

            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4FB] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#2E66B8]">

              <Cog
                size={32}
                strokeWidth={1.8}
                className="text-[#2E66B8] transition-all duration-300 group-hover:text-white"
              />

            </div>

            <h3 className="mb-5 text-2xl font-bold text-[#0F2346]">
              CNC-Fertigung
            </h3>

            <p className="flex-grow leading-8 text-gray-600">
              Hochpräzise Einzelteile,
              Prototypen und Kleinserien
              in höchster Qualität.
            </p>

          </div>

          {/* CAD */}

          <div className="group flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#2E66B8] hover:shadow-xl">

            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4FB] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#2E66B8]">

              <Ruler
                size={32}
                strokeWidth={1.8}
                className="text-[#2E66B8] transition-all duration-300 group-hover:text-white"
              />

            </div>

            <h3 className="mb-5 text-2xl font-bold text-[#0F2346]">
              CAD-Konstruktion
            </h3>

            <p className="flex-grow leading-8 text-gray-600">
              Konstruktion, Entwicklung und
              CNC-Programmierung aus einer Hand.
            </p>

          </div>

          {/* 3D */}

          <div className="group flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#2E66B8] hover:shadow-xl">

            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4FB] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#2E66B8]">

              <Printer
                size={32}
                strokeWidth={1.8}
                className="text-[#2E66B8] transition-all duration-300 group-hover:text-white"
              />

            </div>

            <h3 className="mb-5 text-2xl font-bold text-[#0F2346]">
              Technischer 3D-Druck
            </h3>

            <p className="flex-grow leading-8 text-gray-600">
              Funktionale Bauteile,
              Prototypen und Kleinserien
              aus technischen Kunststoffen.
            </p>

          </div>

          {/* Individuell */}

          <div className="group flex h-full flex-col rounded-3xl border border-gray-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#2E66B8] hover:shadow-xl">

            <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#EEF4FB] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#2E66B8]">

              <Target
                size={32}
                strokeWidth={1.8}
                className="text-[#2E66B8] transition-all duration-300 group-hover:text-white"
              />

            </div>

            <h3 className="mb-5 text-2xl font-bold text-[#0F2346]">
              Individuelle Lösungen
            </h3>

            <p className="flex-grow leading-8 text-gray-600">
              Maßgeschneiderte Lösungen
              für individuelle Bauteile
              und Sonderanfertigungen.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}