import React from 'react';
import loadingGif from './../resources/Spinner.gif';

const Loading = () => {
  return (
    <div className="container mt-2">
      <div className="row">
        <div className="col-sm-4 col-md-4 col-lg-4 offset-sm-4 offset-md-4 offset-lg-4 text-center">
          <img src={loadingGif} className="img-fluid" alt="loading..." />
          <p className="font-weight-bold text-dark mt-1">Loading...</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;
