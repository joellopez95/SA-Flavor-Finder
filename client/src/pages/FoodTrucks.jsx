import React from 'react';
import './FoodTrucks.css'; // Import your styles

const trucks = () => {
  const foodtrucks = [
    {
      title: 'Tacos El Regio',
      image: '../public/images/TacosElRegio.png',
      websiteLink: 'https://www.tacoselregiosatx.com/',
    },
    {
      title: 'Masshole, Lobster Truck',
      image: '../public/images/Masshole.jpg',
      websiteLink: 'https://massholelobstertruck.com/',
    },
    {
      title: 'Area 51, Food Park',
      image: '../public/images/Area51.jpg',
      websiteLink: 'https://www.facebook.com/area51foodpark/',
    },
    {
      title: 'RJ Indian Street Food',
      image: '../public/images/RjIndian.jpg',
      websiteLink: 'https://www.yelp.com/biz/rj-indian-street-food-san-antonio',
    },
  ];

  return (
    <section className="trucks-section">
      <div className="trucks-content">
      <h2>Food Trucks! 🚚 </h2>

        <div className="foodtruck-container">
          {foodtrucks.map((foodtruck, index) => (
            <div className="foodtruck-card" key={index}>
              <img src={foodtruck.image} alt={`${foodtruck.title} Screenshot`} />
              <div className="foodtruck-info">
                <h3>{foodtruck.title}</h3>
                <div className="foodtruck-links">
                  <a href={foodtruck.websiteLink} target="_blank" rel="noopener noreferrer">
                    Website
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

export default trucks;
