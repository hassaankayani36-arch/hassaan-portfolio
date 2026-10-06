import './Footer.css'

function Footer() {
    return (
        <footer className="site-footer">
            <nav className="footer-links" aria-label="Social links">
                <a href="https://github.com/hassaankayani36-arch" target="_blank" rel="noreferrer">GitHub</a>
                <span aria-hidden="true">|</span>
                <a href="https://www.linkedin.com/in/hassaan-bin-saeed-28a9393b9?utm_source=share_via&amp;utm_content=profile&amp;utm_medium=member_android" target="_blank" rel="noreferrer">LinkedIn</a>
                <span aria-hidden="true">|</span>
                <a href="mailto:hassaankayani36@gmail.com">Email</a>
            </nav>
            <p className="footer-copyright">© 2026 Hassaan</p>
        </footer>
    )
}

export default Footer