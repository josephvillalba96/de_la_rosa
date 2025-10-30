import React, { useState, useEffect, useRef } from "react"

export default function About() {
  const [openIdx, setOpenIdx] = useState(0)
  const toggle = (idx) => setOpenIdx((v) => (v === idx ? -1 : idx))

  const accordions = [
    {
      title: "Gestión responsable y cumplimiento",
      content:
        "Cumplimos estrictamente con la normativa vigente y mantenemos nuestra información actualizada en el registro mercantil, garantizando transparencia en cada proceso.",
    },
    {
      title: "Capacidad contractual pública y privada",
      content:
        "Estamos habilitados para celebrar contratos con entidades públicas, privadas y mixtas, ofreciendo soporte técnico y administrativo durante todo el ciclo del proyecto.",
    },
    {
      title: "Gobierno corporativo y liderazgo",
      content:
        "La representación legal recae en la Gerencia con autonomía operativa; puede designarse Subgerencia en suplencia para asegurar continuidad y respuesta oportuna.",
    },
  ]

  const parallaxRef = useRef(null)
  const parallaxBgRef = useRef(null)
  const parallaxInnerRef = useRef(null)

  useEffect(() => {
    const section = parallaxRef.current
    const bg = parallaxBgRef.current
    if (!section || !bg) return

    let ticking = false
    const bgAmplitude = 300 // Aumentado de 140 a 300 para efecto más notorio
    const innerAmplitude = 100 // Aumentado de 40 a 100 para mayor contraste

    const update = () => {
      const rect = section.getBoundingClientRect()
      const viewportH = window.innerHeight || 0
      if (rect.bottom >= 0 && rect.top <= viewportH) {
        const visible = 1 - Math.min(Math.max((rect.top + rect.height) / (viewportH + rect.height), 0), 1)
        const offset = Math.round((visible - 0.5) * bgAmplitude)
        bg.style.transform = `translateY(${offset}px) scale(1.15)` // Aumentado el scale de 1.1 a 1.15
        if (parallaxInnerRef.current) {
          parallaxInnerRef.current.style.transform = `translateY(${-Math.round(offset * (innerAmplitude / bgAmplitude))}px)`
        }
      }
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        ticking = true
        window.requestAnimationFrame(update)
      }
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
    <>
      {/* Hero de la página About (mejorado) */}
      <section className="subhero about-hero reveal" aria-label="Encabezado Sobre Nosotros">
        <div className="container subhero-inner">
          <h1>Ingeniería que transforma ideas en estructuras</h1>
          <p>
            Somos Mantenimiento Estructuras e Inversiones de la Rosa S.A.S.: desde 2020 diseñamos,
            fabricamos y montamos soluciones en ingeniería civil y estructuras metálicas desde
            Malambo, Atlántico, con enfoque en seguridad, cumplimiento y calidad.
          </p>
          <div className="cta-actions" style={{ marginTop: 16 }}>
            <a href="/servicios" className="btn">Ver servicios</a>
            <a href="/contacto" className="btn secondary">Solicitar cotización</a>
          </div>
        </div>
      </section>

      {/* Sección 1 - Quiénes Somos (imagen a la derecha) */}
    <section className="about reveal">
      <div className="container">
        <div className="about-content">
            {/* Texto izquierda */}
            <div className="about-text">
              <div className="about-subtitle">QUIÉNES SOMOS</div>
              <h2>Nuestra Trayectoria</h2>
              <div className="about-accent-line"></div>
              <div className="about-description">
                <p>
                  Mantenimiento Estructuras e Inversiones de la Rosa S.A.S. es una empresa fundada en junio de 2020 en Malambo, Atlántico, dedicada al desarrollo de proyectos de ingeniería civil y fabricación de productos metálicos estructurales y de montaje. Matriculada en la Cámara de Comercio de Barranquilla, nuestra identidad se basa en la experiencia, el compromiso y la calidad en cada obra realizada.
                </p>
              </div>
            </div>
            {/* Imagen derecha */}
          <div className="about-image">
            <div className="image-frame">
              <img 
                  src="/images/nuestra_trayectoria.jpg"
                  alt="Operarios en obra civil con acero de refuerzo"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 2 - Parallax + CTA (mejorado) */}
      <section ref={parallaxRef} className="about-parallax reveal" aria-label="Llamado a la acción">
        <div ref={parallaxBgRef} className="parallax-bg" aria-hidden="true"></div>
        <div className="parallax-overlay" aria-hidden="true"></div>
        <div className="container">
          <div ref={parallaxInnerRef} className="parallax-inner">
            <h2>Construimos confianza, calidad y resultados</h2>
            <p className="muted">
              Desde la planeación hasta el montaje estructural, somos su aliado en
              obras de ingeniería civil.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="/contacto" className="btn">Solicitar cotización</a>
              <a href="/servicios" className="btn secondary">Ver servicios</a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 3 - Acordeón de compromiso y valores */}
      <section className="about reveal">
        <div className="container">
          <div className="about-content" style={{ alignItems: 'stretch' }}>
            {/* Imagen izquierda */}
            <div className="about-image">
              <div className="image-frame">
                <img src="/images/nuestro_compromiso.jpg" alt="Supervisión de obra civil en Colombia" />
              </div>
            </div>
            {/* Texto derecha con acordeón */}
          <div className="about-text">
              <div className="about-subtitle">COMPROMISO Y VALORES</div>
              <h2>Nuestro Compromiso</h2>
              <div className="about-accent-line"></div>
              <div className="about-description">
                <p>
                  Trabajamos con estándares claros de seguridad, calidad y transparencia. Nuestro modelo de gestión está orientado a resultados medibles y a la satisfacción del cliente, respaldado por procesos documentados y equipos experimentados.
                </p>
              </div>
              <div className="accordion compromiso-accordion">
                {accordions.map((item, idx) => (
                  <div className="accordion-item" key={item.title}>
                    <button
                      className={`accordion-header ${openIdx === idx ? 'open' : ''}`}
                      onClick={() => toggle(idx)}
                      aria-expanded={openIdx === idx}
                    >
                      <span>{item.title}</span>
                      <span className="accordion-indicator" aria-hidden="true">{openIdx === idx ? '−' : '+'}</span>
                    </button>
                    {openIdx === idx && (
                      <div className="accordion-content">
                        <p>{item.content}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 4 - Misión y Visión */}
      <section className="mission-vision reveal">
        <div className="container">
          <div className="mission-vision-header">
            <div className="about-subtitle">NUESTRO PROPÓSITO</div>
            <h2>Misión y Visión</h2>
            <div className="about-accent-line"></div>
          </div>
          <div className="mission-vision-grid">
            {/* Misión */}
            <div className="mission-vision-item">
              <div className="mv-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3>Misión</h3>
              <p>
                Ofrecer soluciones integrales en ingeniería civil, fabricación y montaje de estructuras metálicas, 
                garantizando calidad, seguridad y cumplimiento en cada proyecto. Nos comprometemos a construir 
                relaciones duraderas con nuestros clientes mediante la excelencia técnica, la innovación y el 
                respeto por las normas y el medio ambiente.
              </p>
            </div>

            {/* Visión */}
            <div className="mission-vision-item">
              <div className="mv-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
              </div>
              <h3>Visión</h3>
              <p>
                Consolidarnos como empresa líder en la región Caribe colombiana en servicios de ingeniería civil 
                y estructuras metálicas, reconocidos por nuestra capacidad técnica, compromiso con la seguridad 
                y generación de valor sostenible para nuestros clientes, colaboradores y comunidades donde operamos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección 5 - CTA Final */}
      <section className="about-final-cta reveal">
        <div className="container about-final-cta-inner">
          <h2>¿Listo para construir tu próximo proyecto con nosotros?</h2>
          <p>
            Contáctanos y descubre cómo podemos transformar tus ideas en estructuras sólidas y duraderas.
          </p>
          <a href="/contacto" className="btn about-cta-btn">Contáctanos</a>
        </div>
      </section>
    </>
  )
}
