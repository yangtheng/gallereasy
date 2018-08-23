import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class Navbar extends Component {
  render () {
    const { favourites } = this.props
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
            Favourites({favourites.length})
          </NavLink>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    favourites: state.favourites
  }
}

export default withRouter(connect(mapStateToProps)(Navbar))
