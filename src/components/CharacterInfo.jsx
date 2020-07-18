import React from 'react';
import Base from './Base';

const CharacterInfo = (props) => {
  console.log('props:', props);
  const { name, description, thumbnail, comics } = props.location.state;
  return (
    <Base>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-5 col-lg-5 offset-md-1 offset-lg-1">
            {thumbnail && (
              <img
                src={thumbnail.path + '.' + thumbnail.extension}
                className="card-img-top img-fluid"
                alt={name}
              />
            )}
          </div>
          <div className="col-sm-12 col-md-5 col-lg-5 offset-md-1 offset-lg-1 text-white">
            <h2 className="display-2">{name}</h2>
            <p>
              {description ? description : <i>Description not available</i>}
            </p>
            <div className="row">
              <div>
                <p>Comics</p>
                <p>{comics.items.length ? comics.items.length : 0}</p>
              </div>

              <p>Comics</p>
              <p>{comics.items.length ? comics.items.length : 0}</p>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default CharacterInfo;
