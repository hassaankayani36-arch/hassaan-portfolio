import './Experience.css'

const responsibilities = [
    'Build responsive web interfaces with React, JavaScript, HTML, and CSS.',
    'Create re usable components and organize clear, maintainable page layouts.',
    'Test layouts across screen sizes and refine usability through iteration.',
    'Use Git and GitHub to track and manage project code.',
]

function Experience() {
    return (
        <section className="experience-section" id="experience">
            <div className="experience-container">
                <div className="experience-heading">
                    <p className="section-label">EXPERIENCE</p>
                    <h2>Practical experience through building projects.</h2>
                </div>

                <article className="experience-entry">
                    <div className="experience-role">
                        <p className="experience-type">PROJECT-BASED EXPERIENCE</p>
                        <h3>Frontend Developer</h3>
                        <p className="experience-company">Independent Projects</p>
                    </div>

                    <div className="experience-details">
                        <h4>Responsibilities</h4>
                        <ul>
                            {responsibilities.map((responsibility) => (
                                <li key={responsibility}>{responsibility}
                                </li>
                            ))}
                        </ul>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Experience