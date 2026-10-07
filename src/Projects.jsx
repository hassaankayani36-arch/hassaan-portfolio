import './Projects.css'

const projects = [
    {
        title: 'Travel & Tours Website',
        image: 'https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80',
        description: 'A responsive travel website built with React, destination cards, and modern navigation.',
        liveDemo: 'https://travel-tour-app-jmju.vercel.app/',
        github: 'https://github.com/hassaankayani36-arch/travel-tour-app/tree/master/src',
    },
    {
        title: 'Weather Dashboard',
        image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?auto=format&fit=crop&w=900&q=80',
        description: 'A clean weather dashboard that presents location-based forecasts through a simple interface.',
        liveDemo: 'https://wheather-app-8wbi.vercel.app/',
        github: 'https://github.com/hassaankayani36-arch/Wheather-App/tree/main/src',
    },
    {
        title: 'Quiz App',
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
        description: 'An interactive quiz app for testing knowledge and reviewing answers.',
        liveDemo: 'https://quiz-app-hasssaan.vercel.app/',
        github: 'https://github.com/hassaankayani36-arch/Quiz-App',
    },
    {
        title: 'Personal Portfolio',
        image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=900&q=80',
        description: 'A responsive portfolio website showcasing projects, skills, and frontend development work.',
        liveDemo: 'https://hassaan-portfolio-livid.vercel.app/',
        github: 'https://github.com/hassaankayani36-arch/hassaan-portfolio/tree/main/src',
    },
]

function Projects() {
    return (
        <section className="projects-section" id="projects">
            <div className="projects-container">
                <div className="projects-heading">
                    <p className="section-label">MY PROJECTS</p>
                    <h2>A selection of projects I've built while learning and developing my frontend skills.</h2>
                </div>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <article className="project-card" key={project.title}>
                            <div className="project-image-wrapper">
                                <img src={project.image} alt={`${project.title} preview`} loading="lazy" />
                            </div>
                            <div className="project-content">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="project-links">
                                    {project.liveDemo && (
                                        <a href={project.liveDemo} target="_blank" rel="noreferrer">Live Demo</a>
                                    )}
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noreferrer">GitHub</a>
                                    )}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects