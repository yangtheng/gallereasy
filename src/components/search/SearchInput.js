import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storeResults, resetSearch } from '../../actions/searchActions'
import { fetchResults } from '../../api/search'

class SearchInput extends Component {
  constructor (props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  handleChange (e) {
    this.setState({
      value: e.target.value
    })
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.value !== prevState.value) {
      this.props.resetSearch()
      fetchResults(this.state.value)
        .then(urlArr => this.props.storeResults(urlArr))
        .catch(err => console.log(err))
    }
  }

  render () {
    return (
      <div className='search-input-container'>
        <input className='search-input-field' placeholder='Start searching for images!' value={this.state.value} onChange={(e) => this.handleChange(e)} />
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    storeResults: (urlArr) => {
      dispatch(storeResults(urlArr))
    },
    resetSearch: () => {
      dispatch(resetSearch())
    }
  }
}

export default connect(null, mapDispatchToProps)(SearchInput)
