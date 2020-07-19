import React from 'react';

import Base from './Base';
import Loading from './Loading';
import MarvelCard from './MarvelCard';
import getData from './../services/GetData';
import LoadMore from './LoadMore';
import { getFilterData } from './../common/HelperFunctions';
import SearchInput from './../common/SearchInput';
import NoResultFound from './../common/NoResultFound';

class Stories extends React.Component {
  constructor() {
    super();
    this.state = {
      stories: [],
      type: 'stories',
      pageOffset: 0,
      orderBy: 'id',
      search: '',
      loading: true,
    };
  }

  async componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const { stories } = this.state;
    const newStories = await getData(this.state);
    this.setState({ stories: [...stories, ...newStories], loading: false });
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

  showAllStories({ stories, search, type, loading }) {
    stories = getFilterData(stories, 'title', search);
    return (
      <div className="container-fluid">
        <div className="row">
          <SearchInput
            inputValue={search}
            onClearText={() => this.handleClearInputText()}
            onSearchInput={(e) => this.handleCharacterSearch(e)}
            searchOf={type}
          />

          {stories.length
            ? stories.map((story) => (
                <div key={story.id} className="col-sm-12 col-md-3 m-auto">
                  <MarvelCard cardData={{ ...story }} />
                </div>
              ))
            : ''}
        </div>
        {!stories.length && loading === false && <NoResultFound type={type} />}

        {stories.length ? (
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
        <Base>{this.showAllStories({ ...this.state })}</Base>
      </React.Fragment>
    );
  }
}

export default Stories;
