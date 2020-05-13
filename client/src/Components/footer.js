import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
  return (
    <div id='footer'>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Menu
        </Link>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link class="dropdown-item" to="#">Action</Link>
          </div>
        </li>
      </ul>
      <div id='company-info'>
        <h1>800.421.6174 • 800.409.7663 (fax) • sales@roofmaster.com</h1>
        <br />
        <h4>©2006-2017 ROOFMASTER. ALL RIGHTS RESERVED</h4>
      </div>
    </div>
  );
}

export default Footer;