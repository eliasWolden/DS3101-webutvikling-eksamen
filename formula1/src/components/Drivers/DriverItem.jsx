import React from "react";
import '../../css/DriverCarousel.css';

const DriverItem = ({ name, age, nationality, image }) => {
  return (
    <div className="card p-3 border-0 rounded shadow text-center driver-card">
      <img
        src={image}
        alt="bilde av sjafør"
        className="card-img-top mx-auto d-block rounded-circle driver-image"
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
