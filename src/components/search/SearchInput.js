import React, { Component } from 'react';

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

  fetchResults () {
    window.fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.value}&api_key=G3TGUp3a1oHM8NfYbGVFMG87Trl8h2hp&limit=64`)
      .then(response => response.json())
      .then(json => {
        const urlArr = json.data.map(obj => obj.images.original.url)
      })
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.value !== prevState.value) {
      this.fetchResults()
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

export default SearchInput
