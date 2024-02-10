import './SanAntonio.css'; // Import your styles

const SanAntonio = () => {
  const projects = [
    {
      title: 'Fredricksburg Wineries',
      image: '/images/wine.jpg',
      deployedLink: 'https://www.visitfredericksburgtx.com/wineries/?utm_source=google&utm_medium=search&utm_campaign=fy24br&gad_source=1&gclid=CjwKCAiA2pyuBhBKEiwApLaIO1qg9x2Npc_XZboDuAApmB1fjcOgRgX__hDThBpx7OMK5kfZ5B71CxoCAPgQAvD_BwE',
    },
    {
      title: 'Fiesta San Antonio',
      image: '/images/Fiesta.jpg',
      deployedLink: 'https://fiestasanantonio.org/',
    },
    {
      title: 'Rodeo San Antonio',
      image: '/images/rodeo.jpg',
      deployedLink: 'https://www.sarodeo.com/',
    },
    {
      title: 'Strawberry festival Poteet',
      image: '/images/poteet.jpg',
      deployedLink: 'hhttps://strawberryfestival.com/',
    },
    {
      title: 'SXSW Music Festival',
      image: '/images/sxsw.jpg',
      deployedLink: 'https://www.sxsw.com/festivals/music/',
    },
    {
      title: 'Wurstfest NewBraunfels',
      image: '/images/Wurst.jpg',
      deployedLink: 'https://wurstfest.com/',
    }

  ];

  return (
    <section className="SanAntonio-section">
      <div className="SanAntonio-content">
      <h2>San Antonio </h2>

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

export default SanAntonio;
