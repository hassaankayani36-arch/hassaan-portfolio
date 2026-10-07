import './Footer.css'

const socialLinks = [
    {
        name: 'GitHub',
        href: 'https://github.com/hassaankayani36-arch',
        icon: <path d="M12 .8a11.2 11.2 0 0 0-3.54 21.83c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.5-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 .1.63 2.1 3.65 1.6.1-.74.4-1.25.7-1.54-2.5-.28-5.13-1.25-5.13-5.55 0-1.23.44-2.23 1.16-3.02-.12-.29-.5-1.43.11-2.98 0 0 .95-.3 3.08 1.15a10.7 10.7 0 0 1 5.6 0c2.14-1.45 3.08-1.15 3.08-1.15.62 1.55.23 2.69.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.31-2.63 5.26-5.14 5.54.41.35.77 1.03.77 2.08v3.08c0 .3.2.65.78.54A11.2 11.2 0 0 0 12 .8Z" />,
    },
    {
        name: 'LinkedIn',
        href: 'https://www.linkedin.com/in/hassaan-bin-saeed-28a9393b9/',
        icon: <path d="M5.2 3.4a2.1 2.1 0 1 1-4.2 0 2.1 2.1 0 0 1 4.2 0ZM1.3 7h3.6v15.7H1.3V7Zm5.8 0h3.5v2.1h.05c.49-.92 1.68-2.1 3.46-2.1 3.7 0 4.39 2.44 4.39 5.62v10.08h-3.65v-8.94c0-2.13-.04-4.87-2.97-4.87-2.97 0-3.42 2.32-3.42 4.72v9.09H7.1V7Z" />,
    },
]

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
                    <a className="footer-contact-button" href="#contact">
                        Let&apos;s talk <span aria-hidden="true">↗</span>
                    </a>
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
                        <a href="#contact">Contact</a>
                    </nav>
                </div>

                <div className="footer-social-block">
                    <h3>Connect</h3>
                    <div className="footer-social-links">
                        {socialLinks.map(({ name, href, icon }) => (
                            <a
                                className="footer-social-link"
                                href={href}
                                key={name}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`Visit Hassaan on ${name}`}
                                title={name}
                            >
                                <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                    {icon}
                                </svg>
                            </a>
                        ))}
                        <a
                            className="footer-social-link footer-email-link"
                            href="mailto:hassaankayani36@gmail.com"
                            aria-label="Email Hassaan"
                            title="Email"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                                <path d="M3 5h18v14H3V5Zm1.8 1.7 7.2 5.5 7.2-5.5H4.8Zm14.4 10.6V8.8L12 14.3 4.8 8.8v8.5h14.4Z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p className="footer-copyright">© {new Date().getFullYear()} Hassaan Bin Saeed. All rights reserved.</p>
                <a className="footer-top-link" href="#home">
                    Back to top <span aria-hidden="true">↑</span>
                </a>
            </div>
        </footer>
    )
}

export default Footer