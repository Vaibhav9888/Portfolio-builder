import Section from './Section'

export default function Projects({ items }) {
  return (
    <Section title="Projects">
      <div className="space-y-4">
        {items.map((project, i) => (
          <div key={i}>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-semibold text-slate-800 text-base">{project.name}</h3>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-500 text-xs underline hover:text-blue-700"
                >
                  View →
                </a>
              )}
            </div>
            <p className="text-slate-600 text-sm mt-1">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((t, j) => (
                <span key={j} className="bg-blue-50 text-blue-700 text-xs px-2 py-0.5 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
