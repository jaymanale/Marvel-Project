import React from 'react';

const CharacterCard = ({ character }) => {
  return (
    <React.Fragment>
      <div
        key={character.id}
        className="card col-sm-3 col-md-3 col-lg-4 m-auto p-0"
      >
        <img
          src={character.thumbnail.path + '.' + character.thumbnail.extension}
          height="300px"
          width="75px"
          className="card-img-top"
          alt={character.name}
        />
        <div className="card-body">
          <h5 className="card-title">{character.name}</h5>
          <p className="card-text">{character.description}</p>
          <div className="row">
            <div className="col-sm-3 col-md-3 col-lg-3">
              <p>comics-{character.comics.available}</p>
            </div>
            <div className="col-sm-3 col-md-3 col-lg-3">
              <p>events-{character.events.available}</p>
            </div>
            <div className="col-sm-3 col-md-3 col-lg-3">
              <p>series-{character.series.available}</p>
            </div>
            <div className="col-sm-3 col-md-3 col-lg-3">
              <p>stories-{character.stories.available}</p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CharacterCard;
