import React from 'react';

import Base from './Base';
import Loading from './Loading';
import MarvelCard from './MarvelCard';
import getData from './../services/GetData';
import LoadMore from './LoadMore';
import { getFilterData } from './../common/HelperFunctions';
import SearchInput from './../common/SearchInput';

class Series extends React.Component {
  constructor() {
    super();
    this.state = {
      series: [],
      type: 'series',
      pageOffset: 0,
      orderBy: 'title',
      search: '',
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
  handleCharacterSearch(event) {
    this.setState({ search: event.target.value });
  }

  handleClearInputText() {
    this.setState({ search: '' });
  }

  showAllSeries({ series, search, type }) {
    series = getFilterData(series, 'title', search);

    return (
      <div className="container-fluid">
        <div className="row">
          {series.length && (
            <div className="input-group col-md-8 col-lg-8 offset-md-2 offset-lg-2 mb-3">
              <SearchInput
                inputValue={search}
                onSearchInput={(e) => this.handleCharacterSearch(e)}
                onClearText={() => this.handleClearInputText()}
                searchOf={type}
              />
            </div>
          )}
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
    );
  }
  render() {
    return (
      <React.Fragment>
        <Base>{this.showAllSeries(this.state)}</Base>
      </React.Fragment>
    );
  }
}

export default Series;
