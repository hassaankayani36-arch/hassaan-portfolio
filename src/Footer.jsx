import './Footer.css'

function Footer() {
    return (
        <footer className="site-footer">
            <nav className="footer-links" aria-label="Social links">
                <a href="https://github.com/" target="_blank" rel="noreferrer">GitHub</a>
                <span aria-hidden="true">|</span>
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
                <span aria-hidden="true">|</span>
                <a href="mailto:hassaankayani36@gmail.com">Email</a>
            </nav>
            <p className="footer-copyright">© 2026 Hassaan</p>
        </footer>
    )
}

export default Footer