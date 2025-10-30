import { Link } from 'react-router-dom'

export default function ServicesCTA() {
  return (
    <section className="services-cta reveal" aria-label="Llamado a la acción de servicios">
      <div className="services-cta-bg" aria-hidden="true"></div>
      <div className="container">
        <div className="services-cta-inner">
          <blockquote className="services-quote">
            “Construimos soluciones con seguridad, cumplimiento y calidad. Hagamos que tu proyecto avance sin detenerse.”
          </blockquote>
          <div className="services-author">
            <img src="/images/avatar-business.svg" alt="Avatar empresario" className="author-avatar" />
            <div>
              <strong>Mantenimiento Estructuras De La Rosa</strong>
              <div className="muted">Ingeniería civil y estructuras metálicas</div>
            </div>
          </div>
          <div className="services-cta-actions">
            <Link to="/contacto" className="btn scta-black">Solicitar cotización</Link>
            <Link to="/servicios" className="btn scta-white">Ver servicios</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
