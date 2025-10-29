function ServiceIcon({ children }) { 
  return (
    <div className="service-icon">
      {children}
    </div>
  ) 
}

export default function Services() {
  return (
    <section className="services reveal">
      <div className="container">
        <div className="services-content">
          {/* Columna izquierda - Texto */}
          <div className="services-text">
            <div className="services-subtitle">SERVICIOS</div>
            <div className="services-accent-line"></div>
            <h2>Artesanía Excepcional, <span className="highlight">Experiencia Inigualable</span>: Nuestra Promesa Para Ti</h2>
            <div className="services-description">
              <p>Con más de 5 años de experiencia en el sector de la construcción e ingeniería civil, nos especializamos en entregar proyectos de la más alta calidad que superan las expectativas de nuestros clientes.</p>
              <p>Nuestro compromiso es brindar soluciones integrales de construcción, fabricación de estructuras metálicas y asesoría técnica especializada, garantizando la seguridad y eficiencia en cada proyecto.</p>
            </div>
            <button className="services-btn">
              Conoce Más
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          {/* Columna derecha - Tarjetas de servicios */}
          <div className="services-grid">
            <div className="service-card">
              <ServiceIcon>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                  <path d="M9 22V12h6v10"/>
                </svg>
              </ServiceIcon>
              <h3>Obras de Ingeniería Civil</h3>
              <p>Construcción y adecuación de infraestructura con control técnico y cumplimiento normativo para proyectos de gran envergadura.</p>
            </div>

            <div className="service-card">
              <ServiceIcon>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </ServiceIcon>
              <h3>Fabricación Metálica</h3>
              <p>Diseño y fabricación de elementos estructurales en acero para uso industrial y constructivo con tecnología de vanguardia.</p>
            </div>

            <div className="service-card">
              <ServiceIcon>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M3 6h18l-2 13H5L3 6zM3 6L2 2H1M9 11v6M15 11v6M21 6v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2z"/>
                </svg>
              </ServiceIcon>
              <h3>Montaje de Estructuras</h3>
              <p>Instalación y montaje de estructuras metálicas con equipos especializados y personal altamente calificado.</p>
            </div>

            <div className="service-card">
              <ServiceIcon>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </ServiceIcon>
              <h3>Mantenimiento Industrial</h3>
              <p>Servicios de mantenimiento preventivo y correctivo para asegurar continuidad operativa y máxima eficiencia.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
