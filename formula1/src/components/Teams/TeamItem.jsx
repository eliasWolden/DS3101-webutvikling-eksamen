import React from 'react';

const TeamItem = ({ manufacturer, driver1, driver2, image }) => {
  return (
    <article>
      <h3>{manufacturer}</h3>
      <h2>{driver1}</h2>
      <h2>{driver2}</h2>
      <img src={image} alt={manufacturer} />
    </article>
  );
};

export default TeamItem;
