import React from 'react';

function Footer(props) {
  return (
    <div id='footer'>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Menu
        </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
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