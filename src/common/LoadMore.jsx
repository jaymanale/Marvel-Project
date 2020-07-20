import React from 'react';

const LoadMore = (props) => (
  <div className="text-center mt-3">
    <button className="btn textColorGradiant" onClick={props.onHandleLoadMore}>
      Load More...
    </button>
  </div>
);

export default LoadMore;
