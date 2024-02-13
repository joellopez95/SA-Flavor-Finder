import { Link } from 'react-router-dom';

const myStyle = {
  backgroundImage: "url('images/banner.webp')",
  marginTop: "10px",
  marginRight: "-170px",
  marginLeft: "-170px",
  fontSize: "40px",
  backgroundSize: "2000px",
  backgroundRepeat: "no-repeat",
  minHeight: "70vh",
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
          <br/>
          <br />
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>

            <Link to="/hiddengem" className="link-item">
            <div className="image">
              <img className="image__img" src='/images/naturalbridge.jpg' height="300" width="370" alt="Hidden Gems" />
              <div className="image__overlay image__overlay--blur">
                <div className="image__title">Hidden Gems</div>
              <p className="image__description"></p>
            </div>
            </div>
            </Link>

            
            <Link to="/foodtrucks" className="link-item">
            <div className="image">
              <img className="image__img" src='/images/foodtruck.jpg' height="300" width="350" alt="Food Trucks" />
              <div className="image__overlay image__overlay--blur">
              <div className="image__title">Food Trucks</div>
              <p className="TruckCard"></p>
              </div>
              </div>
            </Link>


            <Link to="/restaurants" className="link-item">
            <div className="image">
              <img className="image__img" src='/images/simis.jpg' height="300" width="350" alt="Restaurants" />
              <div className="image__overlay image__overlay--blur">
              <div className="image__title">Restaurants</div>
              <p className="RestaurantCard"></p>
              </div>
              </div>
            </Link>


            <Link to="/SanAntonio" className="link-item">
            <div className="image">
              <img className="image__img" src='/images/Bluebonnet.jpg' height="300" width="350" alt="Restaurants" />
              <div className="image__overlay image__overlay--blur">
              <div className="image__title">Surrounding Areas</div>
              <p className="SaCard"></p>
              </div>
              </div>
            </Link>
          </div>
        </center>
        <br />
      </div>
    </div>
  );
};

export default Home;
