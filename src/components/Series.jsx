import React from 'react';

import GetSeriesData from '../services/GetData';
import Base from './Base';
import Loading from './Loading';
import MarvelCard from './MarvelCard';

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
                  <div key={list.id} className="col-sm-12 col-md-3 m-auto">
                    <MarvelCard {...list} />
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

export default Series;
