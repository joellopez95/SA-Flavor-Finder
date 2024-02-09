import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='container' style={{ background: "black", color: "silver", justifyContent: "flex-end" }}>
      <h1>Contact Me</h1>
      <center>
        <p><h2>Send me a message!</h2></p>
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