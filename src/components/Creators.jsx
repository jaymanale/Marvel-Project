import React from 'react';

import Base from './Base';
import Loading from './Loading';
import { getData } from './../common/GetData';
import LoadMore from './LoadMore';

class Creators extends React.Component {
  constructor() {
    super();
    this.state = {
      creators: [],
      type: 'creators',
      pageOffset: 0,
      orderBy: 'firstName',
    };
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const { creators } = this.state;
    const newCreators = await getData(this.state);
    this.setState({ creators: [...creators, ...newCreators] });
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
            {creators.length && (
              <LoadMore onHandleLoadMore={() => this.handleLoadMore()} />
            )}
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
