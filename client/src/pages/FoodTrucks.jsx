import './FoodTrucks.css'; // Import your styles

const trucks = () => {
  const foodtrucks = [
    {
      title: 'Tacos El Regio',
      image: '/images/TacosElRegio.webp',
      websiteLink: 'https://www.tacoselregiosatx.com/',
    },
    {
      title: 'Masshole, Lobster Truck',
      image: '/images/Masshole.jpg',
      websiteLink: 'https://massholelobstertruck.com/',
    },
    {
      title: 'Area 51, Food Park',
      image: '/images/Area51.jpg',
      websiteLink: 'https://www.facebook.com/area51foodpark/',
    },
    {
      title: 'RJ Indian Street Food',
      image: '/images/rj.jpg',
      websiteLink: 'https://www.yelp.com/biz/rj-indian-street-food-san-antonio',
    },
    {
      title: 'El Sabor De Guanajuato',
      image: '/images/guanajuato.jpg',
      websiteLink: 'https://www.yelp.com/biz/el-sabor-de-guanajuato-san-antonio',
    },
    {
      title: 'Gordos Mini Tacos',
      image: '/images/gordos.jpg',
      websiteLink: 'https://www.yelp.com/biz/gordos-mini-tacos-and-snacks-san-antonio',
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
    <section className="trucks-section">
      <div className="trucks-content">
      <h1>Food Trucks! 🚚 </h1>

      <div style={myStyle}>

        <div className="trucks-container">
          {foodtrucks.map((foodtruck, index) => (
            <div className="project-card" key={index}>
              <img src={foodtruck.image} alt={`${foodtruck.title} Screenshot`} />
              <div className="project-info">
                <h3>{foodtruck.title}</h3>
                <div className="project-links">
                  <a href={foodtruck.websiteLink} target="_blank" rel="noopener noreferrer">
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

export default trucks;
