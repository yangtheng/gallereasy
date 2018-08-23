import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends Component {
  render () {
    return (
      <div className='navbar'>
        <div className='navbar-section navbar-logo'>
          <span>Galler<span className='navbar-logo-easy'>easy</span></span>
        </div>
        <div className='navbar-section navbar-links'>
          <NavLink exact className='navbar-link' activeClassName='navbar-link-active' to='/'>
            Search
          </NavLink>
          <NavLink className='navbar-link' activeClassName='navbar-link-active' to='/favourites'>
            Favourites
          </NavLink>
        </div>
      </div>
    )
  }
}

export default Navbar
