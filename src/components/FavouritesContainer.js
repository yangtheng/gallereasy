import React, { Component } from 'react';
import { connect } from 'react-redux'
import ImageContainer from './ImageContainer'

class FavouritesContainer extends Component {
  render () {
    const { favourites } = this.props
    return (
      <div className='favourites-container'>
        {favourites.map((url, i) => <ImageContainer key={i} url={url} />)}
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
