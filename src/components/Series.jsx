import React from 'react';

import Base from './Base';
import Loading from './Loading';
import MarvelCard from './MarvelCard';
import getData from './../services/GetData';
import LoadMore from './LoadMore';
import { getFilterData } from './../common/HelperFunctions';
import SearchInput from './../common/SearchInput';
import NoResultFound from './../common/NoResultFound';

class Series extends React.Component {
  constructor() {
    super();
    this.state = {
      series: [],
      type: 'series',
      pageOffset: 0,
      orderBy: 'title',
      search: '',
      loading: true,
    };
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const { series } = this.state;
    const newSeries = await getData(this.state);
    this.setState({ series: [...series, ...newSeries], loading: false });
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

  showAllSeries({ series, search, type, loading }) {
    series = getFilterData(series, 'title', search);

    return (
      <div className="container-fluid">
        <div className="row">
          <SearchInput
            inputValue={search}
            onSearchInput={(e) => this.handleCharacterSearch(e)}
            onClearText={() => this.handleClearInputText()}
            searchOf={type}
          />

          {series.length
            ? series.map((list) => (
                <div key={list.id} className="col-sm-12 col-md-3 m-auto">
                  <MarvelCard cardData={{ ...list }} />
                </div>
              ))
            : ''}
        </div>

        {!series.length && loading === false && <NoResultFound type={type} />}

        {series.length ? (
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
        <Base>{this.showAllSeries(this.state)}</Base>
      </React.Fragment>
    );
  }
}

export default Series;
