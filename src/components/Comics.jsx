import React from 'react';

import GetCharacterData from './../services/GetCharacterData';
import Base from './Base';

class Comics extends React.Component {
  constructor() {
    super();
    this.state = {
      comics: [],
    };
  }

  async componentDidMount() {
    const response = await GetCharacterData('comics');
    const comics = response.data.data.results;
    console.log(response);
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
                <h3>Loading...</h3>
              )}
            </div>
          </div>
        </Base>
      </React.Fragment>
    );
  }
}

const ComicsCard = ({ title }) => {
  return (
    <div className="card text-center cardStyle my-4">
      <div className="card-img-top gradiantRed">
        <p> </p>
      </div>
      <div className="card-body">
        <h5 className="card-title font-weight-bold">{title}</h5>
      </div>
    </div>
  );
};

export default Comics;
