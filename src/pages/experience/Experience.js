// src/pages/experience/Experience.js
import React, { useEffect, useState } from 'react';
import './experience.css';

const Experience = () => {
  const [filter, setFilter] = useState('All');
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const experiences = [
    {
      id: 1,
      type: 'Internship',
      title: 'Software Engineering Intern',
      company: 'Lab To Market Innovations Private Limited, Tempe, AZ',
      dates: 'May 2024 - Present',
      details: [
        'Engineered and deployed a machine learning model on AWS that achieved 82% accuracy in classifying financial transactions, reducing manual review time by 40%.',
        'Upgraded legacy Python2 codebases to Python3, resolving compatibility issues and enhancing stability.',
        'Designed a program using the Plaid API to analyze customer transactions, boosting credit scores by 20%, with streamlined data pipelines.',
      ],
      skills: ['Python', 'AWS', 'Machine Learning', 'API Design']
    },
    {
      id: 2,
      type: 'Research',
      title: 'Research Aide',
      company: 'Barrett Research Program, Tempe, AZ',
      dates: 'May 2023 - Present',
      details: [
        'Led a joint initiative with IBM to develop an AI-based NLP model for assessing colon cancer risk, improving predictive accuracy by 45% using TensorFlow and PyTorch CNN.',
        'Implemented ResNet18 models to analyze over 10,000 patient records, increasing data processing efficiency by 30%.',
      ],
      skills: ['TensorFlow', 'PyTorch', 'NLP', 'Research']
    },
    {
      id: 3,
      type: 'Internship',
      title: 'Backend Engineer',
      company: 'Jirani Software at ASU, Tempe, AZ',
      dates: 'Jan 2024 - May 2024',
      details: [
        'Prepared a custom offline digital library solution using Java and Spring Boot, enhancing network capabilities to support over 2,000 users daily and integrating advanced caching mechanisms for seamless digital resource access.',
        'Spearheaded a data pipeline with Apache Spark and Python, automating synchronization for 1500+ users, enhancing user experience.'
      ],
      skills: ['Python', 'API Development', 'C#', '.NET', 'Java', 'Spring Boot', 'Apache Spark']
    },
    {
      id: 4,
      type: 'Teaching',
      title: 'Teaching Assistant',
      company: 'Arizona State University, Tempe, AZ',
      dates: 'Aug 2023 - Dec 2023',
      details: [
        'Directed wind tunnel analysis using advanced simulations and SQL, leading to a 25% improvement in aerodynamic efficiency.',
        'Conducted specialized educational sessions on secure API development and advanced trading algorithms, automating complex calculations with VBA. This increased team proficiency by 40% and reduced security issues by 25%.',
      ],
      skills: ['SQL', 'API Development', 'VBA', 'Teaching']
    },
    {
      id: 5,
      type: 'Consulting',
      title: 'Technical Consultant',
      company: 'Arizona State University, Tempe, AZ',
      dates: 'Jan 2024 - Present',
      details: ['Provided technical consulting on various software applications and tools, enhancing digital solutions.'],
      skills: ['Consulting', 'Software Applications', 'Technical Solutions']
    },
    {
      id: 6,
      type: 'Internship',
      title: 'Student Ambassador',
      company: 'Adobe Internship, Tempe, AZ',
      dates: 'Jul 2024 - Present',
      details: [
        'Advocated for Adobe tools, organizing workshops to enhance software skills.',
        'Applied diverse skills in programming, digital creativity, and community engagement, aligning with software engineering.',
      ],
      skills: ['Public Speaking', 'Community Engagement', 'Programming']
    },
    {
      id: 7,
      type: 'Teaching',
      title: 'Section Leader & Skills Coach',
      company: 'Arizona State University, Tempe, AZ',
      dates: 'Aug 2023 - Dec 2023',
      details: ['Led coding workshops and skills sessions, focused on improving proficiency in Python, Java, and MATLAB.'],
      skills: ['Python', 'Java', 'MATLAB', 'Leadership']
    },
    {
      id: 8,
      type: 'Volunteering',
      title: 'Volunteer',
      company: 'Indian Red Cross Society - IRCS (National Headquarters, New Delhi India)',
      dates: 'Apr 2017 - Jul 2022',
      details: [
        'Actively served as a volunteer for the St. John\'s Ambulance Service, a vital division of the Indian Red Cross Society. Contributed to the mission of providing crucial medical assistance and support during emergencies, helping alleviate suffering.',
      ],
      skills: ['Volunteering', 'Medical Assistance', 'Crisis Management']
    },
    {
      id: 9,
      type: 'Volunteering',
      title: 'Student Volunteer',
      company: 'Matriculate',
      dates: 'Dec 2022 - May 2023',
      details: [
        'Mentored a cohort of low-income high school students, providing guidance on college applications and securing admission to top-tier universities.',
        'Monitored student progress and addressed challenges through regular check-ins, resulting in a 95% retention rate compared to the national average for low-income students.',
      ],
      skills: ['Mentoring', 'Education', 'Student Retention']
    },
  ];

  const filteredExperiences = experiences.filter(
    (exp) => filter === 'All' || exp.type === filter
  );

  useEffect(() => {
    const items = document.querySelectorAll('.timeline-item');
    const handleScroll = () => {
      items.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          item.style.opacity = 1;
          item.style.animationDelay = `${index * 0.2}s`; // Staggered effect
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const selectFilter = (selectedFilter) => {
    setFilter(selectedFilter);
    setDropdownOpen(false);
  };

  return (
    <div className="experience-page">
      <h1>Experience</h1>
      <div className="filter-dropdown">
        <button className="dropdown-button" onClick={toggleDropdown}>
          {filter} <span className="arrow">{isDropdownOpen ? '▲' : '▼'}</span>
        </button>
        {isDropdownOpen && (
          <div className="dropdown-menu">
            <div onClick={() => selectFilter('All')}>All</div>
            <div onClick={() => selectFilter('Internship')}>Internship</div>
            <div onClick={() => selectFilter('Research')}>Research</div>
            <div onClick={() => selectFilter('Teaching')}>Teaching</div>
            <div onClick={() => selectFilter('Consulting')}>Consulting</div>
            <div onClick={() => selectFilter('Volunteering')}>Volunteering</div>
          </div>
        )}
      </div>
      <div className="experience-scroll-container">
        <div className="timeline">
          {filteredExperiences.map((exp) => (
            <div className="timeline-item" key={exp.id}>
              <div className="timeline-content">
                <h2>{exp.title}</h2>
                <h3>{exp.company}</h3>
                <p><em>{exp.dates}</em></p>
                <ul>
                  {exp.details.map((detail, index) => <li key={index}>{detail}</li>)}
                </ul>
                <div className="skills">
                  <ul className="skill-capsules">
                    {exp.skills.map((skill, index) => (
                      <li key={index} className="skill-capsule">{skill}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { Experience };
