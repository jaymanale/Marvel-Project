import React from 'react';

import Base from './Base';
import Loading from './Loading';
import MarvelCard from './MarvelCard';
import getData from './../services/GetData';
import LoadMore from './LoadMore';

class Stories extends React.Component {
  constructor() {
    super();
    this.state = {
      stories: [],
      type: 'stories',
      pageOffset: 0,
      orderBy: 'id',
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

  render() {
    let { stories } = this.state;

    return (
      <React.Fragment>
        <Base>
          <div className="container-fluid">
            <div className="row">
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
        </Base>
      </React.Fragment>
    );
  }
}

export default Stories;
