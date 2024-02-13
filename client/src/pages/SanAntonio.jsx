import './SanAntonio.css'; // Import your styles

const SanAntonio = () => {
  const projects = [
    {
      title: 'Fredricksburg Wineries',
      image: '/images/wine.jpg',
      websiteLink: 'https://www.visitfredericksburgtx.com/wineries/?utm_source=google&utm_medium=search&utm_campaign=fy24br&gad_source=1&gclid=CjwKCAiA2pyuBhBKEiwApLaIO1qg9x2Npc_XZboDuAApmB1fjcOgRgX__hDThBpx7OMK5kfZ5B71CxoCAPgQAvD_BwE',
    },
    {
      title: 'Fiesta San Antonio',
      image: '/images/Fiesta.jpg',
      websiteLink: 'https://fiestasanantonio.org/',
    },
    {
      title: 'Rodeo San Antonio',
      image: '/images/rodeo.jpg',
      websiteLink: 'https://www.sarodeo.com/',
    },
    {
      title: 'Strawberry festival Poteet',
      image: '/images/poteet.jpg',
      websiteLink: 'hhttps://strawberryfestival.com/',
    },
    {
      title: 'SXSW Music Festival',
      image: '/images/sxsw.jpg',
      websiteLink: 'https://www.sxsw.com/festivals/music/',
    },
    {
      title: 'Wurstfest NewBraunfels',
      image: '/images/Wurst.jpg',
      websiteLink: 'https://wurstfest.com/',
    }

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
    <section className="SanAntonio-section">
      <div className="SanAntonio-content">
      <h1>San Antonio and Surrounding areas 🪻 </h1>

      <div style={myStyle}>

        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={`${project.title} Screenshot`} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <div className="project-links">
                  <a href={project.websiteLink} target="_blank" rel="noopener noreferrer">
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

export default SanAntonio;
