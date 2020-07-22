import React from 'react';
import Base from './../common/Base';
import IronMan from './../resources/ironman.jpg';
import Captain from './../resources/captain.jpg';
import Hulk from './../resources/hulk.jpg';
import Thor from './../resources/thor.jpg';
import BlackPanther from './../resources/blackpanther.jpg';
import Deadpool from './../resources/deadpool.jpg';
import NickFury from './../resources/nickfury.jpg';
import DoctorStrange from './../resources/doctorstrange.jpg';

const Home = () => {
  const heroMap = [
    { id: 1, name: 'Iron Man', imgUrl: IronMan },
    { id: 2, name: 'Captain America', imgUrl: Captain },
    { id: 3, name: 'Deadpool', imgUrl: Deadpool },
    { id: 4, name: 'Hulk', imgUrl: Hulk },
    { id: 5, name: 'Thor', imgUrl: Thor },
    { id: 6, name: 'Black Panther', imgUrl: BlackPanther },
    { id: 7, name: 'Doctor Strange', imgUrl: DoctorStrange },
    { id: 8, name: 'Nick Fury', imgUrl: NickFury },
  ];

  return (
    <Base>
      <div className="container">
        <div className="row">
          {heroMap.map((hero) => (
            <div
              key={hero.id}
              className="col-sm-3 col-md-3 col-lg-3 text-center mt-4 cardShadow"
            >
              <img className="img-fluid" src={hero.imgUrl} alt={hero.imgUrl} />
              <p>{hero.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Base>
  );
};

export default Home;
