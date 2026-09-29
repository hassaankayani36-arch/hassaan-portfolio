import { useState } from 'react'
import './Navbar.css'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    function closeMenu() {
        setIsMenuOpen(false)
    }

    return (
        <header className="site-header">
            <nav className="navbar">
                <a className="logo" href="#home" onClick={closeMenu}>
                    Hassaan
                </a>

                <button
                    className="menu-button"
                    type="button"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    ☰
                </button>

                <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    <li><a href="#home" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMenu}>About</a></li>
                    <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
                    <li><a href="#education" onClick={closeMenu}>Education</a></li>
                    <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                    <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                    <li><a className="contact-link" href="#contact" onClick={closeMenu}>Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Navbar
