import React from 'react';

const NoResultFound = ({ type }) => {
  return (
    <div className="text-center text-white">
      <p>
        No {type} Available
        <span className="mx-1" role="img" aria-label="No Details">
          😞
        </span>
      </p>
    </div>
  );
};

export default NoResultFound;
