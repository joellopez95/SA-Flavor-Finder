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
        <br></br>
        {/* <div className="image"> */}
        {/* <a href="./HiddenGem.jsx"> */}
            <img className="image__img" src='/images/naturalbridge.jpg' height="300" width="370" />
            <p>hidden gems</p>
            {/* <div className="image__overlay image__overlay--blur">
              <div className="image__title">Hidden Gems</div>
                  <p className="image__Description">           
                   Fun with family
                  </p> 
            </div>
            </a> */}
        {/* </div> */}

        {/* <div className="image"> */}
        {/* <a href="./FoodTrucks.jsx"> */}
            <img className="image__img" src='/images/foodtruck.jpg' height="300" width="350" />
            <p>Food Trucks</p>
            {/* <div className="image__overlay image__overlay--blur">
              <div className="image__title">FoodTrucks</div>
                  <p className="image__Description">           
                   Try one out today!
                  </p> 
           </div>
           </a> */}
        {/* </div> */}

        {/* <div className="image"> */}
        {/* <a href="./Restaurant.jsx"> */}
            <img className="image__img" src='/images/simis.jpg' height="300" width="350"/>
            <p>Restaurants</p>
{/* <div className="image__overlay image__overlay--blur">
              <div className="image__title">FoodTrucks</div>
                  <p className="image__Description">           
                   Try one out today!
                  </p> */}
            {/* </div>
            </a> */}
        {/* </div> */}
     
       </center>
       <br></br>
       </div>
      </div>   

  );
};

export default Home;

Home.jsx

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
