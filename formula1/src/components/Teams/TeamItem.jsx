import React from 'react';
import '../../css/main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const TeamItem = ({ id, manufacturer, driver1, driver2, image }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card">
        <img src={id} className="card-img-top image-size-small" alt={"Team Emblem"} />
        <div className="card-body">
          <h5 className="card-title">{manufacturer}</h5>
          <p className="card-text">{driver1}</p>
          <p className="card-text">{driver2}</p>
        </div>
        <img src={image} className="card-img-bottom image-size-car" alt={manufacturer} />
      </div>
    </div>
  );
};

export default TeamItem;
