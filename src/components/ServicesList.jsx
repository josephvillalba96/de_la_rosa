import { Link } from 'react-router-dom'

export const servicesItems = [
  { img: '/images/services/obras_de_ingenieria_civil.jpg', title: 'Obras de Ingeniería Civil', desc: 'Construcción y adecuaciones de infraestructura con control técnico.' },
  { img: '/images/services/fabricacion_metalica.webp', title: 'Fabricación Metálica', desc: 'Elementos estructurales en acero para uso industrial y constructivo.' },
  { img: '/images/services/montaje_de_estructuras.jpg', title: 'Montaje de Estructuras', desc: 'Instalación y montaje con equipos especializados y personal calificado.' },
  { img: '/images/services/mantenimiento_industrial.jpg', title: 'Mantenimiento Industrial', desc: 'Servicios preventivos y correctivos para continuidad operativa.' },
  { img: '/images/services/Refurbishment.avif', title: 'Refurbishment', desc: 'Rehabilitación y adecuación de espacios industriales y comerciales.' },
  { img: '/images/services/gerencia_de_proyectos.jpg', title: 'Gerencia de Proyectos', desc: 'Planeación, seguimiento y control con enfoque en resultados.' },
  { img: '/images/services/Interventoría.jpg', title: 'Interventoría', desc: 'Acompañamiento técnico y aseguramiento de calidad en obra.' },
  { img: '/images/services/logistica_y_suministros.jpg', title: 'Logística y Suministros', desc: 'Gestión de compras y abastecimiento para proyectos.' },
]

export default function ServicesList() {
  return (
    <section id="portafolio" className="services-list reveal">
      <div className="container">
        <div className="services-list-header">
          <h2>Portafolio de servicios</h2>
          <p className="muted">Soluciones integrales en ingeniería civil, estructuras metálicas y gestión técnica.</p>
        </div>
        <div className="services-list-grid">
          {servicesItems.map((s) => (
            <article key={s.title} className="service-tile card">
              <div className="tile-image">
                <img src={s.img} alt={s.title} />
              </div>
              <div className="tile-body">
                <h3 className="tile-title-upper">{s.title}</h3>
                <p>{s.desc}</p>
                <div className="tile-actions">
                  <Link to="/contacto" className="tile-link">Cotizar</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
