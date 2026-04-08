import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            return savedTheme === 'dark';
        }
        return true; // Default to dark theme as previous UI used hardcoded dark styles
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Brand */}
                <div className="navbar-brand">
                    Jillus
                </div>

                {/* Desktop Menu */}
                <div className="navbar-menu">
                    <a href="#about" className="navbar-link">About</a>
                    <a href="#tech" className="navbar-link">Tech</a>
                    <a href="#experience" className="navbar-link">Experience</a>
                    <a href="#education" className="navbar-link">Education</a>
                    <a href="#projects" className="navbar-link">Projects</a>
                    <a href="#contact" className="navbar-link">Contact</a>

                    <button onClick={toggleTheme} className="navbar-theme-btn">
                        {isDarkMode ? (
                            <svg xmlns="http://www.w3.org/2000/svg" className="theme-icon" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" className="theme-icon" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M6 .278a.77.77 0 0 1 .08.858 7.2 7.2 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277q.792-.001 1.533-.16a.79.79 0 0 1 .812.316.73.73 0 0 1-.031.893A8.35 8.35 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.75.75 0 0 1 6 .278M4.858 1.311A7.27 7.27 0 0 0 1.018 7.71c0 3.866 3.199 7.023 7.022 7.023a7.3 7.3 0 0 0 5.483-2.434 8.2 8.2 0 0 1-8.68-8.682z"/>
                            </svg>
                        )}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
