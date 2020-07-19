import React from 'react';

import Base from './Base';
import Loading from './Loading';
import MarvelCard from './MarvelCard';
import getData from './../services/GetData';
import LoadMore from './LoadMore';

class Events extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
      type: 'events',
      pageOffset: 0,
      orderBy: 'name',
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
  render() {
    let { events } = this.state;

    return (
      <React.Fragment>
        <Base>
          <div className="container-fluid">
            <div className="row">
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
        </Base>
      </React.Fragment>
    );
  }
}

export default Events;
