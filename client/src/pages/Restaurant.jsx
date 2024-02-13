import './Restaurant.css'; // Import your styles

const restaurant = () => {
  const projects = [
    {
      title: 'La Panaderia',
      image: '/images/panaderia.jpg',
      deployedLink: 'https://twitter.com/breadcultura',
    },
    {
      title: 'Curry Boys BBQ',
      image: '/images/curry.jpg',
      deployedLink: 'https://www.yelp.com/biz/curry-boys-bbq-san-antonio-2',
    },
    {
      title: 'Zaatar Lebanese Restaurant',
      image: '/images/zaatar.jpeg',
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
    {
      title: 'Grist Mill Restaurant',
      image: '/images/grist.jpg',
      deployedLink: 'https://gristmillrestaurant.com/',
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
    <section className="Restaurant-section">
      <div className="Restaurant-content">
      <h1>Restaurants 🍽️</h1>

      <div style={myStyle}>

        <div className="projects-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.image} alt={`${project.title} Screenshot`} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <div className="project-links">
                  <a href={project.deployedLink} target="_blank" rel="noopener noreferrer">
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

export default restaurant;
