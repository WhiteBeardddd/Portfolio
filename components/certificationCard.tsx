import { categoryTone, type Certificate } from "@/lib/data"

const CertCard = ({ title, image, url, date, category }: Certificate) => {
  const tone = categoryTone[category]

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-panel/80 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent" />
        <span className={`absolute right-3 top-3 rounded-full border px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider backdrop-blur ${tone.chip}`}>
          {category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="mb-1.5 font-mono text-[11px] uppercase tracking-wider text-gray-500">{date}</p>
        <h3 className="font-bold leading-snug text-white transition-colors group-hover:text-accent">{title}</h3>
        <div className="mt-auto flex items-center justify-between pt-5">
          <span className="text-xs font-semibold uppercase tracking-wider text-accent">View Certificate</span>
          <span className="grid h-8 w-8 place-items-center rounded-full border border-accent/30 transition-all duration-200 group-hover:border-accent group-hover:bg-accent">
            <svg className="h-3.5 w-3.5 text-accent transition-colors group-hover:text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
            </svg>
          </span>
        </div>
      </div>
    </a>
  )
}

export default CertCard
