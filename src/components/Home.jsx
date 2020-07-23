import React from 'react';
import Base from './../common/Base';
import { getCharactorById } from './../services/GetData';
import { Link } from 'react-router-dom';
import Loading from './../common/Loading';

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      characterData: [],
      loading: true,
    };
  }

  async componentDidMount() {
    const characterData = await this.getData();
    this.setState({ characterData, loading: false });
  }

  async getData() {
    let characterData = [];

    const [t1, t2, t3, t4, t5, t6, t7, t8] = await Promise.all([
      getCharactorById(1017104), // Iron Man
      getCharactorById(1017327), // captain
      getCharactorById(1017316), // deadpool
      getCharactorById(1017303), // hulk
      getCharactorById(1017328), // Thor
      getCharactorById(1009187), // black Panther
      getCharactorById(1011358), // doctor Strange
      getCharactorById(1009471), // Nick Fury
    ]);

    characterData.push(t1, t2, t3, t4, t5, t6, t7, t8);
    return characterData;
  }

  getAllHomeData() {
    const { characterData } = this.state;
    return (
      <div className="container">
        <div className="row">
          {characterData.map((hero) => (
            <div
              key={hero.id}
              className="col-sm-3 col-md-3 col-lg-3 text-center p-0 cardShadow"
            >
              <div className="card-body p-0">
                <Link
                  to={{
                    pathname: `/characters/${hero.id}`,
                    state: { ...hero, title: hero.name },
                  }}
                >
                  <GetHomeHeroCard {...hero} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    return <Base>{loading ? <Loading /> : this.getAllHomeData()}</Base>;
  }
}

const GetHomeHeroCard = (props) => {
  const { thumbnail, name } = props;

  return (
    <React.Fragment>
      <div>
        {thumbnail && (
          <img
            src={thumbnail.path + '.' + thumbnail.extension}
            className="card-img-top img-fluid"
            alt={name}
          />
        )}
      </div>
      <h5 className="card-title font-weight-lighter text-dark mt-2">{name}</h5>
    </React.Fragment>
  );
};

export default Home;
