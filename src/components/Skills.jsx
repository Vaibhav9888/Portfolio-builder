import Section from './Section'

export default function Skills({ skills }) {
  return (
    <Section title="Skills">
      <div className="space-y-3">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category} className="flex flex-wrap gap-x-4 gap-y-1 items-start">
            <span className="text-sm font-semibold text-slate-700 w-36 shrink-0">{category}</span>
            <div className="flex flex-wrap gap-2">
              {items.map((skill, i) => (
                <span key={i} className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
