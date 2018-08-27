import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageContainer from '../ImageContainer';
import { changeDisplayCount } from '../../actions/searchActions';

class Results extends Component {
  componentDidUpdate (prevProps) {
    if (prevProps.imgArr !== this.props.imgArr && this.props.displayCount !== 8) {
      this.props.changeDisplayCount(8)
    }
  }

  handleFetchMore () {
    this.props.changeDisplayCount(this.props.displayCount + 8)
  }

  render () {
    const { imgArr, displayCount, query } = this.props
    return (
      <div>
        <div className='results-container'>
          {query && imgArr.length > 0 && imgArr.slice(0, displayCount).map((img, i) => <ImageContainer key={i} img={img} />)}
          {query && imgArr.length === 0 && (
            <div className='no-results'>
              <p>No Results</p>
            </div>
          )}
        </div>
        <div className='fetch-more-container'>
          {imgArr.length > 0 && displayCount < imgArr.length && (
            <div>
              <button className='fetch-more-button' onClick={() => this.handleFetchMore()}>Fetch More</button>
            </div>
          )}
          {displayCount >= imgArr.length && imgArr.length > 0 && (
            <div className='end-of-results'>
              <p>End of Results</p>
            </div>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    imgArr: state.searchResults.imgArr,
    displayCount: state.searchResults.displayCount,
    query: state.searchResults.query
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeDisplayCount: (displayCount) => {
      dispatch(changeDisplayCount(displayCount))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)
