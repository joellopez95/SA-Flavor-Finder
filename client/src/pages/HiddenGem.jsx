import './HiddenGem.css'; // Import your styles

const hiddenGem = () => {
  const projects = [
    {
      title: 'The Doseum',
      image: '/images/TheDoseum.jpg',
      deployedLink: 'https://www.thedoseum.org/',
    },
    {
      title: 'Yanaguana Garden at Hemisfair',
      image: '/images/yanaguana-gardens.jpg',
      deployedLink: 'https://hemisfair.org/play/',
    },
    {
      title: 'San Antonio Zoo',
      image: '/images/Zoo.jpg',
      deployedLink:'https://sazoo.org/',
    },
    {
      title: 'The Alamo',
      image: '/images/Alamo.jpg',
      deployedLink: 'https://www.thealamo.org/',
    },
    {
      title: 'Tree Haus Tavern',
      image: '/images/treeHaus.jpg',
      deployedLink: 'https://www.treehaustavern.com/gallery',
    },
    {
      title: 'San Antonio Museum of Art',
      image: '/images/Museum.jpg',
      deployedLink: 'https://www.samuseum.org/',

    },
  ];

  return (
    <section className="portfolio-section">
      <div className="portfolio-content">
      <h1>Hidden Gems 🚀</h1>

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
