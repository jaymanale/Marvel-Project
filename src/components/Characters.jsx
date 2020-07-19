import React from 'react';

import Base from './Base';
import Loading from './Loading';
import { Link } from 'react-router-dom';
import LoadMore from './LoadMore';
import getData from './../services/GetData';
import MarvelCard from './MarvelCard';
import SearchInput from './../common/SearchInput';
import { getFilterData } from './../common/HelperFunctions';

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
  }

  handleCharacterSearch(event) {
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
  handleClearInputText() {
    this.setState({ search: '' });
  }
  showAllCharacters({ characters, search, type }) {
    characters = getFilterData(characters, 'name', search);

    return (
      <div className="container-fluid">
        <div className="row">
          {characters.length && (
            <div className="input-group col-md-8 col-lg-8 offset-md-2 offset-lg-2 mb-3">
              <SearchInput
                inputValue={search}
                onSearchInput={(e) => this.handleCharacterSearch(e)}
                onClearText={() => this.handleClearInputText()}
                searchOf={type}
              />
            </div>
          )}

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
        <Base>{this.showAllCharacters({ ...this.state })}</Base>
      </React.Fragment>
    );
  }
}

export default Characters;
