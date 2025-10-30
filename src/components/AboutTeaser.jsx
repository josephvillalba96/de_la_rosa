import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function AboutTeaser() {
  const [openIdx, setOpenIdx] = useState(0)
  const toggle = (idx) => setOpenIdx((v) => (v === idx ? -1 : idx))

  const items = [
    {
      title: 'Obras civiles',
      content: 'Construcción y adecuaciones con altos estándares de seguridad.',
    },
    {
      title: 'Estructuras metálicas',
      content: 'Fabricación y montaje para usos industriales y arquitectónicos.',
    },
    {
      title: 'Gestión integral',
      content: 'Soporte técnico y administrativo de inicio a cierre del proyecto.',
    },
  ]

  return (
    <section className="about-teaser reveal" aria-label="Resumen sobre la empresa">
      <div className="container">
        <div className="about-teaser-grid">
          {/* Columna izquierda: imagen */}
          <div className="teaser-image">
            <div className="image-frame">
              <img src="/images/about-bg.jpg" alt="Obra civil con acero de refuerzo y montaje estructural" />
            </div>
          </div>

          {/* Columna derecha: info + acordeón */}
          <div className="teaser-text">
            <div className="teaser-subtitle">DESDE 2020</div>
            <h2>Ingeniería civil y estructuras metálicas con calidad y cumplimiento</h2>
            <p>
              Nacidos en Malambo, Atlántico, impulsamos proyectos que combinan planeación
              rigurosa, seguridad y resultados medibles. Conoce cómo transformamos ideas en obra.
            </p>
            <div className="accordion teaser-accordion" style={{ marginTop: 16 }}>
              {items.map((it, idx) => (
                <div className="accordion-item" key={it.title}>
                  <button
                    className={`accordion-header ${openIdx === idx ? 'open' : ''}`}
                    onClick={() => toggle(idx)}
                    aria-expanded={openIdx === idx}
                  >
                    <span>{it.title}</span>
                    <span className="accordion-indicator" aria-hidden="true">{openIdx === idx ? '−' : '+'}</span>
                  </button>
                  {openIdx === idx && (
                    <div className="accordion-content">
                      <p>{it.content}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="teaser-actions">
              <Link to="/sobre" className="btn">Conocer más</Link>
              <Link to="/contacto" className="btn secondary">Hablemos</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
