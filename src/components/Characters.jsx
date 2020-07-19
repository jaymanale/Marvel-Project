import React from 'react';

import Base from './Base';
import Loading from './Loading';
import { Link } from 'react-router-dom';
import LoadMore from './LoadMore';
import getData from './../services/GetData';
import MarvelCard from './MarvelCard';

class Characters extends React.Component {
  constructor() {
    super();
    this.state = {
      type: 'characters',
      characters: [],
      search: '',
      pageOffset: 0,
      orderBy: 'name',
    };
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const { characters } = this.state;
    const newCharacters = await getData(this.state);
    this.setState({ characters: [...characters, ...newCharacters] });
    console.log('State:', this.state);
  }

  handleCharacterSearch(event) {
    console.log(event.target.value);
    this.setState({ search: event.target.value });
  }

  handleLoadMore() {
    const { pageOffset } = this.state;

    this.setState(
      () => ({
        pageOffset: pageOffset + 10,
      }),
      this.loadData
    );
  }

  showAllCharacter({ characters }) {
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
                  <MarvelCard
                    cardData={{ ...character, title: character.name }}
                  />
                </Link>
              </div>
            ))
          ) : (
            <Loading />
          )}
        </div>

        {characters.length && (
          <LoadMore onHandleLoadMore={() => this.handleLoadMore()} />
        )}
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Base>{this.showAllCharacter({ ...this.state })}</Base>
      </React.Fragment>
    );
  }
}

export default Characters;
