export interface Machine {
  id: number;
  category: string;
  name: string;
  image: string;
  shortDescription: string;
  description: string;
  specs: {
    label: string;
    value: string;
  }[];
}

export const machines: Machine[] = [
  {
    id: 1,

    category: "CNC-Fräsen",

    name: "Primacon P240",

    image: "/P240.webp",

    shortDescription:
      "Präzise CNC-Fräsbearbeitung für Einzelteile, Prototypen und Kleinserien.",

    description:
      "Die Primacon P240 ermöglicht die präzise Fertigung hochwertiger Frästeile aus verschiedensten Werkstoffen. Dank moderner Steuerung und hoher Wiederholgenauigkeit eignet sie sich ideal für Einzelteile, Prototypen und Kleinserien.",

    specs: [
      {
        label: "Verfahrweg X",
        value: "240 mm",
      },
      {
        label: "Verfahrweg Y",
        value: "240 mm",
      },
      {
        label: "Verfahrweg Z",
        value: "240 mm",
      },
      {
        label: "Werkzeugaufnahme",
        value: "HSK-E25",
      },
      {
        label: "Spindeldrehzahl",
        value: "40'000 min⁻¹",
      },
      {
        label: "Bearbeitung",
        value: "3-Achs CNC-Fräsen",
      },
      {
        label: "Anwendungsbereich",
        value: "Einzelteile · Prototypen · Kleinserien",
      },
    ],
  },

  {
    id: 2,

    category: "3D-Druck",

    name: "Bambu Lab H2S Combo",

    image: "/h2s-combo.jpg",

    shortDescription:
      "Technischer High-Speed-3D-Druck für funktionale Bauteile und Prototypen.",

    description:
      "Der Bambu Lab H2S Combo ermöglicht die schnelle Herstellung funktionaler Prototypen sowie technischer Kunststoffbauteile. Durch den grossen Bauraum und die hohe Druckgeschwindigkeit eignet sich das System ideal für Entwicklung, Einzelteile und Kleinserien.",

    specs: [
      {
        label: "Druckgrösse",
        value: "340 × 320 × 340 mm",
      },
      {
        label: "Druckverfahren",
        value: "FDM",
      },
      {
        label: "Materialien",
        value: "PLA · PETG · ABS · ASA · TPU · PA",
      },
      {
        label: "Mehrfarbendruck",
        value: "Ja",
      },
      {
        label: "Anwendungsbereich",
        value: "Prototypen · Funktionsteile · Kleinserien",
      },
    ],
  },
];