import React from 'react';

const MarvelCard = (props) => {
  const { title, thumbnail } = props.cardData;
  return (
    <div className="card text-center my-1">
      <div className="card-body">
        <div className="m-2">
          {thumbnail && (
            <img
              src={thumbnail.path + '.' + thumbnail.extension}
              className="card-img-top img-fluid"
              alt={title}
            />
          )}
        </div>
        <h5 className="card-title font-weight-lighter text-dark">{title}</h5>
      </div>
    </div>
  );
};

export default MarvelCard;