import React from 'react';
import Base from './../common/Base';
import IronMan from './../resources/ironman.webp';
import Captain from './../resources/captain.webp';
import Doctor from './../resources/doctorstrange.webp';
import Hulk from './../resources/hulk.webp';
import Thor from './../resources/thor.webp';
import BlackPanther from './../resources/blackpanther.webp';
import WarMachine from './../resources/warmachine.webp';
import NickFury from './../resources/nickfury.webp';

const Home = () => {
  const heroMap = [
    { id: 1, name: 'Iron Man', imgUrl: IronMan },
    { id: 2, name: 'Captain America', imgUrl: Captain },
    { id: 3, name: 'Doctor Strange', imgUrl: Doctor },
    { id: 4, name: 'Hulk', imgUrl: Hulk },
    { id: 5, name: 'Thor', imgUrl: Thor },
    { id: 6, name: 'Black Panther', imgUrl: BlackPanther },
    { id: 7, name: 'War Machine', imgUrl: WarMachine },
    { id: 8, name: 'Nick Fury', imgUrl: NickFury },
  ];

  return (
    <Base>
      <div className="container">
        <div className="row">
          {heroMap.map((hero) => (
            <div
              key={hero.id}
              className="col-sm-3 col-md-3 col-lg-3 text-center mt-4"
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
