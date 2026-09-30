import { categoryTone, type Project } from "@/lib/data"
import StatusBadge from "@/components/statusBadge"

const ProjectCard = ({
  title,
  projectType,
  role,
  date,
  category,
  status,
  image,
  url,
  highlights,
  stack,
  links,
}: Project) => {
  const tone = categoryTone[category]
  const ongoing = status === "Ongoing"

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border bg-panel/80 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl hover:shadow-accent/5 ${
        ongoing ? "border-accent/25 hover:border-accent/50" : "border-white/10 hover:border-white/20"
      }`}
    >
      <div className="flex flex-col md:flex-row">
        {/* Image */}
        <div className="relative h-52 shrink-0 overflow-hidden md:h-auto md:w-72 lg:w-80">
          <img
            src={image}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-panel via-panel/10 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-panel/60" />
          <StatusBadge status={status} className="absolute left-3 top-3" />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col p-5 sm:p-6">
          <div className="mb-2 flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider">
            <span className={`h-1.5 w-1.5 rounded-full ${tone.dot}`} />
            <span className={tone.text}>{category}</span>
            <span className="text-white/20">/</span>
            <span className="text-gray-500">{date}</span>
          </div>

          <h3 className="text-lg font-bold leading-snug text-white transition-colors group-hover:text-accent sm:text-xl">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-400">
            {projectType} <span className="text-white/20">·</span> <span className="text-gray-500">{role}</span>
          </p>

          <ul className="mt-4 space-y-2 border-t border-white/10 pt-4">
            {highlights.map((item) => (
              <li key={item} className="flex gap-3 text-sm leading-relaxed text-gray-400">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          {stack && stack.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-1.5">
              {stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-0.5 font-mono text-[11px] text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          <div className="mt-5 flex flex-wrap items-center gap-2 pt-1">
            {(links && links.length > 0 ? links : [{ label: "View Project", href: url }]).map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold transition-all duration-200 ${
                  i === 0
                    ? "bg-accent text-black hover:bg-accent-soft"
                    : "border border-white/15 text-gray-200 hover:border-accent hover:text-accent"
                }`}
              >
                {link.label}
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17 17 7M8 7h9v9" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

export default ProjectCard
