import React from 'react';
import loadingGif from './../resources/loading.gif';

const Loading = () => {
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-sm-4 col-md-4 col-lg-4 offset-4">
          <img
            src={loadingGif}
            className="img-fluid"
            width="300"
            height="300"
            alt="loading..."
          />
          <p className="font-weight-bold text-center mt-1">Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
