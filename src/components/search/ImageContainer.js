import React, { Component } from 'react';

class ImageContainer extends Component {
  render () {
    const { i, url } = this.props
    return (
      <div className='results-image' key={i} style={{backgroundImage: `url("${url}")`}} />
    )
  }
}

export default ImageContainer
