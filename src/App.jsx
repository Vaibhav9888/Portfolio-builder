import cv from './data/cv.json'
import Header from './components/Header'
import Summary from './components/Summary'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Projects from './components/Projects'

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      <div className="max-w-3xl mx-auto shadow-lg bg-white">
        <Header data={cv} />
        <main className="px-8 py-8">
          {cv.summary && <Summary text={cv.summary} />}
          {cv.experience?.length > 0 && <Experience items={cv.experience} />}
          {cv.education?.length > 0 && <Education items={cv.education} />}
          {cv.skills && <Skills skills={cv.skills} />}
          {cv.projects?.length > 0 && <Projects items={cv.projects} />}
        </main>
        <footer className="text-center text-xs text-slate-400 py-4 border-t border-slate-100">
          Built with React · Edit <code>src/data/cv.json</code> to update content
        </footer>
      </div>
    </div>
  )
}
