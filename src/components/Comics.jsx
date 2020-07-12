import React from 'react';

import GetComicsData from '../services/GetData';
import Base from './Base';
import Loading from './Loading';
import MarvelCard from './MarvelCard';

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
                  <div key={comic.id} className="col-sm-12 col-md-3 m-auto">
                    <MarvelCard {...comic} />
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

export default Comics;
