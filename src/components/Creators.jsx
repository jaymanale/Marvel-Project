import React from 'react';

import Base from './Base';
import Loading from './Loading';
import getData from './../services/GetData';
import LoadMore from './LoadMore';
import MarvelCard from './MarvelCard';
import { getFilterData } from './../common/HelperFunctions';
import SearchInput from './../common/SearchInput';

class Creators extends React.Component {
  constructor() {
    super();
    this.state = {
      creators: [],
      type: 'creators',
      pageOffset: 0,
      orderBy: 'firstName',
      search: '',
    };
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const { creators } = this.state;
    const newCreators = await getData(this.state);
    this.setState({ creators: [...creators, ...newCreators] });
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

  showAllcreators({ creators, search, type }) {
    creators = getFilterData(creators, 'fullName', search);
    return (
      <div className="container-fluid">
        <div className="row">
          {creators.length && (
            <div className="input-group col-md-8 col-lg-8 offset-md-2 offset-lg-2 mb-3">
              <SearchInput
                inputValue={search}
                onClearText={() => this.handleClearInputText()}
                onSearchInput={(e) => this.handleCharacterSearch(e)}
                searchOf={type}
              />
            </div>
          )}
          {creators.length ? (
            creators.map((creator) => (
              <div key={creator.id} className="col-sm-12 col-md-3 m-auto">
                <MarvelCard
                  cardData={{ ...creator, title: creator.fullName }}
                />
              </div>
            ))
          ) : (
            <Loading />
          )}
        </div>
        {creators.length && (
          <LoadMore onHandleLoadMore={() => this.handleLoadMore()} />
        )}
      </div>
    );
  }

  render() {
    return (
      <React.Fragment>
        <Base>{this.showAllcreators({ ...this.state })}</Base>
      </React.Fragment>
    );
  }
}

export default Creators;
