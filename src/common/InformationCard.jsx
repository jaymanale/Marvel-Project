import React from 'react';

import Base from './Base';
import ImageCard from './ImageCard';
import BasicInfo from './BasicInfo';
import CategoryInfo from './CategoryInfo';

const InformationCard = (props) => {
  console.log('props:', props.location.state);
  window.scrollTo(0, 0);
  return (
    <Base>
      <div className="container">
        <div className="row">
          <div className="col-sm-8 col-md-8 col-lg-8 offset-sm-2 offset-md-2 offset-lg-2">
            <ImageCard {...props.location.state} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8 col-md-8 col-lg-8 offset-sm-2 offset-md-2 offset-lg-2">
            <BasicInfo {...props.location.state} />

            <CategoryInfo {...props.location.state} />
          </div>
        </div>
      </div>
    </Base>
  );
};

export default InformationCard;
