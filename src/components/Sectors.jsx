export default function Sectors() {
  const sectors = [
    { 
      name: 'Construcción', 
      desc: 'Obra civil, urbanismo y edificaciones.', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 21h18"></path>
          <path d="M5 21V7l8-4v18"></path>
          <path d="M19 21V11l-6-4"></path>
        </svg>
      )
    },
    { 
      name: 'Industrial', 
      desc: 'Adecuaciones y mantenimiento de plantas.', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
          <polyline points="9,22 9,12 15,12 15,22"></polyline>
        </svg>
      )
    },
    { 
      name: 'Petrolero', 
      desc: 'Estructuras, tubería y soporte a operación.', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 12h8"></path>
          <path d="M12 8v8"></path>
        </svg>
      )
    },
    { 
      name: 'Minero', 
      desc: 'Fabricación y montaje de componentes.', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 3h12l4 6-10 13L2 9l4-6z"></path>
          <path d="M11 3L8 9l4 13 4-13-3-6"></path>
        </svg>
      )
    },
    { 
      name: 'Energético', 
      desc: 'Soporte a proyectos eléctricos y fotovoltaicos.', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"></polygon>
        </svg>
      )
    },
    { 
      name: 'Infraestructura', 
      desc: 'Puentes, cubiertas y estructuras metálicas.', 
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <rect x="7" y="7" width="3" height="9"></rect>
          <rect x="14" y="7" width="3" height="5"></rect>
        </svg>
      )
    },
  ]
  
  return (
    <section className="sectors alt reveal">
      <div className="container">
        <h2>Sectores que Atendemos</h2>
        <p className="muted">Atendemos a diferentes industrias con equipos especializados y soluciones a la medida.</p>
        <div className="sectors-grid">
          {sectors.map(s => (
            <div key={s.name} className="sector-card">
              <div className="sector-icon">{s.icon}</div>
              <div>
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
