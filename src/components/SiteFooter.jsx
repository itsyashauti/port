const flowerPositions = [
  { x: 90, scale: 0.66 },
  { x: 205, scale: 0.82 },
  { x: 326, scale: 0.62 },
  { x: 445, scale: 0.94 },
  { x: 560, scale: 0.7 },
  { x: 680, scale: 0.84 },
  { x: 805, scale: 0.63 },
  { x: 930, scale: 0.96 },
  { x: 1045, scale: 0.72 },
  { x: 1165, scale: 0.86 },
  { x: 1290, scale: 0.64 },
  { x: 1380, scale: 0.76 },
]

const petalAngles = [0, 72, 144, 216, 288]

const socialLinks = [
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/bepolite' },
  { name: 'Medium', url: 'https://medium.com/@autiyash97' },
  { name: 'Email', url: 'mailto:yash.autipaypal@gmail.com' },
]

function FlowerHeads() {
  return (
    <g className="footer-flower-head">
      {petalAngles.map((angle) => (
        <ellipse key={angle} cx="0" cy="-7" rx="3.1" ry="5.2" transform={`rotate(${angle})`} />
      ))}
      <circle cx="0" cy="0" r="2.2" />
    </g>
  )
}

function FooterFlowers() {
  return (
    <svg className="footer-flowers" viewBox="0 0 1440 210" preserveAspectRatio="xMidYMax meet" aria-hidden="true">
      <defs>
        <linearGradient id="footer-stem-gradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#58aaff" />
          <stop offset="1" stopColor="#1260ce" />
        </linearGradient>
      </defs>
      {flowerPositions.map(({ x, scale }, index) => (
        <g
          className={`footer-flower footer-flower-${index % 3}`}
          key={x}
          transform={`translate(${x} ${210 * (1 - scale)}) scale(${scale})`}
        >
          <path className="footer-stem" d="M0 210 C-5 174 8 143 2 111 C-3 84 7 58 0 34 M2 139 C-19 124 -23 106 -22 91 M3 104 C23 91 27 75 25 59" />
          <path className="footer-leaf" d="M-2 163 C-24 160 -33 146 -31 135 C-14 137 -4 147 -2 163Z" />
          <path className="footer-leaf" d="M3 128 C22 124 31 111 29 100 C13 103 5 113 3 128Z" />
          <path className="footer-leaf" d="M-22 101 C-39 98 -46 86 -43 77 C-29 79 -22 88 -22 101Z" />
          <path className="footer-leaf" d="M25 70 C39 67 46 56 43 48 C31 50 25 59 25 70Z" />
          <g transform="translate(0 31)"><FlowerHeads /></g>
          <g transform="translate(-22 88) scale(.62)"><FlowerHeads /></g>
          <g transform="translate(25 56) scale(.56)"><FlowerHeads /></g>
        </g>
      ))}
    </svg>
  )
}

function SocialIcon({ name }) {
  return (
    <svg className="footer-social-icon" viewBox="0 0 24 24" aria-hidden="true">
      {name === 'LinkedIn' && (
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.55V9h3.57v11.45ZM22.22 0H1.78C.8 0 0 .77 0 1.73v20.54C0 23.23.8 24 1.78 24h20.44c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
      )}
      {name === 'Medium' && (
        <g>
          <ellipse cx="7" cy="12" rx="5" ry="7.2" />
          <ellipse cx="17" cy="12" rx="4.1" ry="7.2" />
          <ellipse cx="22.4" cy="12" rx="1.2" ry="7.2" />
        </g>
      )}
      {name === 'Email' && (
        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m4.5 7 7.5 6 7.5-6" />
        </g>
      )}
    </svg>
  )
}

function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer" id="site-footer">
      <FooterFlowers />
      <div className="footer-banner">
        <div className="footer-topline">
          <span>YASH AUTI / PORTFOLIO</span>
          <span>SELECTED WORK · {year}</span>
        </div>

        <nav className="footer-links" aria-label="Social links">
          {socialLinks.map(({ name, url }) => {
            const isEmail = name === 'Email'

            return (
              <a
                href={url}
                key={name}
                target={isEmail ? undefined : '_blank'}
                rel={isEmail ? undefined : 'noopener noreferrer'}
                aria-label={isEmail ? 'Email Yash at yash.autipaypal@gmail.com' : `Visit ${name} profile`}
              >
                <SocialIcon name={name} />
                <span>{name}</span>
                <span className="footer-link-arrow" aria-hidden="true">↗</span>
              </a>
            )
          })}
          <a className="footer-back-top" href="#page-top">
            <span aria-hidden="true">↑</span> Back to top
          </a>
        </nav>

        <p className="footer-name" aria-label="Yash Auti">Yash Auti</p>
      </div>
      <div className="footer-baseline">
        <span>INDEPENDENT CREATIVE STUDIO</span>
        <span>© {year} YASH AUTI</span>
      </div>
    </footer>
  )
}

export default SiteFooter
