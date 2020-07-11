import React from 'react';

import GetSeriesData from '../services/GetData';
import Base from './Base';
import Loading from './Loading';

class Series extends React.Component {
  constructor() {
    super();
    this.state = {
      series: [],
    };
  }

  async componentDidMount() {
    const response = await GetSeriesData('series');
    const series = response.data.data.results;
    console.log(series);
    this.setState({ series });
  }

  render() {
    let { series } = this.state;

    return (
      <React.Fragment>
        <Base>
          <div className="container-fluid">
            <div className="row">
              {series.length ? (
                series.map((list) => (
                  <div key={list.id} className="col-sm-12 col-md-5 m-auto">
                    <SeriesCard {...list} />
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

const SeriesCard = ({ title, thumbnail }) => {
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

export default Series;
