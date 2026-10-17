import { useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import Dog from './components/Dog'
import BrandMark from './components/BrandMark'
import ProjectDetail from './components/ProjectDetail'
import SiteFooter from './components/SiteFooter'
import { findProjectBySlug, projects } from './data/projects'
import './App.css'

function projectFromPath() {
  const match = window.location.pathname.match(/^\/projects\/([^/]+)\/?$/)
  return match ? findProjectBySlug(decodeURIComponent(match[1])) : undefined
}

function App() {
  const [activeProject, setActiveProject] = useState(projectFromPath)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function handlePopState() {
      const project = projectFromPath()
      setActiveProject(project)

      if (!project && window.location.pathname === '/') {
        window.setTimeout(() => {
          document.getElementById('section-2')?.scrollIntoView({ behavior: 'smooth' })
        }, 40)
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  useEffect(() => {
    if (activeProject) window.scrollTo({ top: 0, behavior: 'auto' })
  }, [activeProject])

  function openProject(event, project) {
    if (event && (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0)) return
    event?.preventDefault()
    window.history.pushState({ fromProjects: true, projectSlug: project.slug }, '', `/projects/${project.slug}`)
    setActiveProject(project)
  }

  function backToProjects() {
    window.history.replaceState({ returnToProjects: true }, '', '/#section-2')
    setActiveProject(undefined)
    window.setTimeout(() => {
      document.getElementById('section-2')?.scrollIntoView({ behavior: 'smooth' })
    }, 40)
  }

  if (activeProject) {
    return (
      <ProjectDetail
        project={activeProject}
        onBack={backToProjects}
        onNavigate={(project) => openProject(undefined, project)}
      />
    )
  }

  return (
    <main className="home-page" id="page-top">
      <div className="home-scene">
      <div className="dog-canvas-sticky" aria-hidden="true">
        <Canvas
          id="canvas-elem"
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
          }}
        >
          <Dog />
        </Canvas>
      </div>

      <section id="section-1">
        <nav className="home-nav" aria-label="Main navigation">
          <a className="studio-wordmark home-brand-mark" href="#section-1" aria-label="Yash Auti home">
            <BrandMark />
          </a>
          <a className="nav-elem reel-link" href="#section-2">
            <i className="ri-arrow-right-s-line" aria-hidden="true" /> Our showreel
          </a>
          <a className="nav-elem desktop-contact-link" href="#site-footer">Let's Talk</a>
          <button
            className="nav-elem mobile-menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <i className={menuOpen ? 'ri-close-line' : 'ri-menu-3-line'} aria-hidden="true" />
          </button>
          {menuOpen && (
            <div className="mobile-nav-menu" id="mobile-navigation">
              <a href="#section-2" onClick={(event) => {
                event.preventDefault()
                setMenuOpen(false)
                document.getElementById('section-2')?.scrollIntoView({ behavior: 'smooth' })
              }}>Projects</a>
              <a href="#site-footer" onClick={(event) => {
                event.preventDefault()
                setMenuOpen(false)
                document.getElementById('site-footer')?.scrollIntoView({ behavior: 'smooth' })
              }}>Let's Connect</a>
            </div>
          )}
        </nav>

        <div className="middle">
          <div className="left">
            <h1>WE <br />Build <br />What's <br />Next</h1>
          </div>
          <div className="right" />
        </div>

        <div className="bottom">
          <div className="left" />
          <div className="right">
            <p>
              I design thoughtful digital experiences that help brands, products, and ideas connect with people.
            </p>
          </div>
        </div>

        <div className="first-line" aria-hidden="true" />
        <div className="second-line" aria-hidden="true" />
      </section>

      <section id="section-2" aria-label="Selected projects">
        <p className="projects-eyebrow">SELECTED WORK <span> / {String(projects.length).padStart(2, '0')}</span></p>
        <div className="titles">
          {projects.map((project) => (
            <a
              key={project.id}
              className="title"
              href={`/projects/${project.slug}`}
              aria-label={`View ${project.title} project`}
              onClick={(event) => openProject(event, project)}
            >
              <small>{project.period}</small>
              <h2>{project.title}</h2>
              <span className="title-arrow" aria-hidden="true">&#8599;</span>
            </a>
          ))}
        </div>
        <p className="projects-footnote">CLICK A PROJECT TO EXPLORE <span aria-hidden="true">&#8594;</span></p>
      </section>

      <section id="section-3" aria-label="End of selected projects" />
      </div>
      <SiteFooter />
    </main>
  )
}

export default App
