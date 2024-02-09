import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    
    <div className='container' style={{ background: "black", color: "silver", justifyContent: "flex-end" }}>
     
         
      <center>
     
      <div className="">
      <p className="us">Get to know us!</p>
      <p>
        <a href="https://github.com/AnthonyStrickland">Anthony Strickland</a> |
        <a href="https://github.com/joellopez95">Joel Lopez</a> |
        <a href="https://github.com/mcalvario">Maribel Calvario</a>|
        <a href="https://github.com/SHoang6702">Sebastian Hoang</a>
      </p>
    </div>
      </center>
      <center>
        <div className="singleCol social-media-icons-white">
          <a href="https://facebook.com">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://github.com/MCalvario/React1">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://Twitter.com">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </center>
    </div>
  );
}

export default Footer;