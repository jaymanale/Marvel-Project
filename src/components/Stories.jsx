import React from 'react';

import GetstoriesData from '../services/GetData';
import Base from './Base';
import Loading from './Loading';

class Stories extends React.Component {
  constructor() {
    super();
    this.state = {
      stories: [],
    };
  }

  async componentDidMount() {
    const response = await GetstoriesData('stories');
    const stories = response.data.data.results;
    console.log(stories);
    this.setState({ stories });
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
                  <div key={story.id} className="col-sm-12 col-md-5 m-auto">
                    <StoriesCard {...story} />
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

const StoriesCard = ({ title, thumbnail }) => {
  return (
    <div className="card text-center cardStyle my-4">
      <div className="card-body">
        <h5 className="card-title font-weight-bold">{title}</h5>
      </div>
    </div>
  );
};

export default Stories;
