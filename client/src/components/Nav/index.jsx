import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="us">
          <li><a href="https://github.com/AnthonyStrickland?tab=repositories">Anthony Strickland</a></li>
          <li><a href="https://github.com/MCalvario?tab=repositories">Maribel Calvario</a></li>
          <li><a href="https://github.com/joellopez95?tab=repositories">Joel Lopez</a></li>
          <li><a href="https://github.com/SHoang6702">Sebastian Hoang</a></li>
          <li className="mx-3">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          <span role="img" aria-label="client/public/images/Alamo.jpg"></span>
          🍕SA Flavor Finder
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
