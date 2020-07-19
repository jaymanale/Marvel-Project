import React from 'react';

import Base from './Base';
import Loading from './Loading';
import getData from './../services/GetData';
import LoadMore from './LoadMore';
import MarvelCard from './MarvelCard';

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
                    <MarvelCard
                      cardData={{ ...creator, title: creator.fullName }}
                    />
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

export default Creators;
