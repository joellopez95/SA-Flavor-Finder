import React from 'react';
import './Restaurant.css'; // Import your styles

const Portfolio = () => {
  const projects = [
    {
      title: 'Weather Wise',
      image: '/assets/weather-wise.png',
      deployedLink: 'https://joellopez95.github.io/Weather-Wise/',
      githubLink: 'https://github.com/joellopez95/Weather-Wise',
    },
    {
      title: 'SA-Flavor-Finder',
      image: '/assets/SA-Flavor.png',
      deployedLink: 'https://joellopez95.github.io/SA-Flavor-Finder/',
      githubLink: 'https://github.com/joellopez95/SA-Flavor-Finder',
    },
    {
      title: 'Employee-Tracker-App',
      image: '/assets/EmployeeTrack.png',
      deployedLink:'https://github.com/joellopez95/Employee-Tracker-App',
      githubLink: 'https://github.com/joellopez95/Employee-Tracker-App'
    },
    {
      title: 'SocialNoSQL-API',
      image: '/assets/NoSQL.png',
      deployedLink: 'https://app.screencastify.com/v3/watch/7NRedju1pgdJMrAZgiix',
      githubLink: 'https://github.com/joellopez95/SocialNoSQL-API',
    },
    {
      title: 'PWA-Text-Editor',
      image: '/assets/JATE.png',
      deployedLink: 'https://example.com/project5',
      githubLink: 'https://github.com/joellopez95/Progressive-Web-Applications-PWA-Text-Editor',
    },
    {
      title: 'Bite-Bits',
      image: '/assets/bitebits.png',
      deployedLink: 'https://bitebits0830-78de9fe35f6a.herokuapp.com/',
      githubLink: 'https://github.com/codyleight/DishDash',
    },
  ];

  return (
    <section className="portfolio-section">
      <div className="portfolio-content">
      <h2>My Portfolio 🚀</h2>

        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={`${project.title} Screenshot`} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <div className="project-links">
                  <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                    Deployed App
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub Repository
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
