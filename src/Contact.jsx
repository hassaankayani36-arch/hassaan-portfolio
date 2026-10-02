import './Contact.css'
import { useState } from 'react'

const contactEmail = 'hassaankayani36@gmail.com'
const contactPhone = '+923190731434'

function Contact() {
    const [messageStatus, setMessageStatus] = useState('')

    function handleSubmit(event) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const name = formData.get('name')
        const email = formData.get('email')
        const message = formData.get('message')
        const subject = `Portfolio message from ${name}`
        const body = `Name: ${name}\nEmail: ${email}\n\n${message}`

        setMessageStatus('Your email app is opening with your message ready. Send it there, and I will get back to you as soon as possible.')
        window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    }

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

                    <form className="contact-form" onSubmit={handleSubmit}>
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
                        {messageStatus && (
                            <p className="contact-form-status" role="status" aria-live="polite">
                                {messageStatus}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact