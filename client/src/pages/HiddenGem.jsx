import React from 'react';
import './HiddenGem.css'; // Import your styles

const hiddenGem = () => {
  const projects = [
    {
      title: 'The Doseum',
      image: 'Dosuem.png',
      deployedLink: 'https://www.thedoseum.org/',
      githubLink: 'https://github.com/joellopez95/Weather-Wise',
    },
    {
      title: 'Yanaguana Garden at Hemisfair',
      image: 'Hemisfair.png',
      deployedLink: 'https://hemisfair.org/play/',
    },
    {
      title: 'San Antonio Zoo',
      image: 'Zoo.jpg',
      deployedLink:'https://sazoo.org/',
    },
    {
      title: 'The Alamo',
      image: 'Alamo.jpg',
      deployedLink: 'https://www.thealamo.org/',
    },
    {
      title: 'Tree Haus Tavern',
      image: 'treeHaus.jpg',
      deployedLink: 'https://www.treehaustavern.com/gallery',
    },
    {
      title: 'San Antonio Museum of Art',
      image: '/assets/bitebits.pngmuseum.jpg',
      deployedLink: 'https://www.samuseum.org/',

    },
  ];

  return (
    <section className="portfolio-section">
      <div className="portfolio-content">
      <h2>Hidden Gems 🚀</h2>

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

export default hiddenGem;
