import React from 'react';

import GetEventsData from '../services/GetData';
import Base from './Base';
import Loading from './Loading';
import MarvelCard from './MarvelCard';

class Events extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  async componentDidMount() {
    const response = await GetEventsData('events');
    const events = response.data.data.results;
    console.log(events);
    this.setState({ events });
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
                    <MarvelCard {...event} />
                  </div>
                ))
              ) : (
                <Loading />
              )}
            </div>
          </div>
        </Base>
      </React.Fragment>
    );
  }
}

export default Events;
