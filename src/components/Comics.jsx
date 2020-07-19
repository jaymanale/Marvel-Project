import React from 'react';

import Base from './../common/Base';
import Loading from './../common/Loading';
import LoadMore from './../common/LoadMore';
import MarvelCard from './../common/MarvelCard';
import SearchInput from './../common/SearchInput';
import NoResultFound from './../common/NoResultFound';
import getData from './../services/GetData';

import { getFilterData } from './../common/HelperFunctions';

class Comics extends React.Component {
  constructor() {
    super();
    this.state = {
      type: 'comics',
      comics: [],
      pageOffset: 0,
      orderBy: 'title',
      search: '',
      loading: true,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const { comics } = this.state;
    const newComics = await getData(this.state);
    this.setState({ comics: [...comics, ...newComics], loading: false });
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

  handleCharacterSearch(event) {
    this.setState({ search: event.target.value });
  }
  handleClearInputText() {
    this.setState({ search: '' });
  }

  showAllComics({ comics, search, type, loading }) {
    comics = getFilterData(comics, 'title', search);
    return (
      <div className="container-fluid">
        <div className="row">
          <SearchInput
            inputValue={search}
            onSearchInput={(e) => this.handleCharacterSearch(e)}
            onClearText={() => this.handleClearInputText()}
            searchOf={type}
          />

          {comics.length
            ? comics.map((comic) => (
                <div key={comic.id} className="col-sm-12 col-md-3 m-auto">
                  <MarvelCard cardData={{ ...comic }} />
                </div>
              ))
            : ''}
        </div>

        {!comics.length && loading === false && <NoResultFound type={type} />}

        {comics.length ? (
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
        <Base>{this.showAllComics({ ...this.state })}</Base>
      </React.Fragment>
    );
  }
}

export default Comics;
