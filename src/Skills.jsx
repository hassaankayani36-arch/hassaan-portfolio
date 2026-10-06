import { useState } from 'react'
import './Skills.css'

const skills = [
    { name: 'HTML5', category: 'Frontend', description: 'Markup Language', icon: '</>' },
    { name: 'CSS3', category: 'Frontend', description: 'Web Styling', icon: '#' },
    { name: 'JavaScript', category: 'Frontend', description: 'Programming Language', icon: 'JS' },
    { name: 'React', category: 'Frontend', description: 'Frontend Library', icon: 'R' },
    { name: 'React Router', category: 'Frontend', description: 'Page Navigation', icon: 'RR' },
    { name: 'Responsive Design', category: 'Frontend', description: 'Adaptive Interfaces', icon: 'RD' },
    { name: 'Git', category: 'Tools', description: 'Version Control', icon: 'G' },
    { name: 'GitHub', category: 'Tools', description: 'Code Collaboration', icon: 'GH' },
    { name: 'VS Code', category: 'Tools', description: 'Code Editor', icon: 'VS' },
    { name: 'REST APIs', category: 'Tools', description: 'Data Integration', icon: 'API' },
    { name: 'npm', category: 'Tools', description: 'Package Manager', icon: 'npm' },
    { name: 'Problem Solving', category: 'Other', description: 'Practical Solutions', icon: '?' },
    { name: 'Teamwork', category: 'Other', description: 'Collaborative Work', icon: 'TM' },
    { name: 'Project Management', category: 'Other', description: 'Organized Delivery', icon: 'PM' },
    { name: 'Communication', category: 'Other', description: 'Clear Collaboration', icon: 'C' },
    { name: 'Management', category: 'Other', description: 'Team and Task Planning', icon: 'M' },
    { name: 'Network Operator', category: 'Other', description: 'Network Operations', icon: 'NO' },
    { name: 'CSR', category: 'Other', description: 'Customer Service Representative', icon: 'CS' },
]

const categories = ['All', 'Frontend', 'Tools', 'Other']

function Skills() {
    const [selectedCategory, setSelectedCategory] = useState('All')

    const visibleSkills = selectedCategory === 'All' ? skills
        : skills.filter((skill) => skill.category === selectedCategory)

    return (
        <section className="skills-section" id="skills">
            <div className="skills-container">
                <div className="skills-heading">
                    <p className="section-label">MY SKILLS</p>
                    <h2>Technologies and tools I work with</h2>
                    <p>Practical skills I use to create reliable digital experiences.</p>
                </div>

                <div className="skill-filters" aria-label="Skill categories">
                    {categories.map((category) => (
                        <button
                            className={selectedCategory === category ? 'active' : ''}
                            key={category}
                            type="button"
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="skills-grid">
                    {visibleSkills.map((skill) => (
                        <article className="skill-card" key={skill.name}>
                            <div className="skill-icon" aria-hidden="true">{skill.icon}</div>
                            <div>
                                <h3>{skill.name}</h3>
                                <p>{skill.description}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Skills