import React from 'react';
import Base from './Base';
import errorGif from './../resources/Error-404.gif';

const PageNotFound = () => {
  return (
    <Base>
      <div className="text-center">
        <img src={errorGif} className="img-fluid" alt="loading..." />
      </div>
    </Base>
  );
};

export default PageNotFound;
