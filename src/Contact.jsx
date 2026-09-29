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

                        <a
                            className="whatsapp-link"
                            href="https://wa.me/923190731434"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M12 2a9.8 9.8 0 0 0-8.4 14.85L2.4 22l5.29-1.39A9.8 9.8 0 1 0 12 2Zm0 17.8a8 8 0 0 1-4.08-1.12l-.29-.17-3.14.83.84-3.06-.19-.31A8 8 0 1 1 12 19.8Zm4.39-5.99c-.24-.12-1.43-.71-1.65-.79-.22-.08-.38-.12-.54.12-.16.24-.62.79-.76.95-.14.16-.28.18-.52.06-.24-.12-1.02-.38-1.94-1.2-.72-.64-1.2-1.43-1.34-1.67-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.79-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.83-.84 2.02s.86 2.34.98 2.5c.12.16 1.7 2.59 4.11 3.63.57.25 1.02.4 1.37.51.58.18 1.1.15 1.51.09.46-.07 1.43-.58 1.63-1.14.2-.55.2-1.03.14-1.13-.06-.1-.22-.16-.46-.28Z" />
                            </svg>
                            <span>Message me on WhatsApp</span>
                        </a>
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