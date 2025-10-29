export default function Advantages() {
  return (
    <section className="advantages reveal">
      <div className="container">
        <div className="advantages-header">
          <div>
            <h2>Ventajas Competitivas</h2>
            <p className="muted">Capacidades técnicas, cumplimiento y seguridad para garantizar resultados sobresalientes.</p>
          </div>
          <div className="badges">
            <span className="badge">Calidad certificada</span>
            <span className="badge">Seguridad industrial</span>
            <span className="badge">Entregas puntuales</span>
          </div>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 21h18"></path>
                <path d="M5 21V7l8-4v18"></path>
                <path d="M19 21V11l-6-4"></path>
              </svg>
            </div>
            <div className="stat-number">5+</div>
            <div className="stat-label">Años de experiencia</div>
            <p>Experiencia continuada ejecutando obras civiles y proyectos metalmecánicos.</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14,2 14,8 20,8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10,9 9,9 8,9"></polyline>
              </svg>
            </div>
            <div className="stat-number">80+</div>
            <div className="stat-label">Proyectos completados</div>
            <p>Portafolio que incluye construcción, montaje y mantenimiento industrial.</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="stat-number">60+</div>
            <div className="stat-label">Clientes satisfechos</div>
            <p>Relaciones de largo plazo basadas en confianza y cumplimiento.</p>
          </div>
          <div className="stat-card">
            <div className="stat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12,6 12,12 16,14"></polyline>
              </svg>
            </div>
            <div className="stat-number">24/7</div>
            <div className="stat-label">Soporte a proyectos</div>
            <p>Atención continua para paradas de planta y necesidades críticas.</p>
          </div>
        </div>

        <div className="credentials">
          <div>
            <h3>Compromiso con la seguridad y la calidad</h3>
            <p>Aplicamos normas y buenas prácticas del sector para proteger a nuestro personal y garantizar la calidad estructural de cada solución entregada.</p>
          </div>
          <ul className="cred-list">
            <li>Procedimientos y permisos de trabajo seguros</li>
            <li>Supervisión técnica permanente en obra</li>
            <li>Control de calidad en fabricación y montaje</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
