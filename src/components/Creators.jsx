import React from 'react';

import GetCreatorsData from '../services/GetData';
import Base from './Base';
import Loading from './Loading';

class Creators extends React.Component {
  constructor() {
    super();
    this.state = {
      creators: [],
    };
  }

  async componentDidMount() {
    const response = await GetCreatorsData('creators');
    const creators = response.data.data.results;
    console.log(creators);
    this.setState({ creators });
  }

  render() {
    let { creators } = this.state;

    return (
      <React.Fragment>
        <Base>
          <div className="container-fluid">
            <div className="row">
              {creators.length ? (
                creators.map((creator) => (
                  <div key={creator.id} className="col-sm-12 col-md-3 m-auto">
                    <CreatorsCard {...creator} />
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

const CreatorsCard = ({ fullName, thumbnail }) => {
  return (
    <div className="card text-center cardStyle my-4">
      <div className="card-body">
        <div className="m-2">
          <img
            src={thumbnail.path + '.' + thumbnail.extension}
            className="card-img-top img-float"
            alt={fullName}
          />
        </div>
        <h5 className="card-title font-weight-bold">{fullName}</h5>
      </div>
    </div>
  );
};

export default Creators;
