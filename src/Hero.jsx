import './Hero.css'

function Hero() {
    return (
        <main>
            <section className="hero" id="home">
                <div className="hero-layout">
                    <div className="hero-copy">
                        <p className="hero-intro">WELCOME TO MY PORTFOLIO</p>
                        <h1>
                            Hello, I’m <span>Hassaan Bin Saeed</span>
                        </h1>
                        <h2>
                            Frontend Developer <span className="divider">•</span> Digital Problem Solver
                        </h2>
                        <p className="hero-description">
                            I design and build modern, responsive web experiences that feel polished,
                            intuitive, and effective. From clean UI design to production-ready front-end
                            implementation, I turn ideas into digital solutions that truly work.
                        </p>
                        <p className="hero-quote">Turning ideas into interfaces. Building experiences that matter.</p>

                        <div className="hero-buttons">
                            <a className="primary-button" href="#projects">Explore My Work</a>
                            <a className="secondary-button" href="/Hassaan_Europass_CV.pdf" download>
                                Download CV
                            </a>
                        </div>

                        <div className="social-links">
                            <a href="https://github.com/hassaankayani36-arch" target="_blank" rel="noreferrer">
                                GitHub
                            </a>
                            <a
                                href="https://www.linkedin.com/in/hassaan-bin-saeed-28a9393b9/?isSelfProfile=true"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    <div className="hero-visual" aria-label="Profile picture section">
                        <div className="profile-card">
                            <div className="profile-image-wrap">
                                <img src="/hassaan-profile.jpeg" alt="Hassaan Bin Saeed" />
                            </div>
                            <div className="profile-badge">
                                <span className="badge-label">Available</span>
                                <strong>For projects</strong>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Hero
