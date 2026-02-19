import { useState } from 'react'
import './Navbar.css'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">IRONCORE FITNESS</span>
        </div>
        
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#programs" onClick={closeMenu}>Programs</a>
          <a href="#trainers" onClick={closeMenu}>Trainers</a>
          <a href="#membership" onClick={closeMenu}>Membership</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>

        <button className="btn btn-primary nav-cta">Join Now</button>
        
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
