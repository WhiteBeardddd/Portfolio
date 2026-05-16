import React from "react"

export type Certificate = {
  title: string
  image: string
  url: string
  date: string
  category?: string
}
const categoryBadge: Record<string, string> = {
  Cybersecurity: "text-white border-blue-500 bg-blue-600",
  Networking: "text-white border-green-500 bg-green-600",
  Cloud: "text-white border-purple-500 bg-purple-600",
  Events: "text-white border-pink-500 bg-pink-600",
  Hackathon: "text-white border-orange-500 bg-orange-500",
}

const CertCard = ({ title, image, url, date, category }: Certificate) => {
  const badgeClass = category ? categoryBadge[category] ?? "text-gray-400 border-gray-400/40 bg-gray-400/10" : ""

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group w-full rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-[#e4ae0b]/40 transition-all duration-300 hover:shadow-xl hover:shadow-[#e4ae0b]/5 flex flex-col cursor-pointer"
    >
      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        {category && (
          <span className={`absolute top-3 right-3 text-xs font-bold px-3 py-1 rounded-full border ${badgeClass}`}>
            {category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <h3 className="font-bold text-base text-white leading-snug mb-1.5 group-hover:text-[#e4ae0b] transition-colors">
          {title}
        </h3>
        <p className="text-gray-400 text-sm">{date}</p>
        <div className="mt-auto pt-4 flex items-center justify-between">
          <span className="text-[#e4ae0b] text-xs font-semibold uppercase tracking-wider">
            View Certificate →
          </span>
          <span className="w-7 h-7 rounded-full border border-[#e4ae0b]/30 flex items-center justify-center group-hover:bg-[#e4ae0b] group-hover:border-[#e4ae0b] transition-all duration-200">
            <svg className="w-3 h-3 text-[#e4ae0b] group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15M4.5 4.5h15v15" />
            </svg>
          </span>
        </div>
      </div>
    </a>
  )
}

export default CertCard
