"use client";

import Image from "next/image";

type Spec = {
  label: string;
  value: string;
};

type MachineModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  specs: Spec[];
};

export default function MachineModal({
  open,
  onClose,
  title,
  subtitle,
  description,
  image,
  specs,
}: MachineModalProps) {
  if (!open) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[92vh] w-full max-w-6xl overflow-hidden rounded-3xl bg-white shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 z-20 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md transition hover:bg-[#0F2346] hover:text-white"
        >
          ✕
        </button>

        <div className="grid lg:grid-cols-2">

          {/* Bild */}

          <div className="relative flex min-h-[650px] items-center justify-center bg-[#F7F9FC]">

            <Image
              src={image}
              alt={title}
              fill
              className="object-contain p-12"
              sizes="50vw"
              priority
            />

          </div>

          {/* Inhalt */}

          <div className="overflow-y-auto p-14">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-[#2E66B8]">
              {subtitle}
            </p>

            <h2 className="mb-8 text-5xl font-bold leading-tight text-[#0F2346]">
              {title}
            </h2>

            <p className="mb-12 text-lg leading-9 text-gray-600">
              {description}
            </p>

            <h3 className="mb-8 text-3xl font-bold text-[#0F2346]">
              Technische Daten
            </h3>

            <div className="overflow-hidden rounded-2xl border border-gray-200">

              {specs.map((spec, index) => (

                <div
                  key={spec.label}
                  className={`flex items-center justify-between px-8 py-6 ${
                    index !== specs.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }`}
                >

                  <span className="text-gray-600">
                    {spec.label}
                  </span>

                  <span className="text-right font-semibold text-[#0F2346]">
                    {spec.value}
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </div>
  );
}