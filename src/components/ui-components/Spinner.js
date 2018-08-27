import React from 'react';
import { connect } from 'react-redux';
import { ClipLoader } from 'react-spinners';

const Spinner = (props) => {
  const { loading } = props
  return (
    <div className='spinner'>
      <ClipLoader
        color={'black'}
        loading={loading}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    loading: state.status.loading
  }
}

export default connect(mapStateToProps)(Spinner)
