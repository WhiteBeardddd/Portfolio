import React from "react"

type CardProps = {
  title: string
  projectType: string
  description: React.ReactNode
  date: string
  role: string
  image: string
  url: string
}

const ProjectCard = ({
  title,
  projectType,
  description,
  date,
  role,
  image,
  url,
}: CardProps) => {
  return (
    <div className="w-full max-w-7xl mx-auto mb-10">

      {/* Top row */}
      <div className="flex items-center justify-between pb-2">
        <h3 className="text-[21px] font-bold tracking-wide uppercase text-[#e4ae0b]">
          {title}
        </h3>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#4d6cdd] underline hover:text-[#f6c742] transition-colors text-m font-bold"
        >
          See more
        </a>
      </div>

      {/* Divider */}
      <hr className="border-white/20 mb-5" />

      {/* Content */}
      <div className="grid grid-cols-[260px_1fr] gap-8 items-start">

        {/* Image */}
        <div
          className="w-[260px] h-[300px] border border-white/20 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />

        {/* Right content */}
        <div className="text-white/90">
          <p className="text-white/60 mb-1">{date}</p>

          <p className="text-white/70 mb-4">
            {projectType} · {role}
          </p>

          <span className="text-[20px] leading-relaxed text-justify">
            {description}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
