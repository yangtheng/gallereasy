import React, { Component } from 'react';
import { connect } from 'react-redux';

class Snackbar extends Component {
  render () {
    const { error } = this.props
    return (
      <div className={error ? 'snackbar snackbar-visible' : 'snackbar'}>{error}</div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    error: state.status.error
  }
}

export default connect(mapStateToProps)(Snackbar)
