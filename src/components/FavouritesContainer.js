import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageContainer from './ImageContainer';

class FavouritesContainer extends Component {
  render () {
    const { favourites } = this.props
    return (
      <div className='favourites-container'>
        {favourites.map((img, i) => <ImageContainer key={i} img={img} lastColumn={(i + 1) % 4 === 0} />)}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    favourites: state.favourites
  }
}

export default connect(mapStateToProps)(FavouritesContainer)
