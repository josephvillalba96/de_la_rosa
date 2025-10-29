export default function Features() {
  return (
    <section className="features">
      <div className="container">
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 6h18l-2 13H5L3 6zM3 6L2 2H1M9 11v6M15 11v6M21 6v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2z"/>
                <path d="M8 6V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
              </svg>
            </div>
            <h3>Sistema Sostenible</h3>
            <p>Implementamos procesos de construcción sostenible con materiales eco-amigables y técnicas que minimizan el impacto ambiental, garantizando proyectos responsables y eficientes energéticamente.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                <path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <h3>Servicio Honesto</h3>
            <p>Nuestro compromiso es la transparencia total en cada proyecto. Ofrecemos cotizaciones detalladas, cronogramas realistas y comunicación constante, asegurando la confianza y satisfacción de nuestros clientes.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"/>
                <path d="M9 22V12h6v10"/>
                <path d="M12 2v20"/>
              </svg>
            </div>
            <h3>Expertos en Remodelación</h3>
            <p>Especialistas en transformación de espacios con más de 5 años de experiencia. Desde renovaciones residenciales hasta proyectos industriales complejos, entregamos resultados excepcionales que superan expectativas.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
