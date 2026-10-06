import './Education.css'

const education = [
    {
        qualification: 'BS Computer Science',
        institution: 'Institute of Space Technology Islamabad',
        detail: '2026',
    },
    {
        qualification: 'FSc',
        institution: 'KRL Model College for Boys Kahuta',
        detail: 'Grade A',
    },
    {
        qualification: 'Matriculation',
        institution: 'KRL Model School For Boys Kahuta',
        detail: 'Computer Science | Grade A',
    },
]

function Education() {
    return (
        <section className="education-section" id="education">
            <div className="education-container">
                <div className="education-heading">
                    <p className="section-label">EDUCATION</p>
                    <h2>My academic background</h2>
                </div>

                <div className="education-list">
                    {education.map((item) => (
                        <article className="education-item" key={item.qualification}>
                            <h3>{item.qualification}</h3>
                            <p className="education-institution">{item.institution}</p>
                            <p className="education-detail">{item.detail}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Education