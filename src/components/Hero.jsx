import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero reveal">
      <div className="container">
        <div className="subtitle" style={{marginTop: '100px'}}>CALIDAD SUPERIOR</div>
        <h1>DEL CONCEPTO<br/>A LA CONSTRUCCIÓN</h1>
        <p className="description">
          Desde 2020 ejecutando obras con calidad, seguridad e innovación.
          Ubicados en Malambo, Atlántico, Colombia.
        </p>
        <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center', marginBottom:'30px'}}>
          <Link to="/contacto" className="btn">Solicitar cotización</Link>
          <Link to="/servicios" className="btn secondary">Ver servicios</Link>
        </div>
      </div>
    </section>
  )
}
