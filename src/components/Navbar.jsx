import { useEffect, useMemo, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  
  const links = useMemo(() => ([
    { href: '/', label: 'Inicio' },
    { href: '/sobre', label: 'Sobre Nosotros' },
    { href: '/servicios', label: 'Servicios' },
    { href: '/contacto', label: 'Contacto' },
  ]), [])

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 900) setOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  const isActive = (path) => location.pathname === path

  return (
    <header className="navbar" aria-label="Barra de navegación">
      <div className="navbar-inner">
        <Link to="/" className="brand" aria-label="Ir al inicio">
          <img src="/images/rouse.svg" alt="Logo rosa De la Rosa" className="logo-rose" width="28" height="28" />
          <span className="brand-text">
            <span className="brand-name">De la Rosa</span>
            <span className="brand-sub">Mantenimiento e Inversiones</span>
          </span>
        </Link>
        <nav className="nav-links" aria-label="Enlaces principales">
          {links.map(l => (
            <Link 
              key={l.href} 
              to={l.href}
              className={isActive(l.href) ? 'active' : ''}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <button className="nav-toggle" aria-label="Menú" onClick={() => setOpen(v => !v)}>
          {open ? 'Cerrar' : 'Menú'}
        </button>
      </div>
      {open && (
        <div style={{ padding: '0 40px 16px' }} role="dialog" aria-label="Menú móvil">
          <div className="card" style={{ margin: '12px 0 0' }}>
            <div className="grid" style={{ gap: 12 }}>
              {links.map(l => (
                <Link 
                  key={l.href} 
                  to={l.href} 
                  onClick={() => setOpen(false)}
                  className={isActive(l.href) ? 'active' : ''}
                >
                  {l.label}
                </Link>
              ))}
              <Link className="btn" to="/contacto" onClick={() => setOpen(false)}>
                Solicitar cotización
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
