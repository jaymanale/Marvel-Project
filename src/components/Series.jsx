import React from 'react';

import Base from './Base';
import Loading from './Loading';
import MarvelCard from './MarvelCard';
import getData from './../services/GetData';
import LoadMore from './LoadMore';

class Series extends React.Component {
  constructor() {
    super();
    this.state = {
      series: [],
      type: 'series',
      pageOffset: 0,
      orderBy: 'title',
    };
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const { series } = this.state;
    const newSeries = await getData(this.state);
    this.setState({ series: [...series, ...newSeries] });
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
    let { series } = this.state;

    return (
      <React.Fragment>
        <Base>
          <div className="container-fluid">
            <div className="row">
              {series.length ? (
                series.map((list) => (
                  <div key={list.id} className="col-sm-12 col-md-3 m-auto">
                    <MarvelCard cardData={{ ...list }} />
                  </div>
                ))
              ) : (
                <Loading />
              )}
            </div>
            {series.length && (
              <LoadMore onHandleLoadMore={() => this.handleLoadMore()} />
            )}
          </div>
        </Base>
      </React.Fragment>
    );
  }
}

export default Series;
