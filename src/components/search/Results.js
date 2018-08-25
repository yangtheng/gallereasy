import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageContainer from '../ImageContainer';
import { changeDisplayCount } from '../../actions/searchActions'

class Results extends Component {
  componentDidUpdate (prevProps) {
    if (prevProps.urlArr !== this.props.urlArr && this.props.displayCount !== 8) {
      this.props.changeDisplayCount(8)
    }
  }

  handleFetchMore () {
    this.props.changeDisplayCount(this.props.displayCount + 8)
  }

  render () {
    const { urlArr, displayCount } = this.props
    return (
      <div>
        <div className='results-container'>
          {urlArr.slice(0, displayCount).map((url, i) => <ImageContainer key={i} url={url} />)}
        </div>
        <div className='fetch-more-container'>
          {urlArr.length > 0 && displayCount < urlArr.length && (
            <div>
              <button className='fetch-more-button' onClick={() => this.handleFetchMore()}>Fetch More</button>
            </div>
          )}
          {displayCount >= urlArr.length && urlArr.length > 0 && (
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
    urlArr: state.searchResults.urlArr,
    displayCount: state.searchResults.displayCount
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
