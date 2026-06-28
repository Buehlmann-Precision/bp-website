export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-[#F8F9FB] py-32">
      <div className="mx-auto max-w-4xl px-8">

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#2E66B8]">
          Rechtliches
        </p>

        <h1 className="mb-12 text-4xl font-bold text-[#0F2346] md:text-5xl">
          Datenschutzerklärung
        </h1>

        <div className="space-y-10 rounded-3xl border border-gray-200 bg-white p-10 shadow-sm">

          <section>

            <h2 className="mb-6 text-2xl font-bold text-[#0F2346]">
              Allgemeines
            </h2>

            <p className="leading-8 text-gray-700">
              Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese
              Website behandelt personenbezogene Daten vertraulich und
              entsprechend den geltenden Datenschutzbestimmungen der
              Schweiz.
            </p>

          </section>

          <section>

            <h2 className="mb-6 text-2xl font-bold text-[#0F2346]">
              Kontaktformular
            </h2>

            <p className="leading-8 text-gray-700">
              Wenn Sie uns über das Kontaktformular eine Anfrage senden,
              werden die von Ihnen angegebenen Daten ausschliesslich zur
              Bearbeitung Ihrer Anfrage verwendet.
            </p>

            <p className="mt-4 leading-8 text-gray-700">
              Gespeichert werden dabei:
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6 text-gray-700">

              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>Betreff</li>
              <li>Ihre Nachricht</li>

            </ul>

          </section>

          <section>

            <h2 className="mb-6 text-2xl font-bold text-[#0F2346]">
              E-Mail-Versand
            </h2>

            <p className="leading-8 text-gray-700">
              Für den Versand der Kontaktanfragen nutzen wir den Dienst
              <strong> Resend</strong>. Die übermittelten Daten werden
              ausschliesslich zum Versand Ihrer Anfrage verarbeitet.
            </p>

          </section>

          <section>

            <h2 className="mb-6 text-2xl font-bold text-[#0F2346]">
              Ihre Rechte
            </h2>

            <p className="leading-8 text-gray-700">
              Sie haben jederzeit das Recht, Auskunft über die von uns
              gespeicherten personenbezogenen Daten zu verlangen sowie
              deren Berichtigung oder Löschung zu beantragen, soweit
              keine gesetzlichen Aufbewahrungspflichten bestehen.
            </p>

          </section>

          <section>

            <h2 className="mb-6 text-2xl font-bold text-[#0F2346]">
              Kontakt
            </h2>

            <p className="leading-8 text-gray-700">
              Bei Fragen zum Datenschutz können Sie uns jederzeit
              kontaktieren:
            </p>

            <div className="mt-6 space-y-3 text-gray-700">

              <p>
                <strong>Bühlmann Precision</strong>
              </p>

              <p>
                J.-H.-Pestalozziallee 68
                <br />
                2503 Biel/Bienne
                <br />
                Schweiz
              </p>

              <p>
                <strong>E-Mail:</strong> suppajeator@gmail.com
              </p>

              <p>
                <strong>Telefon:</strong> +41 78 814 78 94
              </p>

            </div>

          </section>

        </div>

      </div>
    </main>
  );
}