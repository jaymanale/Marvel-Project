import React from 'react';

import GetCharacterData from '../services/GetData';
import Base from './Base';
import Loading from './Loading';

class Characters extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
    };
  }

  async componentDidMount() {
    const response = await GetCharacterData('characters');
    const characters = response.data.data.results;
    console.log(characters);
    this.setState({ characters });
  }
  handleCharacter(characterId) {
    console.log('character ID:', characterId);
  }

  showAllCharacter(characters) {
    return (
      <div className="container-fluid">
        <div className="row">
          {characters.length ? (
            characters.map((character) => (
              <div
                className="col-sm-12 col-md-3 m-auto"
                key={character.id}
                onClick={() => {
                  this.handleCharacter(character.id);
                }}
              >
                <CharacterCardIn {...character} />
              </div>
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
    );
  }

  render() {
    let { characters } = this.state;

    return (
      <React.Fragment>
        <Base>{this.showAllCharacter(characters)}</Base>
      </React.Fragment>
    );
  }
}

const CharacterCardIn = ({ name, thumbnail }) => {
  return (
    <div className="card text-center my-1">
      <div className="card-body">
        <div className="m-2">
          <img
            src={thumbnail.path + '.' + thumbnail.extension}
            className="card-img-top img-fluid"
            alt={name}
          />
        </div>
        <h5 className="card-title font-weight-bold">{name}</h5>
      </div>
    </div>
  );
};

export default Characters;
