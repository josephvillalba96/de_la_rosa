import { useRef, useState } from 'react'

export default function Contact() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  const onSubmit = (e) => {
    e.preventDefault()
    const form = formRef.current
    const data = new FormData(form)
    const name = data.get('name')?.toString().trim()
    const email = data.get('email')?.toString().trim()
    const phone = data.get('phone')?.toString().trim()
    const company = data.get('company')?.toString().trim()
    const message = data.get('message')?.toString().trim()

    if (!name || !email || !message) {
      setStatus('error')
      return
    }

    // Fallback funcional: abrir correo con contenido prellenado
    setStatus('sending')
    const subject = encodeURIComponent('Solicitud de cotización / Contacto')
    const body = encodeURIComponent(`Nombre: ${name}\nEmpresa: ${company || ''}\nEmail: ${email}\nTeléfono: ${phone || ''}\n\nMensaje:\n${message}`)
    const mailto = `mailto:mantenimientodelarosa@hotmail.com?subject=${subject}&body=${body}`
    window.location.href = mailto
    setTimeout(() => setStatus('sent'), 400)
  }

  return (
    <section className="contact reveal">
      <div className="container">
        <div className="contact-layout">
          {/* Mapa a la izquierda */}
          <div className="contact-map">
            <h2>Ubicación</h2>
            <p className="map-subtitle">Visítanos en nuestras oficinas en Barranquilla</p>
            
            <div className="map-container">
              <iframe 
                title="Mapa Barranquilla" 
                loading="lazy" 
                allowFullScreen 
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-74.8200,10.9600,-74.7800,11.0000&layer=mapnik&marker=10.9800,-74.8000"
              ></iframe>
            </div>

            <div className="address-info">
              <div className="address-item">
                <div className="address-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
            </div>
            <div>
                  <strong>Dirección:</strong>
                  <p>CR 53 # 75 - 138 OF 17, Piso 2<br />Barranquilla, Colombia</p>
                </div>
              </div>
              <a href="https://www.openstreetmap.org/?mlat=10.9800&mlon=-74.8000&zoom=15" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="map-link">
                Ver en mapa completo →
              </a>
            </div>

            <div className="contact-buttons">
              <a 
                href="https://wa.me/573205310064" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn whatsapp-btn"
                aria-label="WhatsApp Business"
              >
                <span className="btn-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                  </svg>
                </span>
                WhatsApp Business
              </a>
              <a 
                href="tel:+573205310064" 
                className="btn call-btn"
                aria-label="Llamar Ahora"
              >
                <span className="btn-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </span>
                Llamar Ahora
              </a>
            </div>
          </div>

          {/* Formulario a la derecha */}
          <div className="contact-form">
            <h2>Envíanos un Mensaje</h2>
            <p className="form-subtitle">Completa el formulario y nos pondremos en contacto contigo lo antes posible.</p>
            
            <form ref={formRef} onSubmit={onSubmit} noValidate>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Nombre Completo *</label>
                  <input 
                    id="name"
                    className="form-input" 
                    name="name" 
                    placeholder="Tu nombre completo" 
                    aria-label="Nombre completo" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="company">Empresa</label>
                  <input 
                    id="company"
                    className="form-input" 
                    name="company" 
                    placeholder="Nombre de tu empresa" 
                    aria-label="Empresa" 
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input 
                    id="email"
                    className="form-input" 
                    type="email" 
                    name="email" 
                    placeholder="tu@email.com" 
                    aria-label="Correo electrónico" 
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Teléfono</label>
                  <input 
                    id="phone"
                    className="form-input" 
                    name="phone" 
                    placeholder="Tu número de teléfono" 
                    aria-label="Teléfono" 
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mensaje *</label>
                <textarea 
                  id="message"
                  className="form-textarea" 
                  name="message" 
                  placeholder="Cuéntanos sobre tus necesidades de seguridad industrial..." 
                  aria-label="Mensaje" 
                  rows={5} 
                  required 
                />
              </div>

              <button type="submit" className="btn submit-btn" disabled={status === 'sending'}>
                <span className="btn-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22,2 15,22 11,13 2,9 22,2"></polygon>
                  </svg>
                </span>
                {status === 'sending' ? 'Enviando…' : 'Enviar Mensaje'}
              </button>

              {status === 'error' && (
                <div className="form-error" role="alert">
                  Por favor completa los campos obligatorios.
                </div>
              )}
              {status === 'sent' && (
                <div className="form-success" role="status">
                  ¡Gracias! Abrimos tu cliente de correo.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
