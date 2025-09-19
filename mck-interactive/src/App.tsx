import './App.css'
import { projects } from './data/projects'
import logoImage from './assets/logo.png'
import wordmarkImage from './assets/wordmark.png'
import auditoryPareidoliaImage from './assets/AuditoryPareidolia.png'
import fakeJobSpotterImage from './assets/FakeJobSpotter.png'
import frehabImage from './assets/Frehab.png'
import invisAbilitiesImage from './assets/InvisAbilities.png'
import resumeButlerImage from './assets/ResumeButler.png'
import unitShopperImage from './assets/UnitShopper.png'
import { useEffect, useState } from 'react'


function App() {
  const [showToolbarWordmark, setShowToolbarWordmark] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroElement = document.querySelector('.hero-wordmark')
      if (heroElement) {
        const rect = heroElement.getBoundingClientRect()
        // Show toolbar wordmark when hero is completely out of view
        setShowToolbarWordmark(rect.bottom < 0)
      }
    }

    // Check initial state
    handleScroll()
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  // Map project names to their background images
  const projectImages = {
    'Auditory Pareidolia': auditoryPareidoliaImage,
    'Fake Job Spotter': fakeJobSpotterImage,
    'Frehab': frehabImage,
    'InvisAbilities': invisAbilitiesImage,
    'Resume Butler': resumeButlerImage,
    'Unit Shopper': unitShopperImage,
  };

  return (
    <>
      <nav className="toolbar" aria-label="Navigation">
        <div className="glass-filter"></div>
        <div className="glass-overlay"></div>
        <div className="glass-specular"></div>
        {showToolbarWordmark && (
          <img src={wordmarkImage} alt="McK‑interactive" className="wordmark" />
        )}
        <img src={logoImage} alt="McK‑interactive Logo" className="toolbar-logo" />
      </nav>

      <main className="app">
        <header className="header" aria-label="Brand">
          <img src={wordmarkImage} alt="McK‑interactive" className="hero-wordmark" />
        </header>

        <section className="projects-section">
          <div className="glass-filter"></div>
          <div className="glass-overlay"></div>
          <div className="glass-specular"></div>
          <div className="projects-grid" aria-label="Projects">
            {projects.map((p) => (
              <a 
                key={p.url} 
                className="project-card" 
                href={p.url} 
                target="_blank" 
                rel="noreferrer noopener"
                style={{
                  backgroundImage: `url(${projectImages[p.name as keyof typeof projectImages]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="glass-filter"></div>
                <div className="glass-overlay"></div>
                <div className="glass-specular"></div>
                <div className="project-content">
                  <h3 className="project-name">{p.name}</h3>
                  <p className="project-description">{p.description}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <footer className="footer">
          <div className="glass-filter"></div>
          <div className="glass-overlay"></div>
          <div className="glass-specular"></div>
          <span>© {new Date().getFullYear()} McK‑interactive LLC. All rights reserved.</span>
        </footer>
      </main>
    </>
  )
}

export default App
