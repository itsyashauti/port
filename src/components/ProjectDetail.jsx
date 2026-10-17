import { useMemo } from 'react'
import { Canvas, useThree } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { projects } from '../data/projects'
import BrandMark from './BrandMark'
import SiteFooter from './SiteFooter'
import WaterBackground from './WaterBackground'

const suppliedClientImages = [
  { image: '/client-work/krushna-roadlines.png', title: 'Krushna Roadlines', clientWork: true },
  { image: '/client-work/satya-films-company.png', title: "Satya Film's Company", clientWork: true },
]

function Bonepare({ side }) {
  const { scene } = useGLTF('/models/bonepare.glb')
  const model = useMemo(() => scene.clone(true), [scene])
  const { viewport } = useThree()
  const leftSide = side === 'left'
  const x = Math.min(3.15, viewport.width * 0.4)
  const scale = viewport.width < 3.5 ? 0.9 : viewport.width < 5 ? 1.35 : 2.1
  const y = viewport.width >= 5 ? -0.45 : -0.1

  return (
    <primitive
      object={model}
      position={[leftSide ? -x : x, y, 0]}
      rotation={[0, leftSide ? Math.PI : 0, 0.12]}
      scale={scale}
    />
  )
}

function ProjectOrnaments() {
  return (
    <div className="project-ornaments" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 38 }}
        dpr={[1, 1.35]}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight color="#c5ddff" intensity={1.5} />
        <pointLight position={[-4, 1.6, 4]} color="#55c7ff" intensity={24} />
        <pointLight position={[4, 1.6, 4]} color="#55c7ff" intensity={24} />
        <Bonepare side="left" />
        <Bonepare side="right" />
      </Canvas>
    </div>
  )
}

function ProjectDetail({ project, onBack, onNavigate }) {
  const projectIndex = projects.findIndex((item) => item.slug === project.slug)
  const nextProject = projects[(projectIndex + 1) % projects.length]
  const galleryItems = project.gallery ?? [
    ...suppliedClientImages,
    ...projects
      .filter((item) => item.slug !== project.slug)
      .slice(0, 4)
      .map((item) => ({ image: item.image, title: item.title, clientWork: false })),
  ]

  return (
    <main id="page-top" className="project-detail" style={{ '--project-accent': project.accent }}>
      <svg className="water-filter-bank" aria-hidden="true" focusable="false">
        <defs>
          <filter id="water-refraction" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence type="fractalNoise" baseFrequency="0.018 0.045" numOctaves="2" seed="7" result="water" />
            <feDisplacementMap in="SourceGraphic" in2="water" scale="15" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
      </svg>

      <WaterBackground accent={project.accent} />

      <div className="project-atmosphere" aria-hidden="true">
        <span className="water-orb water-orb-one" />
        <span className="water-orb water-orb-two" />
        <span className="water-ring water-ring-one" />
        <span className="water-ring water-ring-two" />
      </div>

      <nav className="detail-nav" aria-label="Project navigation">
        <a className="studio-wordmark detail-brand-mark" href="/#section-2" onClick={(event) => { event.preventDefault(); onBack() }} aria-label="Back to projects">
          <BrandMark />
        </a>
        <button className="back-to-work" type="button" onClick={onBack}>
          <span aria-hidden="true">&#8592;</span>
          <span>Back to projects</span>
        </button>
      </nav>

      <section className="project-story project-overview" aria-labelledby="client-name">
        <ProjectOrnaments />
        <div className="project-overview-content">
          <div className="story-heading">
            <p className="section-eyebrow">{project.profileLabel ?? 'CLIENT PROFILE'} <span> / </span> {project.index}</p>
            <h1 id="client-name">{project.clientName}</h1>
            <div className="overview-project-line">
              <span>PROJECT</span>
              <span>{project.title}</span>
            </div>
          </div>

          <div className="project-overview-meta">
            <p className="client-description">{project.description}</p>
            <div className="project-facts">
              <div className="project-fact">
                <span className="project-fact-label">{project.toolsLabel ?? 'TOOLS USED'}</span>
                <span>{project.tools.join(' · ')}</span>
              </div>
              <div className="project-fact">
                <span className="project-fact-label">PROJECT PURPOSE</span>
                <span>{project.purpose}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="project-gallery" aria-labelledby="project-gallery-title">
        <p className="section-eyebrow gallery-eyebrow" id="project-gallery-title">PROJECT GALLERY <span> / </span> {project.index}</p>
        <div className="gallery-grid">
          {galleryItems.map((galleryItem, index) => (
            <figure
              className={`gallery-tile gallery-tile-${index % 4}${galleryItem.clientWork ? ' gallery-tile-client' : ''}${project.slug === 'navy-pier' ? ' gallery-tile-pos' : ''}${project.slug === 'msi-chicago' ? ' gallery-tile-pb' : ''}${project.slug === 'this-was-louises-phone' ? ' gallery-tile-vk' : ''}${project.slug === 'kikk-festival' ? ' gallery-tile-gigwork' : ''}${project.slug === 'kennedy-center' ? ' gallery-tile-roadlines' : ''}`}
              key={galleryItem.image}
            >
              <div className="gallery-tile-image">
                <img
                  src={galleryItem.image}
                  alt={galleryItem.alt ?? `${galleryItem.title} website screenshot`}
                  loading="lazy"
                />
                <span className="gallery-glass-tag">
                  <span className="gallery-tag-light" aria-hidden="true" />
                  {galleryItem.tag ?? (galleryItem.clientWork ? 'CLIENT WEBSITE' : 'TEMP IMAGE')}
                </span>
                <span className="gallery-tile-number">0{index + 1}</span>
              </div>
              <figcaption>
                <span>{galleryItem.caption ?? (project.gallery ? galleryItem.title : galleryItem.clientWork ? galleryItem.title : 'CLIENT WORK')}</span>
                <span>{galleryItem.detail ?? (galleryItem.clientWork ? 'WEBSITE DESIGN' : 'PLACEHOLDER IMAGE')}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="next-project-section" aria-label="Next project">
        <p className="section-eyebrow">NEXT IN THE ARCHIVE</p>
        <button
          className="next-project-card"
          type="button"
          onClick={() => onNavigate(nextProject)}
          style={{ '--next-accent': nextProject.accent }}
        >
          <span className="next-project-image"><img src={nextProject.image} alt="" loading="lazy" /></span>
          <span className="next-project-copy">
            <span className="next-project-type">{nextProject.type}</span>
            <span className="next-project-title">{nextProject.title}</span>
          </span>
          <span className="next-project-arrow" aria-hidden="true">&#8599;</span>
        </button>
        <button className="back-to-work bottom-back" type="button" onClick={onBack}>
          <span aria-hidden="true">&#8592;</span>
          <span>Back to all projects</span>
        </button>
      </section>

      <SiteFooter />
    </main>
  )
}

export default ProjectDetail
