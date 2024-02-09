import React from 'react';
import './Restaurant.css'; // Import your styles

const restaurant = () => {
  const projects = [
    {
      title: 'La Panaderia',
      image: '/public/images/la-panaderia.jpg',
      deployedLink: 'https://twitter.com/breadcultura',
    },
    {
      title: 'Curry Boys BBQ',
      image: '/public/images/curry-boys-bbq.webp',
      deployedLink: 'https://www.yelp.com/biz/curry-boys-bbq-san-antonio-2',
    },
    {
      title: 'Zaatar Lebanese Restaurant',
      image: '/public/images/Zaatar.jpeg',
      deployedLink:'https://www.yelp.com/biz/zaatar-lebanese-grill-san-antonio',
    },
    {
      title: 'Simis Indian Cuisine',
      image: '/public/images/simis.jpg',
      deployedLink: 'https://www.yelp.com/biz/simis-india-cuisine-san-antonio',
    },
    {
      title: 'Pollos Asados Los Nortenos',
      image: '/public/images/pollos.jpg',
      deployedLink: 'https://www.yelp.com/biz/pollos-asados-los-norte%C3%B1os-san-antonio',
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
