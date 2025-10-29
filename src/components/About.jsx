export default function About() {
  return (
    <section className="about reveal">
      <div className="container">
        <div className="about-content">
          {/* Imagen izquierda */}
          <div className="about-image">
            <div className="image-frame">
              <img 
                src="/images/about-bg.jpg" 
                alt="Herramientas de construcción y planos arquitectónicos" 
              />
            </div>
          </div>
          
          {/* Contenido derecho */}
          <div className="about-text">
            <div className="about-subtitle">DESDE 2020</div>
            <h2>Nuestro objetivo entonces y ahora es entregar proyectos de calidad a tiempo</h2>
            <div className="about-accent-line"></div>
            <div className="about-description">
              <p>
                MANTENIMIENTO ESTRUCTURAS E INVERSIONES DE LA ROSA SAS es una empresa especializada en obras de ingeniería civil, fabricación de productos metálicos para uso estructural y montaje de estructuras metálicas.
              </p>
              <p>
                Desde nuestra fundación en 2020, hemos desarrollado proyectos con altos estándares de calidad, seguridad e innovación. Nuestra experiencia nos permite ofrecer soluciones integrales para la industria y la infraestructura en Colombia, manteniendo siempre nuestro compromiso con la excelencia y la puntualidad en cada entrega.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
