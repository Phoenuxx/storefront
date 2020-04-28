import React from 'react';
import Logo from '../Utils/images/Roofmaster-logo.png';

const products = ['Closeout Specials', 'Conveyors', 'Drains', 'Fall Protection & Roof Safety', 'Hand Tools',
  'Hoisting Equipment', 'Ladders, Stages & Hatches', 'Leather Accessories', 'Membranes & Flashings',
  'Mops', 'Nails & Fasteners', 'On Deck Equipment', 'Paints and Primers', 'Personal Protection & Safety',
  'Replacement Engines', 'Roofmaster Kettles', 'Single Ply Tools & Equipment', 'Spraying Systems',
  'Tear Off Tools', 'Tires', 'Truck Accessories', 'Uncategorized', 'Vents & Roof Accessories']


export default function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      {/*Link to Roofmaster home page in new tab*/}
      <a className="navbar-brand" href="https://www.roofmaster.com/" target="_blank" ><img src={Logo} id="roofmaster-logo" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      {/*everything below is collapsible when screen size restrictions are met */}
      <div className="collapse navbar-collapse menu-items" id="navbarSupportedContent" >
        <ul className="navbar-nav">
  
          {/*Link to current page*/}
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          {/*Dropdown for various products*/}
          <div className="nav-item dropdown small-screen-toggle">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Products
             </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              {products.map((product, i) => { return <div key={i} > <a className="dropdown-item" href="#">{product}</a>   <div className="dropdown-divider"></div></div> })}
            </div>
          </div>
        </ul>
     
      </div>

    </nav>
  )
}

