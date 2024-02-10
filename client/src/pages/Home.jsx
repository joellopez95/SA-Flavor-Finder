import { Link } from 'react-router-dom';

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

const Home = () => {
  return (
    <div className="container">
      <center>
        <h1>Welcome to SA Flavor Finder!</h1>
        <p>Choose Your Authentic Experience</p>
      </center>
      <div style={myStyle}>
        <center>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <Link to="/hiddengem" className="link-item">
              <img className="image__img" src='/images/naturalbridge.jpg' height="300" width="370" alt="Hidden Gems" />
              <p className="title">Hidden Gems</p>
            </Link>
            <Link to="/foodtrucks" className="link-item">
              <img className="image__img" src='/images/foodtruck.jpg' height="300" width="350" alt="Food Trucks" />
              <p className="title">Food Trucks</p>
            </Link>
            <Link to="/restaurants" className="link-item">
              <img className="image__img" src='/images/simis.jpg' height="300" width="350" alt="Restaurants" />
              <p className="title">Restaurants</p>
            </Link>
            <Link to="/SanAntonio" className="link-item">
              <img className="image__img" src='/images/Bluebonnet.jpg' height="300" width="350" alt="Restaurants" />
              <p className="title">San Antonio</p>
            </Link>
          </div>
        </center>
        <br />
      </div>
    </div>
  );
};

export default Home;



// import React from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   return (
//     <div className="home">
//       <h1>Welcome to SA Flavor Finder</h1>
//       <div className="card-container">
//         <Link to="/hiddengem" className="card">
//           <h2>Hidden Gems</h2>
//           <p>Discover hidden culinary treasures in your area.</p>
//         </Link>
//         <Link to="/restaurants" className="card">
//           <h2>Restaurants</h2>
//           <p>Explore delicious restaurants nearby.</p>
//         </Link>
//         <Link to="/foodtrucks" className="card">
//           <h2>Food Trucks</h2>
//           <p>Find tasty food trucks serving up delicious meals.</p>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Home;
