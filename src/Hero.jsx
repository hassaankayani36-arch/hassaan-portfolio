import './Hero.css'

function Hero() {
    return (
        <main>
            <section className="hero" id="home">
                <div className="hero-content">
                    <p className="hero-intro">WELCOME TO MY PORTFOLIO</p>
                    <h1>Hello, I'm <span>Hassaan Bin Saeed</span></h1>
                    <h2>Frontend Developer <b>&amp;</b> Digital Problem Solver</h2>
                    <p className="hero-description">
                        I craft modern, responsive, and engaging web experiences using React and
                        JavaScript. I'm passionate about turning ideas into intuitive interfaces,
                        solving real-world problems, and building digital products that are simple,
                        functional, and impactful.
                    </p>
                    <p className="hero-quote">Turning ideas into interfaces. Building experiences that matter.</p>
                    <div className="hero-buttons">
                        <a className="primary-button" href="#projects">Explore My Work</a>
                        <a className="secondary-button" href="/Hassaan_Europass_CV.pdf" download>Download CV</a>
                    </div>
                    <div className="social-links">
                        <a href="https://github.com/hassaankayani36-arch" target="_blank" rel="noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/hassaan-bin-saeed-28a9393b9/?isSelfProfile=true" target="_blank" rel="noreferrer">LinkedIn</a>
                    </div>
                </div>
            </section>
        </main >
    )
}

export default Hero
