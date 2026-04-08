import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container footer-container">
                <p className="footer-copyright">
                    &copy; 2026 Jillus.J.J. All rights reserved.
                </p>

                <div className="footer-links">
                    <a
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        LinkedIn
                    </a>
                    {/* Add more social links here if needed */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
