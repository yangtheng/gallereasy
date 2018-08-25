import React, { Component } from 'react';
import SearchInput from './search/SearchInput';
import Results from './search/Results';

class SearchContainer extends Component {
  render () {
    return (
      <div>
        <SearchInput />
        <Results />
      </div>
    )
  }
}

export default SearchContainer
