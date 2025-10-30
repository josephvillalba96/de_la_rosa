import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

export default function HomeParallax() {
  const sectionRef = useRef(null)
  const bgRef = useRef(null)
  const innerRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    const bg = bgRef.current
    if (!section || !bg) return

    let ticking = false
    const amplitude = 300 // Aumentado de 120 a 300 para efecto más notorio

    const update = () => {
      const rect = section.getBoundingClientRect()
      const viewportH = window.innerHeight || 0
      if (rect.bottom >= 0 && rect.top <= viewportH) {
        const visible = 1 - Math.min(Math.max((rect.top + rect.height) / (viewportH + rect.height), 0), 1)
        const offset = Math.round((visible - 0.5) * amplitude)
        bg.style.transform = `translateY(${offset}px) scale(1.15)` // Aumentado el scale de 1.1 a 1.15
        if (innerRef.current) innerRef.current.style.transform = `translateY(${-Math.round(offset * 0.35)}px)` // Aumentado de 0.3 a 0.35
      }
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) { ticking = true; window.requestAnimationFrame(update) }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <section ref={sectionRef} className="home-parallax reveal" aria-label="Parallax Home">
      <div ref={bgRef} className="home-parallax-bg" aria-hidden="true"></div>
      <div className="home-parallax-overlay" aria-hidden="true"></div>
      <div className="container">
        <div ref={innerRef} className="home-parallax-inner">
          <h2>Solidez estructural, cumplimiento y seguridad</h2>
          <p className="muted">Acompañamos tus proyectos con ingeniería civil y estructuras metálicas de alto desempeño.</p>
          <div style={{ display:'flex', gap:12, justifyContent:'center', flexWrap:'wrap' }}>
            <Link to="/servicios" className="btn">Ver servicios</Link>
            <Link to="/contacto" className="btn secondary">Solicitar cotización</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
