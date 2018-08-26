import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFavourite, removeFavourite } from '../actions/favouritesActions'

class ImageContainer extends Component {
  constructor (props) {
    super(props)

    const { img, favourites } = props

    this.state = {
      hover: false,
      isFavourite: favourites.filter(favourite => favourite.id === img.id).length === 1
    }
  }

  handleMouseOver () {
    this.setState({
      hover: true
    })
  }

  handleMouseLeave () {
    this.setState({
      hover: false
    })
  }

  handleClick () {
    const { addFavourite, removeFavourite, img } = this.props
    if (!this.state.isFavourite) {
      addFavourite(img)
    } else {
      removeFavourite(img)
    }
  }

  componentDidUpdate (prevProps) {
    const { img, favourites, searchResults } = this.props
    if (prevProps.favourites !== favourites || prevProps.searchResults !== searchResults) {
      this.setState({
        isFavourite: favourites.filter(favourite => favourite.id === img.id).length === 1
      })
    }
  }

  render () {
    const { i, img } = this.props
    return (
      <div className='results-image' key={i} style={{backgroundImage: `url("${img.url}")`}} onMouseOver={() => this.handleMouseOver()} onMouseLeave={() => this.handleMouseLeave()} onClick={() => this.handleClick()}>
        {this.state.isFavourite ?
          <i className='material-icons is-favourite'>favorite</i> :
          this.state.hover && <i className='material-icons not-favourite'>favorite</i>
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    favourites: state.favourites,
    searchResults: state.searchResults.imgArr
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addFavourite: (url) => {
      dispatch(addFavourite(url))
    },
    removeFavourite: (url) => {
      dispatch(removeFavourite(url))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageContainer)
