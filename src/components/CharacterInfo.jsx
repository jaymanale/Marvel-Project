import React from 'react';
import Base from './Base';

const CharacterInfo = (props) => {
  console.log('props:', props);
  const { name } = props.location.state;
  return (
    <Base>
      <h1>{name}</h1>
    </Base>
  );
};

export default CharacterInfo;
