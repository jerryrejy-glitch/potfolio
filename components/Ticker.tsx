import Image from "next/image";

const logos = [
  { src: "/assets/logos/provident.png", alt: "Provident Real Estate", h: 26 },
  { src: "/assets/logos/modified-online.png", alt: "Modified Online", h: 26 },
  { src: "/assets/logos/kell.png", alt: "Kell Signature Salon & Spa", h: 52 },
  { src: "/assets/logos/crumb-n-cheese.png", alt: "Crumb N Cheese", h: 44 },
  { src: "/assets/logos/6kiom.png", alt: "6KIOM", h: 48 },
  { src: "/assets/logos/akshaya-gold.png", alt: "Akshaya Gold & Diamonds", h: 52 },
  { src: "/assets/logos/calgary.png", alt: "Calgary", h: 28 },
  { src: "/assets/logos/provident-vacation-homes.png", alt: "Provident Vacation Homes", h: 36 },
  { src: "/assets/logos/lagom-by-ami.png", alt: "Lagom by Ami", h: 48 },
  { src: "/assets/logos/eumed.png", alt: "Eumed", h: 44 },
  { src: "/assets/logos/hubeco.png", alt: "Hubeco", h: 40 },
  { src: "/assets/logos/kell-bridal-studio.png", alt: "Kell Bridal Studio", h: 36 },
  { src: "/assets/logos/provident-property-boutique.png", alt: "Provident Property Boutique", h: 52 },
  { src: "/assets/logos/agile-pro-studio.png", alt: "Agile Pro Studio", h: 44 },
  { src: "/assets/logos/precision-inspection.png", alt: "Precision Inspection", h: 26 },
  { src: "/assets/logos/prism.png", alt: "Prism", h: 52 },
  { src: "/assets/logos/provident-secondary.png", alt: "Provident Secondary", h: 30 },
];

export default function Ticker() {
  const doubled = [...logos, ...logos];
  return (
    <div className="relative border-y border-[#E8E8ED] py-7 overflow-hidden bg-white">
      <p className="text-center text-[12px] font-semibold tracking-[1.5px] uppercase text-[#6E6E73] mb-6">
        Brands I&apos;ve worked with
      </p>
      <div className="ticker-animate flex w-max items-center" style={{ animationDuration: "50s" }}>
        {doubled.map((l, i) => (
          <div key={i} className="flex items-center px-9">
            <Image
              src={l.src}
              alt={l.alt}
              width={300}
              height={300}
              className="w-auto object-contain grayscale opacity-55 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              style={{ height: l.h }}
            />
          </div>
        ))}
      </div>
      {/* Edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent" />
    </div>
  );
}
