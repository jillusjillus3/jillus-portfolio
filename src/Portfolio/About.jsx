import React from 'react';
import './About.css';
import resumeFile from './jillus_resumex.pdf';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container about-container">

                {/* Left Column: Text Content */}
                <div className="about-text-content">
                    <h3 className="about-subtitle">
                        Web Developer
                    </h3>

                    <h1 className="about-title">
                        Hi, I'm <br />
                        <span className="about-highlight">Jillus</span>
                    </h1>

                    <p className="about-description">
                        Java Full Stack Developer passionate about creating modern, responsive, and high-performance web applications
                    </p>

                    <div className="about-actions">
                        <a href={resumeFile} target="_blank" rel="noopener noreferrer" className="about-btn-primary">
                            Download Resume
                            <svg xmlns="http://www.w3.org/2000/svg" className="btn-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </a>

                        <a href="https://www.linkedin.com/in/jillus2004" target="_blank" rel="noopener noreferrer" className="about-social-icon">
                            {/* LinkedIn Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>

                        <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer" className="about-social-icon">
                            {/* Email Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Right Column: Image */}
                <div className="about-image-wrapper">
                    <div className="about-image-container">
                        {/* Placeholder for the laptop image */}
                        <img
                            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"
                            alt="Developer Workspace"
                            className="about-image"
                        />
                        {/* Optional overlay gradient to match the dark theme better if needed */}
                        <div className="about-image-overlay"></div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default About;
