import React from "react";
//Styles
import "../scss/Footer.scss";

function Footer() {
  return (
    <ul className="socials">
      <li>
        <a
          href="https://twitter.com/burgs_co"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-twitter"></i>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/JoeLim13?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-github"></i>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/ean-han-lim-61a8b6180/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-linkedin-square"></i>
        </a>
      </li>
      <li>
        <a
          href="https://wa.me/60127370178"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-whatsapp"></i>
        </a>
      </li>
    </ul>
  );
}

export default Footer;
