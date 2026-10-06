import './About.css'
import profileImage from './assets/profile-picture/profile-picture.jpeg'

function About() {
    return (
        <section className="about-section" id="about">
            <div className="about-layout">
                <div className="about-content">
                    <p className="section-label">ABOUT ME</p>
                    <h2>Building useful digital experiences with purpose.</h2>
                    <p>
                        I'm <strong>Hassaan Bin Saeed</strong>, a Computer Science graduate with a
                        strong interest in <strong>Frontend Development, modern web technologies,
                            and digital solutions</strong>.
                    </p>
                    <p>
                        I enjoy transforming ideas into clean, responsive, and user-friendly web
                        experiences using technologies like <strong>HTML, CSS, JavaScript, and
                            React</strong>. Alongside development, I have a strong interest in
                        <strong> project management, teamwork, problem-solving, and turning
                            technical ideas into practical solutions</strong>.
                    </p>
                    <p>
                        I believe great digital products are not just about writing code — they are
                        about understanding people, solving problems, and creating experiences that
                        are simple and meaningful.
                    </p>
                    <p>
                        I'm continuously learning, building real-world projects, and looking for
                        opportunities where I can <strong>grow, contribute, and create something
                            valuable</strong>.
                    </p>
                </div>

                <div className="about-image-wrap">
                    <div className="about-image-frame">
                        <img src={profileImage} alt="Hassaan Bin Saeed" />
                    </div>
                    <span className="about-image-caption">Frontend Developer</span>
                </div>
            </div>
        </section>
    )
}

export default About