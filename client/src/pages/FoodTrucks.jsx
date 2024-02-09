import React from 'react';
import './FoodTrucks.css'; // Import your styles

const trucks = () => {
  const foodtrucks = [
    {
      title: 'Area 51, Food Park',
      image: '../public/images/Area51.png',
      websiteLink: 'https://www.facebook.com/area51foodpark/',
    },
    {
      title: 'Masshole, Lobster Truck',
      image: '../public/images/Masshole.png',
      websiteLink: 'https://massholelobstertruck.com/',
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
