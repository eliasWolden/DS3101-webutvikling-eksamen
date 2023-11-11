import React from "react";
import '../../css/DriverCarousel.css';

// oppbygging av sjaførkort som blir brukt i carousel gjør det mulig å bruke onclick for å velge sjafør
const DriverItem = ({ name, age, nationality, image, teamid, onClick }) => {
  
  return (
    <div className="p-3 border-0 shadow text-center driver-card" onClick={onClick}>
      <img
        src={image}
        alt="bilde av sjafør"
        className="card-img-top mx-auto d-block driver-image"
      />
      <div className="card-body">
        <h2 className="card-title-driver">{name}</h2>
        <p className="card-text-driver">{nationality}</p>
        <p className="card-text-driver">Age: {age}</p>
      </div>
    </div>
  );
};

export default DriverItem;