"use client";

import { useState } from "react";

import MachineCard from "./MachineCard";
import MachineModal from "./MachineModal";

import { machines, Machine } from "../data/machineData";

export default function Maschinen() {
  const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);

  return (
    <>
      <section
        id="maschinen"
        className="bg-white py-32"
      >
        <div className="mx-auto max-w-7xl px-8">

          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#2E66B8]">
            Maschinenpark
          </p>

          <h2 className="mb-8 text-5xl font-bold leading-tight text-[#0F2346]">
            Moderne Technik
            <br />
            für höchste Präzision.
          </h2>

          <p className="mb-24 max-w-2xl text-lg leading-8 text-gray-600">
            Leistungsfähige Maschinen bilden die Grundlage für präzise
            Ergebnisse. Qualität beginnt bereits bei der Fertigung.
          </p>

          <div className="space-y-32">

            {machines.map((machine, index) => (

              <MachineCard
                key={machine.id}
                category={machine.category}
                title={machine.name}
                description={machine.shortDescription}
                image={machine.image}
                reverse={index % 2 === 1}
                onClick={() => setSelectedMachine(machine)}
              />

            ))}

          </div>

        </div>
      </section>

      <MachineModal
        open={selectedMachine !== null}
        onClose={() => setSelectedMachine(null)}
        title={selectedMachine?.name ?? ""}
        subtitle={selectedMachine?.category ?? ""}
        description={selectedMachine?.description ?? ""}
        image={selectedMachine?.image ?? ""}
        specs={selectedMachine?.specs ?? []}
      />

    </>
  );
}