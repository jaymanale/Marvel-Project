import React from 'react';

import CharacterCard from './components/MarvelCard';
import GetCharacterData from './services/GetCharacterData';
import Navbar from './components/Navbar';

class App extends React.Component {
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
      <div className="container-fluid">
        <Navbar />
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
    );
  }
}

export default App;
