import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useRevealOnScroll } from './hooks/useRevealOnScroll'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Advantages from './pages/Advantages'
import Sectors from './pages/Sectors'
import Contact from './pages/Contact'
import './App.css'

function AppContent() {
  useRevealOnScroll()
  
  return (
    <main id="main">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<About />} />
        <Route path="/servicios" element={<Services />} />
        <Route path="/ventajas" element={<Advantages />} />
        <Route path="/sectores" element={<Sectors />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
      <Footer />
    </main>
  )
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}