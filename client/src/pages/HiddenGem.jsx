import './HiddenGem.css'; // Import your styles

const hiddenGem = () => {
  const projects = [
    {
      title: 'The Doseum',
      image: '/images/TheDoseum.jpg',
      website: 'https://www.thedoseum.org/',
    },
    {
      title: 'Yanaguana Garden at Hemisfair',
      image: '/images/yanaguana-gardens.jpg',
      website: 'https://hemisfair.org/play/',
    },
    {
      title: 'San Antonio Zoo',
      image: '/images/SaZoo.jpg',
      website:'https://sazoo.org/',
    },
    {
      title: 'The Alamo',
      image: '/images/Alamo.jpg',
      website: 'https://www.thealamo.org/',
    },
    {
      title: 'Tree Haus Tavern',
      image: '/images/treeHaus.jpg',
      website: 'https://www.treehaustavern.com/gallery',
    },
    {
      title: 'San Antonio Museum of Art',
      image: '/images/Museum.jpg',
      website: 'https://www.samuseum.org/',

    },
  ];

  const myStyle = {
    backgroundImage: "url('images/banner.webp')",
    // height: "100vh",
    marginTop: "10px",
    marginRight: "-170px",
    marginLeft: "-170px",
    fontSize: "40px",
    backgroundSize: "2000px",
    backgroundRepeat: "no-repeat",
  };


  return (
    <section className="portfolio-section">
      <div className="portfolio-content">
      <h1>Hidden Gems 🚀</h1>

      <div style={myStyle}>

        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={`${project.title} Screenshot`} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <div className="project-links">
                  <a href={project.website} target="_blank" rel="noopener noreferrer">
                    Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default hiddenGem;
