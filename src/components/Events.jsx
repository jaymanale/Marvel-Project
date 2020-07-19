import React from 'react';

import Base from './Base';
import Loading from './Loading';
import MarvelCard from './MarvelCard';
import getData from './../services/GetData';
import LoadMore from './LoadMore';
import SearchInput from './../common/SearchInput';
import { getFilterData } from './../common/HelperFunctions';

class Events extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      type: 'events',
      pageOffset: 0,
      orderBy: 'name',
      search: '',
    };
  }

  componentDidMount() {
    this.loadData();
  }
  async loadData() {
    const { events } = this.state;
    const newEvents = await getData(this.state);
    this.setState({ events: [...events, ...newEvents] });
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

  showAllComics({ events, search, type }) {
    events = getFilterData(events, 'title', search);

    return (
      <div className="container-fluid">
        <div className="row">
          {events.length && (
            <div className="input-group col-md-8 col-lg-8 offset-md-2 offset-lg-2 mb-3">
              <SearchInput
                onSearchInput={(e) => this.handleCharacterSearch(e)}
                searchOf={type}
              />
            </div>
          )}
          {events.length ? (
            events.map((event) => (
              <div key={event.id} className="col-sm-12 col-md-3 m-auto">
                <MarvelCard cardData={{ ...event }} />
              </div>
            ))
          ) : (
            <Loading />
          )}
        </div>
        {events.length && (
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

export default Events;
