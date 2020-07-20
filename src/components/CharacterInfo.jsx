import React from 'react';

import Base from './../common/Base';

const CharacterInfo = (props) => {
  console.log('props:', props);
  const {
    name,
    description,
    thumbnail,
    comics,
    events,
    series,
    stories,
  } = props.location.state;
  return (
    <Base>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-5 col-lg-5 offset-md-1 offset-lg-1 cardShadow p-0">
            {thumbnail && (
              <img
                src={thumbnail.path + '.' + thumbnail.extension}
                className="card-img-top img-fluid"
                alt={name}
              />
            )}
          </div>
          <div className="col-sm-12 col-md-5 col-lg-5 offset-md-1 offset-lg-1 text-dark mt-4">
            <h2 className="display-4">{name}</h2>
            <p>
              {description ? description : <i>Description not available</i>}
            </p>
            <div className="row text-center">
              {comics.items.length ? (
                <div className="col-3">
                  <p className="text-strong mb-0 textColorGradiant">Comics</p>
                  <p>{comics.available}</p>
                </div>
              ) : (
                ''
              )}
              {events.items.length ? (
                <div className="col-3">
                  <p className="text-strong mb-0 textColorGradiant">Events</p>
                  <p>{events.available}</p>
                </div>
              ) : (
                ''
              )}
              {series.items.length ? (
                <div className="col-3">
                  <p className="text-strong mb-0 textColorGradiant">Series</p>
                  <p>{series.available}</p>
                </div>
              ) : (
                ''
              )}
              {stories.items.length ? (
                <div className="col-3">
                  <p className="text-strong mb-0 textColorGradiant">Stories</p>
                  <p>{stories.available}</p>
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
};

export default CharacterInfo;
