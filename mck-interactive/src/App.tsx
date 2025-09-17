import './App.css'
import { projects } from './data/projects'
import logoImage from './assets/logo.png'
import wordmarkImage from './assets/wordmark.png'

function App() {
  return (
    <>
      <nav className="toolbar" aria-label="Navigation">
        <img src={wordmarkImage} alt="McK‑interactive" className="wordmark" />
        <img src={logoImage} alt="McK‑interactive Logo" className="toolbar-logo" />
      </nav>

      <main className="app">
        <header className="header" aria-label="Brand">
          <div className="hero-content">
            <h1 className="hero-title">Software, Web & Game Development</h1>
            <p className="hero-subtitle">
              Professional development services and innovative digital solutions
            </p>
          </div>
        </header>

        <section className="projects-section">
          <h2 className="section-title">Our Projects</h2>
          <p className="section-description">
            Explore our portfolio of web applications, tools, and digital solutions designed to solve real-world problems.
          </p>
          <div className="projects-grid" aria-label="Projects">
            {projects.map((p) => (
              <a key={p.url} className="project-card" href={p.url} target="_blank" rel="noreferrer noopener">
                <div className="project-content">
                  <h3 className="project-name">{p.name}</h3>
                  <p className="project-description">Visit our application</p>
                </div>
                <span className="project-arrow" aria-hidden="true">→</span>
              </a>
            ))}
          </div>
        </section>

        <footer className="footer">
          <span>© {new Date().getFullYear()} McK‑interactive LLC. All rights reserved.</span>
        </footer>
      </main>
    </>
  )
}

export default App
