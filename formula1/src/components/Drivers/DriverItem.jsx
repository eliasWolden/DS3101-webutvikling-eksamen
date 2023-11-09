import React from 'react';

const DriverItem = ({ name, age, nationality, image }) => {
  return (
    <article className="col-12 col-md-6 col-lg-4">
      <div className="driver-item p-3 border rounded text-center bg-light">
        <img
          src={image}
          alt="bilde av sjafør"
          className="driver-image mx-auto d-block"
        />
        <div className="driver-details">
          <h2 className="driver-name">{name}</h2>
          <p className="driver-nationality">{nationality}</p>
          <p className="driver-age">Age: {age}</p>
        </div>
      </div>
    </article>
  );
};

export default DriverItem;
