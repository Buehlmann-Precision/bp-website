import Image from "next/image";

type MachineCardProps = {
  category: string;
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
  onClick: () => void;
};

export default function MachineCard({
  category,
  title,
  description,
  image,
  reverse = false,
  onClick,
}: MachineCardProps) {
  return (
    <div
      className={`grid items-center gap-20 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Bild */}

      <div
        onClick={onClick}
        className="group cursor-pointer"
      >
        <div className="flex h-[500px] items-center justify-center rounded-3xl border border-gray-200 bg-[#F8F9FB] p-10 shadow-sm transition-all duration-300 hover:shadow-xl">

          <Image
            src={image}
            alt={title}
            width={900}
            height={700}
            className="max-h-full h-auto w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            priority
          />

        </div>
      </div>

      {/* Text */}

      <div className="flex flex-col justify-center">

        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-[#2E66B8]">
          {category}
        </p>

        <h3 className="mb-8 text-5xl font-bold leading-tight text-[#0F2346]">
          {title}
        </h3>

        <p className="text-lg leading-9 text-gray-600">
          {description}
        </p>

        <button
          onClick={onClick}
          className="mt-10 w-fit rounded-xl bg-[#0F2346] px-8 py-4 font-semibold text-white transition hover:bg-[#2E66B8]"
        >
          Technische Daten ansehen
        </button>

      </div>

    </div>
  );
}