export default function Impressum() {
  return (
    <main className="min-h-screen bg-[#F8F9FB] py-32">
      <div className="mx-auto max-w-4xl px-8">

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#2E66B8]">
          Rechtliches
        </p>

        <h1 className="mb-12 text-4xl font-bold text-[#0F2346] md:text-5xl">
          Impressum
        </h1>

        <div className="space-y-10 rounded-3xl border border-gray-200 bg-white p-10 shadow-sm">

          {/* Angaben */}

          <section>

            <h2 className="mb-6 text-2xl font-bold text-[#0F2346]">
              Angaben gemäss Schweizer Recht
            </h2>

            <div className="space-y-4 leading-8 text-gray-700">

              <p>
                <strong>Unternehmen:</strong> Bühlmann Precision
              </p>

              <p>
                <strong>Inhaber:</strong> Jarno Bühlmann
              </p>

              <p>
                <strong>Adresse:</strong>
                <br />
                J.-H.-Pestalozziallee 68
                <br />
                2503 Biel/Bienne
                <br />
                Schweiz
              </p>

            </div>

          </section>

          {/* Kontakt */}

          <section>

            <h2 className="mb-6 text-2xl font-bold text-[#0F2346]">
              Kontakt
            </h2>

            <div className="space-y-4 leading-8 text-gray-700">

              <p>
                <strong>Telefon:</strong> +41 78 814 78 94
              </p>

              <p>
                <strong>E-Mail:</strong> suppajeator@gmail.com
              </p>

            </div>

          </section>

          {/* Haftung */}

          <section>

            <h2 className="mb-6 text-2xl font-bold text-[#0F2346]">
              Haftungsausschluss
            </h2>

            <p className="leading-8 text-gray-700">
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir
              keine Gewähr für die Aktualität, Richtigkeit und
              Vollständigkeit der bereitgestellten Informationen.
              Für Inhalte externer Links sind ausschliesslich deren
              Betreiber verantwortlich.
            </p>

          </section>

          {/* Urheberrecht */}

          <section>

            <h2 className="mb-6 text-2xl font-bold text-[#0F2346]">
              Urheberrecht
            </h2>

            <p className="leading-8 text-gray-700">
              Sämtliche Inhalte dieser Website, insbesondere Texte,
              Bilder, Grafiken und Logos, sind urheberrechtlich geschützt.
              Jede Verwendung ausserhalb der gesetzlichen Grenzen bedarf
              der vorherigen schriftlichen Zustimmung von Bühlmann Precision.
            </p>

          </section>

        </div>

      </div>
    </main>
  );
}