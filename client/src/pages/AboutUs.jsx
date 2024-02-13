import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const backgroundStyle = {
    backgroundImage: "url('images/banner.webp')",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "75vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column", // Align items in a column
    fontSize: "40px",
    textAlign: "center" // Align text to center
  };

  const textStyle = {
    backgroundColor: "rgba(0, 0, 0, 0.8)", // Dark background color
    color: "white", // White text color
    padding: "20px",
    borderRadius: "10px",
  };

  return (
    <div>
      <div className="container my-1">
        <center>
        <h1><strong> Welcome to SA Flavor Finder! </strong></h1>
        <h2>Discover The Best Local Dining Spots For An Authentic Experience...</h2>
      </center>
      </div>
      <div style={backgroundStyle}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8" style={textStyle}>
              <h2 className="text-center mb-4">About Us</h2>
              <p className="text-center">
                We are San Antonio residents who are passionate about sharing the hidden gems, local food trucks, and restaurant treasures of our city with tourists and locals alike. Our love for food and exploration inspired us to create SA Flavor Finder. Our mission is to provide our users with an exceptional experience in discovering hidden culinary treasures and to encourage them to share their feedback and experiences with the community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;



