import React from 'react';

import CharacterCard from './MarvelCard';
import GetCharacterData from './../services/GetCharacterData';
import Base from './Base';

class Characters extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
    };
  }

  async componentDidMount() {
    const response = await GetCharacterData();
    const characters = response.data.data.results;
    console.log(response);
    this.setState({ characters });
  }

  render() {
    let { characters } = this.state;

    return (
      <React.Fragment>
        <Base>
          <div className="container-fluid">
            <div className="row">
              {characters.length ? (
                characters.map((character) => (
                  <CharacterCard key={character.id} character={character} />
                ))
              ) : (
                <h3>Loading...</h3>
              )}
            </div>
          </div>
        </Base>
      </React.Fragment>
    );
  }
}

export default Characters;
