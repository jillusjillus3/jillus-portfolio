import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container contact-container">
                <div className="contact-header">
                    <h2 className="contact-header-title">Get In Touch</h2>
                    <p className="contact-header-desc">
                        I am currently open to freelance projects and full-time opportunities. Let's discuss how I can contribute to your team or bring your ideas to life.
                    </p>
                </div>

                <div className="contact-layout">

                    {/* Contact Information (Left Column) */}
                    <div className="contact-info-col">
                        <h3 className="contact-info-title">Contact Information</h3>

                        <div className="contact-info-item">
                            <div className="contact-info-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" className="contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="contact-info-content">
                                <h4 className="contact-info-label">Email Me</h4>
                                <a href="mailto:jillusjillus4@gmail.com" className="contact-info-link">jillusjillus4@gmail.com</a>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-info-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" className="contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div className="contact-info-content">
                                <h4 className="contact-info-label">Call Me</h4>
                                <a href="tel:+919791711878" className="contact-info-link mb-1">+91 9791711878</a>
                                <p className="contact-info-subtext">Available: 10 AM – 10 PM IST (India)</p>
                            </div>
                        </div>

                        <div className="contact-info-item">
                            <div className="contact-info-icon-wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" className="contact-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                            </div>
                            <div className="contact-info-content">
                                <h4 className="contact-info-label">Location</h4>
                                <p className="contact-info-text">Kanyakumari, Tamil Nadu</p>
                            </div>
                        </div>

                        <div className="contact-quote-box">
                            <p className="contact-quote-text">
                                "Dedicated to delivering exceptional web experiences through clean code and user-centric design."
                            </p>
                        </div>
                    </div>

                    {/* Contact Form (Right Column) */}
                    <div className="contact-form-col">
                        <div className="contact-form-card">
                            <form className="contact-form">
                                <div className="contact-form-group">
                                    <label htmlFor="name" className="contact-form-label">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        placeholder="Enter your name"
                                        className="contact-form-input"
                                    />
                                </div>
                                <div className="contact-form-group">
                                    <label htmlFor="email" className="contact-form-label">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        className="contact-form-input"
                                    />
                                </div>
                                <div className="contact-form-group">
                                    <label htmlFor="message" className="contact-form-label">Message</label>
                                    <textarea
                                        id="message"
                                        rows="4"
                                        placeholder="Tell me about your project..."
                                        className="contact-form-textarea"
                                    ></textarea>
                                </div>
                                <button type="submit" className="contact-form-submit">
                                    Send Message
                                    <svg xmlns="http://www.w3.org/2000/svg" className="submit-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
