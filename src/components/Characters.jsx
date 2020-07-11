import React from 'react';

import CharacterCard from './MarvelCard';
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
                <Loading />
              )}
            </div>
          </div>
        </Base>
      </React.Fragment>
    );
  }
}

export default Characters;
