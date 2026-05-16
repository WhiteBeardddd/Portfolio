import React from "react"

type CardProps = {
  title: string
  projectType: string
  description: React.ReactNode
  date: string
  role: string
  image: string
  url: string
  category?: string
}

const categoryBadge: Record<string, string> = {
  Networking: "text-white border-green-500 bg-green-600",
  Security: "text-white border-blue-500 bg-blue-600",
  Mobile: "text-white border-pink-500 bg-pink-600",
  "Web & Fullstack": "text-white border-purple-500 bg-purple-600",
  "Game Development": "text-white border-orange-500 bg-orange-500"
}

const ProjectCard = ({
  title,
  projectType,
  description,
  date,
  role,
  image,
  url,
  category,
}: CardProps) => {
  const badgeClass = category ? categoryBadge[category] ?? "text-gray-400 border-gray-400/40 bg-gray-400/10" : ""

  return (
    <div className="group w-full max-w-5xl mx-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden hover:border-[#e4ae0b]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#e4ae0b]/5">
      <div className="flex flex-col md:flex-row">

        {/* Image */}
        <div className="relative md:w-64 lg:w-72 flex-shrink-0 h-52 md:h-auto overflow-hidden">
          <div
            className="w-full h-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/40 md:block hidden" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 md:hidden block" />
          {category && (
            <span className={`absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full border ${badgeClass}`}>
              {category}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-5 sm:p-6">
          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <h3 className="text-lg sm:text-xl font-bold text-white leading-snug group-hover:text-[#e4ae0b] transition-colors">
              {title}
            </h3>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-shrink-0 inline-flex items-center gap-1 px-3 py-1.5 rounded-full border border-[#e4ae0b]/30 text-[#e4ae0b] text-xs font-bold hover:bg-[#e4ae0b] hover:text-black transition-all duration-200"
            >
              View →
            </a>
          </div>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-4">
            <span className="text-gray-400 text-sm">{projectType}</span>
            <span className="text-white/20 text-xs">•</span>
            <span className="text-gray-500 text-xs">{role}</span>
            <span className="text-white/20 text-xs">•</span>
            <span className="text-gray-500 text-xs">{date}</span>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 mb-4" />

          {/* Description */}
          <div className="text-gray-300 text-sm leading-relaxed [&_ul]:list-disc [&_ul]:ml-5 [&_ul]:space-y-1.5 [&_li]:text-gray-400 [&_h1]:font-bold [&_h1]:text-white [&_h1]:text-base [&_h1]:mt-3 [&_h1]:mb-1.5 [&_a]:text-[#e4ae0b] [&_a]:underline [&_a:hover]:text-[#f6c742]">
            {description}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
