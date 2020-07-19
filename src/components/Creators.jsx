import React from 'react';

import Base from './Base';
import Loading from './Loading';
import getData from './../services/GetData';
import LoadMore from './LoadMore';
import MarvelCard from './MarvelCard';
import { getFilterData } from './../common/HelperFunctions';
import SearchInput from './../common/SearchInput';
import NoResultFound from './../common/NoResultFound';

class Creators extends React.Component {
  constructor() {
    super();
    this.state = {
      creators: [],
      type: 'creators',
      pageOffset: 0,
      orderBy: 'firstName',
      search: '',
      loading: true,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const { creators } = this.state;
    const newCreators = await getData(this.state);
    this.setState({ creators: [...creators, ...newCreators], loading: false });
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

  showAllcreators({ creators, search, type, loading }) {
    creators = getFilterData(creators, 'fullName', search);
    return (
      <div className="container-fluid">
        <div className="row">
          <SearchInput
            inputValue={search}
            onClearText={() => this.handleClearInputText()}
            onSearchInput={(e) => this.handleCharacterSearch(e)}
            searchOf={type}
          />

          {creators.length
            ? creators.map((creator) => (
                <div key={creator.id} className="col-sm-12 col-md-3 m-auto">
                  <MarvelCard
                    cardData={{ ...creator, title: creator.fullName }}
                  />
                </div>
              ))
            : ''}
        </div>

        {!creators.length && loading === false && <NoResultFound type={type} />}

        {creators.length ? (
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
        <Base>{this.showAllcreators({ ...this.state })}</Base>
      </React.Fragment>
    );
  }
}

export default Creators;
