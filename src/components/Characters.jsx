import React from 'react';
import { Link } from 'react-router-dom';

import Base from './../common/Base';
import Loading from './../common/Loading';
import LoadMore from './../common/LoadMore';
import MarvelCard from './../common/MarvelCard';
import SearchInput from './../common/SearchInput';
import NoResultFound from './../common/NoResultFound';

import getData from './../services/GetData';
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
      loading: true,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const { characters } = this.state;
    const newCharacters = await getData(this.state);
    this.setState({
      characters: [...characters, ...newCharacters],
      loading: false,
    });
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
  showAllCharacters({ characters, search, type, loading }) {
    characters = getFilterData(characters, 'name', search);

    return (
      <div className="container-fluid">
        <div className="row">
          <SearchInput
            inputValue={search}
            onSearchInput={(e) => this.handleCharacterSearch(e)}
            onClearText={() => this.handleClearInputText()}
            searchOf={type}
          />

          {characters.length
            ? characters.map((character) => (
                <div
                  className="col-sm-12 col-md-4 col-lg-4  m-auto"
                  key={character.id}
                >
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
            : ''}
        </div>
        {!characters.length && loading === false && (
          <NoResultFound type={type} />
        )}

        {characters.length ? (
          <LoadMore onHandleLoadMore={() => this.handleLoadMore()} />
        ) : (
          ''
        )}

        {loading && <Loading />}
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
