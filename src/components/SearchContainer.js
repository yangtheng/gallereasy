import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchInput from './search/SearchInput';
import Results from './search/Results';
import { resetSearch } from '../actions/searchActions';

class SearchContainer extends Component {
  componentWillUnmount () {
    this.props.resetSearch()
  }

  render () {
    return (
      <div>
        <SearchInput />
        <Results />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetSearch: () => {
      dispatch(resetSearch())
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchContainer)
