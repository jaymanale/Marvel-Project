import React from 'react';

import GetComicsData from '../services/GetData';
import Base from './Base';
import Loading from './Loading';

class Comics extends React.Component {
  constructor() {
    super();
    this.state = {
      comics: [],
    };
  }

  async componentDidMount() {
    const response = await GetComicsData('comics');
    const comics = response.data.data.results;
    console.log(comics);
    this.setState({ comics });
  }

  render() {
    let { comics } = this.state;

    return (
      <React.Fragment>
        <Base>
          <div className="container-fluid">
            <div className="row">
              {comics.length ? (
                comics.map((comic) => (
                  <div key={comic.id} className="col-sm-12 col-md-5 m-auto">
                    <ComicsCard {...comic} />
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

const ComicsCard = ({ title, thumbnail }) => {
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

export default Comics;
