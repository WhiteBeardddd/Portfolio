import React from "react"

export type Certificate = {
  title: string
  image: string
  url: string
  date: string
}

const CertCard = ({ title, image, url, date }: Certificate) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-full
        rounded-2xl
        bg-white/5
        backdrop-blur-md
        border border-white/10
        shadow-[0_10px_40px_rgba(0,0,0,0.6)]
        transition
        hover:scale-[1.03]
        hover:border-white/30
        cursor-pointer
        p-6
        flex flex-col
        text-white
      "
    >
      {/* Title */}
      <h3 className="text-xl font-bold mb-4 text-center">
        {title}
      </h3>

      {/* Image */}
      <div
        className="
          w-full
          h-56
          rounded-xl
          bg-cover bg-center
          border border-white/20
        "
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Date */}
      <p className="mt-3 text-sm text-gray-300 text-center">
        {date}
      </p>

      {/* Link hint */}
      <p className="mt-4 text-sm text-[#e4ae0b] text-center opacity-80">
        Click to view certificate →
      </p>
    </a>
  )
}

export default CertCard
