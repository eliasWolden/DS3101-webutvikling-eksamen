import React from 'react';
import "../../css/main.css"
import 'bootstrap/dist/css/bootstrap.min.css';
//laget til sjaføren gjør det mulig å bruke isSelected for å finne rett lag
const TeamItem = ({ id, manufacturer, driver1, driver2, image, isSelected }) => {
  return (
      <div className={`${isSelected ? 'selected-team' : 'col-md-4 mb-4'}`}>
        <img src={id} className="image-size-emblem" alt={"Team Emblem"} />
        <div className="card-body">
          <h5 className="card-title">{manufacturer}</h5>
          <p className="card-text">{driver1}</p>
          <p className="card-text">{driver2}</p>
        </div>
        <img src={image} className={`${isSelected ? 'selected-team' : 'image-size-car'}`} alt={manufacturer} />
      </div>
  );
};
export default TeamItem;