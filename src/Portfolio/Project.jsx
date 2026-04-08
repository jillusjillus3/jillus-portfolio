import React from 'react';
import './Project.css';

const Project = () => {
    const projects = [
        {
            title: "Library Management System",
            category: "Full Stack / UI Development",
            image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
            description: "A digital solution designed to streamline cataloging, borrowing, and tracking library resources efficiently.",
            tags: ["#Java", "#Swing", "#MY SQL"]
        }
    ];

    return (
        <section id="projects" className="project-section">
            <div className="container">
                <div className="project-header">
                    <h2 className="project-header-title">Featured Projects</h2>
                    <p className="project-header-desc">
                        A selection of projects that demonstrate my skills and passion for building.
                    </p>
                    <button className="project-header-btn">
                        Projects
                    </button>
                </div>

                <div className="project-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            {/* Image Container with Overlay */}
                            <div className="project-image-container">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="project-image"
                                />
                                <div className="project-image-overlay"></div>
                                <div className="project-badge">
                                    {project.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-desc">
                                    {project.description}
                                </p>
                                <div className="project-tags">
                                    {project.tags.map((tag, idx) => (
                                        <span key={idx} className="project-tag">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Project;
