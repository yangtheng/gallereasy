import React from 'react';
import { connect } from 'react-redux';
import { ClipLoader } from 'react-spinners';

const Spinner = (props) => {
  return (
    <div className='spinner'>
      <ClipLoader
        sizeUnit={'px'}
        size={150}
        color={'black'}
        loading={props.loading}
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
