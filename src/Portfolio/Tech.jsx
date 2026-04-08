import React from 'react';
import './Tech.css';

const Tech = () => {
    const techStack = [
  {
    category: "Frontend Development",
    skills: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Bootstrap",
      "Responsive Web Design",
      "DOM Manipulation",
      "jQuery"
    ]
  },
  {
    category: "Frontend Advanced",
    skills: [
      "React Hooks",
      "Context API",
      "React Router",
      "Component-based Architecture",
      "Form Handling",
      "API Integration (Axios)",
      "Cross-Browser Compatibility"
    ]
  },
  {
    category: "Backend Development",
    skills: [
      "Java",
      "Spring Boot",
      "REST API Development",
      "JSP",
      "Servlets",
      "MVC Architecture",
      "Dependency Injection"
    ]
  },
  {
    category: "Database",
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "SQL (DDL, DML)",
      "Joins & Queries",
      "Database Design Basics"
    ]
  },
  {
    category: "Programming Concepts",
    skills: [
      "Object-Oriented Programming (OOP)",
      "Collections Framework",
      "Exception Handling",
      "Multithreading",
      "File Handling",
      "Java 8 (Lambda, Streams Basics)"
    ]
  },
  {
    category: "Tools & Technologies",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Git Bash",
      "REST APIs",
      "Version Control"
    ]
  }
];

    return (
        <section id="tech" className="tech-section">
            <div className="container">
                <div className="tech-header">
                    <h2 className="tech-header-title">Tech Stack</h2>
                    <p className="tech-header-desc">
                        A curated list of technologies I use to build scalable and performant applications.
                    </p>
                </div>

                <div className="tech-grid">
                    {techStack.map((tech, index) => (
                        <div key={index} className="tech-card">
                            <div className="tech-card-header">
                                <span className="tech-card-indicator"></span>
                                <h3 className="tech-card-title">{tech.category}</h3>
                            </div>
                            <div className="tech-skills">
                                {tech.skills.map((skill, idx) => (
                                    <span key={idx} className="tech-skill-tag">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tech;
