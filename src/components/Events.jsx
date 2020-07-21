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

class Events extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      type: 'events',
      pageOffset: 0,
      orderBy: 'name',
      search: '',
      loading: true,
    };
  }

  componentDidMount() {
    this.loadData();
  }
  async loadData() {
    const { events } = this.state;
    const newEvents = await getData(this.state);
    this.setState({ events: [...events, ...newEvents], loading: false });
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

  showAllComics({ events, search, type, loading }) {
    events = getFilterData(events, 'title', search);

    return (
      <div className="container-fluid">
        <div className="row">
          <SearchInput
            inputValue={search}
            onSearchInput={(e) => this.handleCharacterSearch(e)}
            onClearText={() => this.handleClearInputText()}
            searchOf={type}
          />

          {events.length
            ? events.map((event) => (
                <div key={event.id} className="col-sm-12 col-md-3 m-auto">
                  <Link
                    to={{
                      pathname: `/characters/${event.id}`,
                      state: { ...event },
                    }}
                  >
                    <MarvelCard cardData={{ ...event }} />
                  </Link>
                </div>
              ))
            : ''}
        </div>

        {!events.length && loading === false && <NoResultFound type={type} />}

        {events.length ? (
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

export default Events;
