import React from 'react';

const LoadMore = (props) => (
  <div className="text-center mt-1">
    <button className="btn btn-info" onClick={props.onHandleLoadMore}>
      Load More...
    </button>
  </div>
);

export default LoadMore;
