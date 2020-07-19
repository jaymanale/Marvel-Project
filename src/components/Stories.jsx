import React from 'react';

import Base from './Base';
import Loading from './Loading';
import MarvelCard from './MarvelCard';
import getData from './../services/GetData';
import LoadMore from './LoadMore';
import { getFilterData } from './../common/HelperFunctions';
import SearchInput from './../common/SearchInput';

class Stories extends React.Component {
  constructor() {
    super();
    this.state = {
      stories: [],
      type: 'stories',
      pageOffset: 0,
      orderBy: 'id',
      search: '',
    };
  }

  async componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const { stories } = this.state;
    const newStories = await getData(this.state);
    this.setState({ stories: [...stories, ...newStories] });
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

  showAllStories({ stories, search, type }) {
    stories = getFilterData(stories, 'title', search);
    return (
      <div className="container-fluid">
        <div className="row">
          {stories.length && (
            <div className="input-group col-md-8 col-lg-8 offset-md-2 offset-lg-2 mb-3">
              <SearchInput
                onSearchInput={(e) => this.handleCharacterSearch(e)}
                searchOf={type}
              />
            </div>
          )}
          {stories.length ? (
            stories.map((story) => (
              <div key={story.id} className="col-sm-12 col-md-3 m-auto">
                <MarvelCard cardData={{ ...story }} />
              </div>
            ))
          ) : (
            <Loading />
          )}
        </div>
        {stories.length && (
          <LoadMore onHandleLoadMore={() => this.handleLoadMore()} />
        )}
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
