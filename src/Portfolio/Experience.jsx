import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            company: "Zenruva",
            role: "Freelance Front-End Developer",
            period: "Present",
            description: "• Developed responsive UI components using React (JSX) and Tailwind CSS to improve layout consistency and usability.\n• Optimized page responsiveness and cross-device compatibility for smoother user interaction.\n• Delivered production-ready features aligned with client requirements for the Zenruva platform."
        }
    ];

    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <div className="experience-header">
                    <h2 className="experience-header-title">Experience</h2>
                    <p className="experience-header-desc">
                        My professional journey and career highlights.
                    </p>
                </div>

                <div className="experience-timeline">
                    {/* Vertical Line */}
                    <div className="experience-timeline-line"></div>

                    {experiences.map((exp, index) => (
                        <div key={index} className={`experience-item ${index % 2 === 0 ? 'experience-item-reverse' : ''}`}>

                            {/* Spacer for desktop alignment */}
                            <div className="experience-spacer"></div>

                            {/* Timeline Node/Icon */}
                            <div className="experience-node">
                                <svg xmlns="http://www.w3.org/2000/svg" className="node-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>

                            {/* Content Card */}
                            <div className={`experience-content-wrapper ${index % 2 === 0 ? 'experience-content-right' : 'experience-content-left'}`}>
                                <div className="experience-card">
                                    <h4 className="experience-date">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="date-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    
                                        {exp.period}
                                    </h4>
                                    <h3 className="experience-role">{exp.role}</h3>
                                    <p className="experience-company">{exp.company}</p>
                                    <p className="experience-desc" style={{ whiteSpace: 'pre-line' }}>
                                        {exp.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
