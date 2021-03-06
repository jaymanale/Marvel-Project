import React from 'react';

const MarvelCard = (props) => {
  const { title, thumbnail } = props.cardData;
  return (
    <div className="card text-center my-2 cardShadow">
      <div className="card-body p-0">
        <div>
          {thumbnail && (
            <img
              src={thumbnail.path + '.' + thumbnail.extension}
              className="card-img-top img-fluid"
              alt={title}
            />
          )}
        </div>
        <h5 className="card-title font-weight-lighter text-dark mt-2">
          {title}
        </h5>
      </div>
    </div>
  );
};

export default MarvelCard;
