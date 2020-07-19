import React from 'react';

import Base from './Base';
import Loading from './Loading';
import MarvelCard from './MarvelCard';
import LoadMore from './LoadMore';
import getData from './../services/GetData';

class Comics extends React.Component {
  constructor() {
    super();
    this.state = {
      type: 'comics',
      comics: [],
      pageOffset: 0,
      orderBy: 'title',
    };
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const { comics } = this.state;
    const newComics = await getData(this.state);
    this.setState({ comics: [...comics, ...newComics] });
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
    let { comics } = this.state;

    return (
      <React.Fragment>
        <Base>
          <div className="container-fluid">
            <div className="row">
              {comics.length ? (
                comics.map((comic) => (
                  <div key={comic.id} className="col-sm-12 col-md-3 m-auto">
                    <MarvelCard cardData={{ ...comic }} />
                  </div>
                ))
              ) : (
                <Loading />
              )}
            </div>
            {comics.length && (
              <LoadMore onHandleLoadMore={() => this.handleLoadMore()} />
            )}
          </div>
        </Base>
      </React.Fragment>
    );
  }
}

export default Comics;
