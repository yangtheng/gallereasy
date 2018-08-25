import React, { Component } from 'react';
import { connect } from 'react-redux';
import ImageContainer from '../ImageContainer';

class Results extends Component {
  constructor (props) {
    super(props)

    this.state = {
      displayCount: 0
    }
  }

  handleFetchMore () {
    this.setState(prevState => {
      return {
        displayCount: prevState.displayCount + 8
      }
    })
  }

  componentDidUpdate (prevProps) {
    if (prevProps.searchResults !== this.props.searchResults && this.state.displayCount !== 8) {
      this.setState({
        displayCount: 8
      })
    }
  }

  render () {
    const { searchResults } = this.props
    return (
      <div className='results-container'>
        {searchResults.slice(0, this.state.displayCount).map((url, i) => <ImageContainer key={i} url={url} />)}
        {searchResults.length > 0 && this.state.displayCount < searchResults.length && (
          <div className='fetch-more-container'>
            <button className='fetch-more-button' onClick={() => this.handleFetchMore()}>Fetch More</button>
          </div>
        )}
        {this.state.displayCount >= searchResults.length && searchResults.length > 0 && (
          <div className='end-of-results'>
            <p>End of Results</p>
          </div>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    searchResults: state.searchResults
  }
}

export default connect(mapStateToProps)(Results)
