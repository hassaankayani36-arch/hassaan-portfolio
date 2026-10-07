import './Footer.css'

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-grid">
                <div className="footer-brand-block">
                    <div className="footer-logo">Hassaan<span>.</span></div>
                    <p>
                        Frontend developer focused on building clean, responsive, and user-friendly
                        digital experiences that are practical and memorable.
                    </p>
                </div>

                <div className="footer-nav-block">
                    <h3>Navigation</h3>
                    <nav className="footer-links" aria-label="Main navigation">
                        <a href="#home">Home</a>
                        <a href="#about">About</a>
                        <a href="#experience">Experience</a>
                        <a href="#education">Education</a>
                        <a href="#skills">Skills</a>
                        <a href="#projects">Projects</a>
                    </nav>
                </div>

                <div className="footer-social-block">
                    <h3>Connect</h3>
                    <div className="footer-social-links">
                        <a href="https://github.com/hassaankayani36-arch" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/hassaan-bin-saeed-28a9393b9?utm_source=share_via&amp;utm_content=profile&amp;utm_medium=member_android" target="_blank" rel="noreferrer">LinkedIn</a>
                        <a href="mailto:hassaankayani36@gmail.com">Email</a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="footer-copyright">© {new Date().getFullYear()} Hassaan Bin Saeed. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer