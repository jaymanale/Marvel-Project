import React from 'react';

import Base from './Base';
import Loading from './Loading';
import MarvelCard from './MarvelCard';
import LoadMore from './LoadMore';
import getData from './../services/GetData';
import SearchInput from './../common/SearchInput';
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
    };
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const { comics } = this.state;
    const newComics = await getData(this.state);
    this.setState({ comics: [...comics, ...newComics] });
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

  showAllComics({ comics, search, type }) {
    comics = getFilterData(comics, 'title', search);
    return (
      <div className="container-fluid">
        <div className="row">
          {comics.length && (
            <div className="input-group col-md-8 col-lg-8 offset-md-2 offset-lg-2 mb-3">
              <SearchInput
                onSearchInput={(e) => this.handleCharacterSearch(e)}
                searchOf={type}
              />
            </div>
          )}
          {comics.length ? (
            comics.map((comic) => (
              <div key={comic.id} className="col-sm-12 col-md-3 m-auto">
                <MarvelCard cardData={{ ...comic }} />
              </div>
            ))
          ) : (
            <Loading />
          )}
        </div>
        {comics.length && (
          <LoadMore onHandleLoadMore={() => this.handleLoadMore()} />
        )}
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
