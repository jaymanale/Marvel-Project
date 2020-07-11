import React from 'react';

import GetEventsData from '../services/GetData';
import Base from './Base';
import Loading from './Loading';

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
                  <div key={event.id} className="col-sm-12 col-md-5 m-auto">
                    <EventsCard {...event} />
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

const EventsCard = ({ title, thumbnail }) => {
  return (
    <div className="card text-center cardStyle my-4">
      <div className="card-body">
        <div className="m-2">
          <img
            src={thumbnail.path + '.' + thumbnail.extension}
            className="card-img-top img-float"
            alt={title}
          />
        </div>
        <h5 className="card-title font-weight-bold">{title}</h5>
      </div>
    </div>
  );
};

export default Events;
