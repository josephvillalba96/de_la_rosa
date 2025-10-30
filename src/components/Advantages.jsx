export default function Advantages() {
  return (
    <section className="advantages reveal">
      <div className="container">
        {/* Cuerpo a dos columnas: izquierda cards, derecha texto (incluye título y subtítulo) */}
        <div className="advantages-body">
          {/* Izquierda: matriz de tarjetas */}
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
              <p className="stat-desc">Ejecución de obras civiles y metalmecánicas con equipos propios y personal calificado.</p>
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
              <p className="stat-desc">Portafolio que integra construcción, montaje y mantenimiento industrial en la región Caribe.</p>
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
              <p className="stat-desc">Relaciones de largo plazo con empresas públicas y privadas gracias a nuestro cumplimiento.</p>
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
              <p className="stat-desc">Atención a paradas de planta, emergencias y necesidades críticas con tiempos de respuesta cortos.</p>
            </div>
          </div>

          {/* Derecha: título, texto y bullets */}
          <div className="credentials">
            <div className="adv-title">
              <div className="adv-accent" aria-hidden="true"></div>
              <h2>Ventajas Competitivas</h2>
              <p className="muted">Capacidades técnicas, cumplimiento y seguridad para garantizar resultados sobresalientes.</p>
            </div>
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
      </div>
    </section>
  )
}
