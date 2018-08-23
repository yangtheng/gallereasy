import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import SearchContainer from './components/SearchContainer';
import FavouritesContainer from './components/FavouritesContainer';

import './App.css'

class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <Navbar />
          <div class='main-container'>
            <Route exact path='/' component={SearchContainer} />
            <Route path='/favourites' component={FavouritesContainer} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
