import React from 'react';
import './Restaurant.css'; // Import your styles

const restaurant = () => {
  const projects = [
    {
      title: 'La Panaderia',
      image: '/public/images/LaPanaderia.png',
      deployedLink: 'https://joellopez95.github.io/Weather-Wise/',
    },
    {
      title: 'Curry Boys BBQ',
      image: '/public/images/CurryBoys.png',
      deployedLink: 'https://joellopez95.github.io/SA-Flavor-Finder/',
    },
    {
      title: 'Zaatar Lebanese Restaurant',
      image: '/public/images/Zaatar.png',
      deployedLink:'https://github.com/joellopez95/Employee-Tracker-App',
    },
    {
      title: 'Simis Indian Cuisine',
      image: '/public/images/Simis.png',
      deployedLink: 'https://app.screencastify.com/v3/watch/7NRedju1pgdJMrAZgiix',
    },
    {
      title: 'Pollos Asados Los Nortenos',
      image: '/public/images/PollosAsados.png',
      deployedLink: 'https://example.com/project5',
    },
  ];

  return (
    <section className="portfolio-section">
      <div className="portfolio-content">
      <h2>Restaurants 🍽️</h2>

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

export default restaurant;
