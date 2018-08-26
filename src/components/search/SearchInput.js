import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storeResults, resetSearch, updateQuery } from '../../actions/searchActions';
import { fetchResults } from '../../api/search';

class SearchInput extends Component {
  componentDidUpdate (prevProps) {
    if (this.props.query !== prevProps.query) {
      this.props.resetSearch()
      fetchResults(this.props.query)
        .then(imgArr => this.props.storeResults(imgArr))
        .catch(err => console.log(err))
    }
  }

  handleChange (e) {
    this.props.updateQuery(e.target.value)
  }

  render () {
    return (
      <div className='search-input-container'>
        <input className='search-input-field' placeholder='Start searching for images!' value={this.props.query} onChange={(e) => this.handleChange(e)} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    query: state.searchResults.query
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeResults: (imgArr) => {
      dispatch(storeResults(imgArr))
    },
    resetSearch: () => {
      dispatch(resetSearch())
    },
    updateQuery: (query) => {
      dispatch(updateQuery(query))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput)
