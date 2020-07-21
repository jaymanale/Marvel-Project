import React from 'react';

const ImageCard = ({ thumbnail, title }) => {
  return (
    <React.Fragment>
      {thumbnail && (
        <img
          src={thumbnail.path + '.' + thumbnail.extension}
          className="card-img-top img-fluid cardShadow"
          alt={title}
        />
      )}
    </React.Fragment>
  );
};

export default ImageCard;
