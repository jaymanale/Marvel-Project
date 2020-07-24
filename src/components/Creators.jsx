import React from 'react';

import Base from './../common/Base';
import Loading from './../common/Loading';
import LoadMore from './../common/LoadMore';
import MarvelCard from './../common/MarvelCard';
import SearchInput from './../common/SearchInput';
import NoResultFound from './../common/NoResultFound';
import getData from './../services/GetData';

import { getFilterData } from './../common/HelperFunctions';
import { Link } from 'react-router-dom';

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
      loadMore: false,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const { creators } = this.state;
    const newCreators = await getData(this.state);
    this.setState({
      creators: [...creators, ...newCreators],
      loading: false,
      loadMore: false,
    });
  }

  handleLoadMore() {
    const { pageOffset } = this.state;

    this.setState(
      () => ({
        pageOffset: pageOffset + 10,
        loadMore: true,
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

  showAllcreators({ creators, search, type, loading, loadMore }) {
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
                  <Link
                    to={{
                      pathname: `/creators/${creator.id}`,
                      state: { ...creator, title: creator.fullName },
                    }}
                  >
                    <MarvelCard
                      cardData={{ ...creator, title: creator.fullName }}
                    />
                  </Link>
                </div>
              ))
            : ''}
        </div>

        {!creators.length && loading === false && <NoResultFound type={type} />}

        {creators.length ? (
          <LoadMore
            onHandleLoadMore={() => this.handleLoadMore()}
            loadMore={loadMore}
          />
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
