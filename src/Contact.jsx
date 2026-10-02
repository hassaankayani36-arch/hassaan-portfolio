import './Contact.css'

const contactEmail = 'hassaankayani36@gmail.com'
const contactPhone = '+923190731434'

function Contact() {
    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <div className="contact-heading">
                    <p className="section-label">CONTACT</p>
                    <h2>Let's work together.</h2>
                </div>

                <div className="contact-layout">
                    <div className="contact-details">
                        <h3>Contact information</h3>
                        <p className="contact-name">Hassaan Bin Saeed</p>
                        <a className="contact-detail-link" href={`mailto:${contactEmail}`}>{contactEmail}</a>
                        <a className="contact-detail-link" href={`tel:${contactPhone}`}>{contactPhone}</a>


                    </div>

                    <form
                        className="contact-form"
                        action={`https://formsubmit.co/${contactEmail}`}
                        method="POST"
                    >
                        <input type="hidden" name="_subject" value="New portfolio contact message" />

                        <label htmlFor="contact-name">Full Name</label>
                        <input
                            id="contact-name"
                            name="name"
                            type="text"
                            placeholder="Your name"
                            autoComplete="name"
                            required
                        />

                        <label htmlFor="contact-email">Email Address</label>
                        <input
                            id="contact-email"
                            name="email"
                            type="email"
                            placeholder="you@example.com"
                            autoComplete="email"
                            required
                        />

                        <label htmlFor="contact-message">Message</label>
                        <textarea
                            id="contact-message"
                            name="message"
                            rows="6"
                            placeholder="How can I help?"
                            required
                        />

                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact