export default function Section({ title, children }) {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-semibold text-slate-800 border-b-2 border-slate-200 pb-1 mb-4 uppercase tracking-wide">
        {title}
      </h2>
      {children}
    </section>
  )
}
