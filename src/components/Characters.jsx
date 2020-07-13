import React from 'react';

import GetCharacterData from '../services/GetData';
import Base from './Base';
import Loading from './Loading';
import { Link } from 'react-router-dom';

class Characters extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      search: '',
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
    characters = characters.filter((character) => {
      return (
        character.name
          .toLowerCase()
          .indexOf(this.state.search.toLowerCase()) !== -1
      );
    });

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="input-group mb-3">
            <input
              type="text"
              placeholder="Search Characters"
              className="form-control"
              aria-label="search character"
              onChange={(e) => this.handleCharacterSearch(e)}
            />
          </div>
          {characters.length ? (
            characters.map((character) => (
              <div className="col-sm-12 col-md-3 m-auto" key={character.id}>
                <Link
                  to={{
                    pathname: `/characters/${character.id}`,
                    state: character,
                  }}
                >
                  <CharacterCard {...character} />
                </Link>
              </div>
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
    );
  }

  handleCharacterSearch(event) {
    console.log(event.target.value);
    this.setState({ search: event.target.value });
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

const CharacterCard = ({ name, thumbnail }) => {
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
