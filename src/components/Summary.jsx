import Section from './Section'

export default function Summary({ text }) {
  return (
    <Section title="Summary">
      <p className="text-slate-600 leading-relaxed">{text}</p>
    </Section>
  )
}
