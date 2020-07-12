import React from 'react';

import GetstoriesData from '../services/GetData';
import Base from './Base';
import Loading from './Loading';
import MarvelCard from './MarvelCard';

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
                  <div key={story.id} className="col-sm-12 col-md-3 m-auto">
                    <MarvelCard {...story} />
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

export default Stories;
