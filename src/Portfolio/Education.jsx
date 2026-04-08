import React from 'react';
import './Education.css';

const Education = () => {
    const certifications = [
        "JavaScript Fundamentals (Great Learning)",
        "Front-End Web Development (Coursera)",
        "Responsive Web Design (Coursera)",
        "UI/UX Design Fundamentals (Coursera)"
    ];

    return (
        <section id="education" className="education-section">
            <div className="container">
                <div className="education-header">
                    <h2 className="education-header-title">Education & Certifications</h2>
                    <p className="education-header-desc">
                        My academic background and professional certifications.
                    </p>
                </div>

                {/* Education Section */}
                <div className="education-group">
                    <h3 className="education-title">
                        <svg xmlns="http://www.w3.org/2000/svg" className="title-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                        Education
                    </h3>

                    <div className="education-card">
                        <div className="education-info">
                            <h4 className="education-degree">B.E. Computer Science and Engineering</h4>
                            <p className="education-school">Mar Ephraem College of Engineering and Technology</p>
                        </div>
                        <span className="education-year">
                            2026
                        </span>
                    </div>
                </div>

                {/* Certifications Section
                <div>
                    <h3 className="education-title">
                        <svg xmlns="http://www.w3.org/2000/svg" className="title-icon-small" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Certifications
                    </h3>

                    <div className="cert-grid">
                        {certifications.map((cert, index) => (
                            <div key={index} className="cert-card">
                                <span className="cert-indicator"></span>
                                <span className="cert-name">{cert}</span>
                            </div>
                        ))}
                    </div>
                </div> */}

            </div>
        </section>
    );
};

export default Education;
