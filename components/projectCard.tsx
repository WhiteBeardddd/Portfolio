import React from "react"

type CardProps = {
  title: string
  projectType: string
  description: string
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
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="
        w-full max-w-5xl
        flex gap-8
        p-8
        rounded-2xl
        bg-white/5
        backdrop-blur-md
        border border-white/10
        shadow-[0_10px_40px_rgba(0,0,0,0.6)]
        transition
        hover:scale-[1.02]
        hover:border-white/30
        cursor-pointer
      "
    >
      {/* Image */}
      <div
        className="
          w-44 h-64
          rounded-xl
          bg-cover bg-center
          border border-white/20
          flex-shrink-0
        "
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Content */}
      <div className="flex-1 text-white">
        <h3 className="text-2xl font-bold mb-1">{title}</h3>

        <p className="text-sm text-white/70 mb-3">
          {projectType} · {role}
        </p>

        <p className="text-sm text-white/50 mb-4">{date}</p>

        <p className="text-white/90 text-justify leading-relaxed">
          {description}
        </p>
        
        <p className="mt-4 text-sm text-[#e4ae0b] opacity-80">
          Click to view →
        </p>

      </div>
    </a>
  )
}

export default ProjectCard
