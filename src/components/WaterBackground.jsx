import { useEffect, useRef } from 'react'

function WaterBackground({ accent = '#65d9ff' }) {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d', { alpha: true })
    if (!canvas || !context) return undefined

    const parsed = accent.match(/^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})$/i)
    const rgb = parsed
      ? parsed.slice(1).map((value) => Number.parseInt(value, 16))
      : [101, 217, 255]
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = 0
    let height = 0
    let pixelRatio = 1
    let frameId = 0
    let pointerX = 0
    let pointerY = 0
    let targetScroll = window.scrollY
    let currentScroll = targetScroll
    let particles = []

    function resize() {
      pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = Math.round(width * pixelRatio)
      canvas.height = Math.round(height * pixelRatio)
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
      const amount = Math.max(46, Math.min(112, Math.round((width * height) / 11500)))
      particles = Array.from({ length: amount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        depth: 0.25 + Math.random() * 0.75,
        driftX: (Math.random() - 0.5) * 0.13,
        driftY: -0.04 - Math.random() * 0.12,
        length: 3 + Math.random() * 23,
        thickness: 0.45 + Math.random() * 1.25,
        phase: Math.random() * Math.PI * 2,
        pulse: 0.35 + Math.random() * 0.8,
        angle: (Math.random() - 0.5) * 0.42,
      }))
    }

    function draw(time = 0) {
      context.clearRect(0, 0, width, height)
      const scrollDelta = targetScroll - currentScroll
      currentScroll += scrollDelta * 0.08
      const seconds = time * 0.001

      for (const particle of particles) {
        if (!reducedMotion) {
          particle.x += particle.driftX + pointerX * particle.depth * 0.035
          particle.y += particle.driftY + pointerY * particle.depth * 0.018 - scrollDelta * particle.depth * 0.025
        }

        if (particle.x < -30) particle.x = width + 30
        if (particle.x > width + 30) particle.x = -30
        if (particle.y < -30) particle.y = height + 30
        if (particle.y > height + 30) particle.y = -30

        const pulse = reducedMotion ? 0.7 : 0.5 + Math.sin(seconds * particle.pulse + particle.phase) * 0.25
        const alpha = 0.1 + particle.depth * pulse * 0.45
        const drift = Math.sin(seconds * 0.16 + particle.phase) * particle.depth * 7
        const x = particle.x + drift + pointerX * particle.depth * 9
        const y = particle.y - currentScroll * particle.depth * 0.018 + pointerY * particle.depth * 7
        const length = particle.length * (0.72 + pulse * 0.55)
        const color = `rgba(${rgb[0]}, ${rgb[1]}, ${rgb[2]}, `

        context.save()
        context.translate(x, y)
        context.rotate(particle.angle)
        context.globalAlpha = alpha
        const glint = context.createLinearGradient(-length / 2, 0, length / 2, 0)
        glint.addColorStop(0, `${color}0)`)
        glint.addColorStop(0.5, `${color}1)`)
        glint.addColorStop(1, `${color}0)`)
        context.strokeStyle = glint
        context.lineWidth = particle.thickness
        context.beginPath()
        context.moveTo(-length / 2, 0)
        context.lineTo(length / 2, 0)
        context.stroke()

        context.shadowColor = `${color}0.9)`
        context.shadowBlur = 8 * particle.depth
        context.fillStyle = `${color}0.82)`
        context.beginPath()
        context.arc(0, 0, particle.thickness * 0.75, 0, Math.PI * 2)
        context.fill()
        context.restore()
      }

      if (!reducedMotion) frameId = window.requestAnimationFrame(draw)
    }

    function handlePointerMove(event) {
      pointerX = (event.clientX / Math.max(width, 1) - 0.5) * 2
      pointerY = (event.clientY / Math.max(height, 1) - 0.5) * 2
    }

    function handleResize() {
      resize()
      if (reducedMotion) draw(performance.now())
    }

    function handleScroll() {
      targetScroll = window.scrollY
    }

    function handleVisibilityChange() {
      if (document.hidden) {
        window.cancelAnimationFrame(frameId)
      } else if (!reducedMotion) {
        frameId = window.requestAnimationFrame(draw)
      } else {
        draw(performance.now())
      }
    }

    resize()
    if (!reducedMotion) frameId = window.requestAnimationFrame(draw)
    else draw(performance.now())
    window.addEventListener('resize', handleResize)
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('scroll', handleScroll, { passive: true })
    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('visibilitychange', handleVisibilityChange)
    }
  }, [accent])

  return <canvas className="water-canvas" ref={canvasRef} aria-hidden="true" />
}

export default WaterBackground

