import Image from "next/image";

const orbitIcons = [
  { img: "/images/cisco.png", label: "Cisco" },
  { img: "/images/linux.png", label: "Linux" },
  { img: "/images/C.png", label: "C" },
  { img: "/images/Kali-dragon-icon.svg.png", label: "Kali Linux" },
  { img: "/images/py.png", label: "Python" },
  { img: "/images/java.svg", label: "Java" },
  { img: "/images/wireshark_logo.png", label: "Wireshark" },
];

export default function ProfileCard() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      {/* Rings */}
      <div className="absolute inset-0 rounded-full border border-dashed border-accent/20" />
      <div className="absolute inset-[18%] rounded-full border border-line/50" />
      <div className="absolute inset-[22%] rounded-full bg-accent-strong/20 blur-3xl" />

      {/* Rotating tool icons; each icon counter-rotates so it stays upright */}
      <div className="absolute inset-0 animate-orbit">
        {orbitIcons.map((icon, i) => {
          const angle = (i / orbitIcons.length) * 2 * Math.PI - Math.PI / 2;
          const x = 50 + 50 * Math.cos(angle);
          const y = 50 + 50 * Math.sin(angle);
          return (
            <div
              key={icon.label}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <span
                title={icon.label}
                className="block h-10 w-10 animate-orbit-reverse rounded-full border border-line bg-white p-1.5 shadow-lg shadow-black/50 sm:h-12 sm:w-12"
              >
                <Image src={icon.img} alt={icon.label} width={48} height={48} className="h-full w-full rounded-full object-contain" />
              </span>
            </div>
          );
        })}
      </div>

      {/* Portrait */}
      <div className="absolute inset-[24%] rounded-full border border-accent/40 p-1.5">
        <div className="h-full w-full overflow-hidden rounded-full bg-white">
          <Image src="/images/charles.png" alt="Charles Benedict Boquecosa" width={240} height={240} preload className="h-full w-full object-cover" />
        </div>
      </div>

      {/* Current role tag */}
      <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-line bg-ink/90 px-3 py-1.5 font-mono text-[11px] text-muted shadow-lg backdrop-blur">
        <span className="text-accent">●</span> IT Intern @ Accenture
      </div>
    </div>
  );
}
