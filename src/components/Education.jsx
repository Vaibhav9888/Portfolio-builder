import Section from './Section'

export default function Education({ items }) {
  return (
    <Section title="Education">
      <div className="space-y-4">
        {items.map((edu, i) => (
          <div key={i} className="flex flex-wrap justify-between items-start gap-1">
            <div>
              <h3 className="font-semibold text-slate-800 text-base">{edu.degree}</h3>
              <p className="text-slate-500 text-sm">{edu.institution}</p>
              {edu.grade && <p className="text-slate-400 text-sm">{edu.grade}</p>}
            </div>
            <span className="text-slate-400 text-sm whitespace-nowrap">{edu.period}</span>
          </div>
        ))}
      </div>
    </Section>
  )
}
