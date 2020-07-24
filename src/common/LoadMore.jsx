import React from 'react';

const LoadMore = (props) => {
  const { onHandleLoadMore, loadMore } = props;
  return (
    <div className="text-center mt-3">
      <button
        className="btn buttonGradiant text-white"
        style={{ borderRadius: '100px', width: '150px', letterSpacing: '3px' }}
        onClick={onHandleLoadMore}
      >
        {loadMore ? (
          <span
            className="spinner-border spinner-border-sm mx-2"
            role="status"
            aria-hidden="true"
          ></span>
        ) : (
          ' Load More...'
        )}
      </button>
    </div>
  );
};

export default LoadMore;
