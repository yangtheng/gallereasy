import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFavourite, removeFavourite } from '../actions/favouritesActions'

class ImageContainer extends Component {
  constructor (props) {
    super(props)

    const { url, favourites } = props

    this.state = {
      hover: false,
      isFavourite: favourites.includes(url)
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
    const { addFavourite, removeFavourite, url } = this.props
    if (!this.state.isFavourite) {
      addFavourite(url)
    } else {
      removeFavourite(url)
    }
  }

  componentDidUpdate (prevProps) {
    const { url, favourites, searchResults } = this.props
    if (prevProps.favourites !== favourites || prevProps.searchResults !== searchResults) {
      this.setState({
        isFavourite: favourites.includes(url)
      })
    }
  }

  render () {
    const { i, url } = this.props
    return (
      <div className='results-image' key={i} style={{backgroundImage: `url("${url}")`}} onMouseOver={() => this.handleMouseOver()} onMouseLeave={() => this.handleMouseLeave()} onClick={() => this.handleClick()}>
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
    searchResults: state.searchResults
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
