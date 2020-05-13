import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Images/Roofmaster-logo.png';
import List from './categoryList';
import AuthHelperMethods from '../Utils/Authentication/authHelperMethods';
import '../Utils/FA-Library';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function NavBar(props) {
  const Auth = new AuthHelperMethods();

  function handleLogOut() {
    console.log('logout successful');
    Auth.logout();
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" id='navbar'>
      <Link to='/cart' id='cart-icon'><FontAwesomeIcon icon={['fas', 'dolly-flatbed']} size='2x' className='fa-social-icon' fixedWidth /><span id='cart-icon-desc'>Cart</span></Link>

      {/*Link to Roofmaster home page in new tab*/}
      <Link className="navbar-brand" to="https://www.roofmaster.com/" target="_blank" ><img src={Logo} id="roofmaster-logo" /></Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      {/*everything below is collapsible when screen size restrictions are met */}
      <div className="collapse navbar-collapse menu-items" id="navbarSupportedContent" >
        <ul className="navbar-nav">

          {/*Link to current page*/}
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
          </li>
          <li className="nav-item active">
            {Auth.loggedIn() ?
              <Link className="nav-link" to="/login" onClick={handleLogOut}>Logout</Link>
              :
              <Link className="nav-link" to="/login">Login</Link>}
          </li>
          <li>
            <Link to='#'><FontAwesomeIcon icon={['fab', 'facebook-square']} size='2x' className='fa-social-icon' fixedWidth /></Link><span className='small-screen-toggle'>Facebook</span></li>
          <li><Link to='#'><FontAwesomeIcon icon={['fab', 'twitter']} size='2x' className='fa-social-icon fixedWidth' fixedWidth /></Link><span className='small-screen-toggle'>Twitter</span></li>
          <li><Link to='#'><FontAwesomeIcon icon={['fab', 'google']} size='2x' className='fa-social-icon' fixedWidth /></Link><span className='small-screen-toggle'>Google</span></li>
          <li><Link to='#'><FontAwesomeIcon icon={['fas', 'envelope']} size='2x' className='fa-social-icon' fixedWidth /></Link><span className='small-screen-toggle'>Email</span></li>
          {/*Dropdown for various products*/}
          <div className="nav-item dropdown small-screen-toggle">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Products
             </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <List class='' />
            </div>
          </div>
        </ul>
      </div>
      {/* <div className='desktop-only' >
        <img src='https://www.roofmaster.com/wp-content/uploads/2020/01/2020-Ribbon-Small.jpg'/>
      </div> */}
    </nav>
  )
}

