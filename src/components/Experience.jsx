import Section from './Section'

export default function Experience({ items }) {
  return (
    <Section title="Experience">
      <div className="space-y-6">
        {items.map((job, i) => (
          <div key={i}>
            <div className="flex flex-wrap justify-between items-start gap-1">
              <div>
                <h3 className="font-semibold text-slate-800 text-base">{job.role}</h3>
                <p className="text-slate-500 text-sm">{job.company} · {job.location}</p>
              </div>
              <span className="text-slate-400 text-sm whitespace-nowrap">{job.period}</span>
            </div>
            <ul className="mt-2 list-disc list-inside space-y-1">
              {job.points.map((point, j) => (
                <li key={j} className="text-slate-600 text-sm">{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}
