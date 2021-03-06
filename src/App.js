import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchContainer from './components/SearchContainer';
import FavouritesContainer from './components/FavouritesContainer';
import Snackbar from './components/ui-components/Snackbar';

import './App.css'

class App extends Component {
  render () {
    return (
      <Router basename={process.env.REACT_APP_NAME}>
        <div className='main-container'>
          <Navbar />
          <div className='body-container'>
            <Switch>
              <Route exact path='/' component={SearchContainer} />
              <Route path='/favourites' component={FavouritesContainer} />
            </Switch>
          </div>
          <Snackbar />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
