import React from 'react';

const BasicInfo = ({ title, description }) => {
  return (
    <React.Fragment>
      <div>
        <h2 className="display-4 mt-3">{title}</h2>
        <p>{description ? description : <i>Description not available</i>}</p>
      </div>
    </React.Fragment>
  );
};

export default BasicInfo;
