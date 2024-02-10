import React from 'react';
import './Restaurant.css'; // Import your styles

const restaurant = () => {
  const projects = [
    {
      title: 'La Panaderia',
      image: '/images/la-panaderia.jpg',
      deployedLink: 'https://twitter.com/breadcultura',
    },
    {
      title: 'Curry Boys BBQ',
      image: '/images/curry-boys-bbq.webp',
      deployedLink: 'https://www.yelp.com/biz/curry-boys-bbq-san-antonio-2',
    },
    {
      title: 'Zaatar Lebanese Restaurant',
      image: '/images/zaatar.png',
      deployedLink:'https://www.yelp.com/biz/zaatar-lebanese-grill-san-antonio',
    },
    {
      title: 'Simis Indian Cuisine',
      image: '/images/simis.jpg',
      deployedLink: 'https://www.yelp.com/biz/simis-india-cuisine-san-antonio',
    },
    {
      title: 'Pollos Asados Los Nortenos',
      image: '/images/pollos.jpg',
      deployedLink: 'https://www.yelp.com/biz/pollos-asados-los-norte%C3%B1os-san-antonio',
    },
  ];

  return (
    <section className="Restaurant-section">
      <div className="Restaurant-content">
      <h2>Restaurants 🍽️</h2>

        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={`${project.title} Screenshot`} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <div className="project-links">
                  <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
                    Restaurant Website
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
