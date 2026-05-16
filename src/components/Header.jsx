export default function Header({ data }) {
  const { name, title, contact } = data

  return (
    <header className="bg-slate-800 text-white py-10 px-6 text-center">
      <h1 className="text-4xl font-bold tracking-tight">{name}</h1>
      <p className="text-slate-300 text-lg mt-1">{title}</p>
      <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm text-slate-300">
        <span>{contact.email}</span>
        <span>{contact.phone}</span>
        <span>{contact.location}</span>
        {contact.linkedin && (
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="underline hover:text-white">
            LinkedIn
          </a>
        )}
        {contact.github && (
          <a href={contact.github} target="_blank" rel="noreferrer" className="underline hover:text-white">
            GitHub
          </a>
        )}
      </div>
    </header>
  )
}
