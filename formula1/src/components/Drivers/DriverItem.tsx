import { FC } from "react";
import "../../css/DriverCarousel.css";
import { IDriver } from "../../interfaces/Drivers/IDriver";
import { Link } from "react-router-dom";

const DriverItem: FC<IDriver> = ({
  id,
  name,
  age,
  nationality,
  image,
  teamId,
}) => {
  return (
    <div key={id} className="driver-card">
      <div className="driver-card-wrapper">
        <div className="driver-card-image">
          <img
            src={image}
            alt="bilde av sjafør"
            className="driver-image"
            draggable="false"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "public/images/uknown.png";
            }}
          />
        </div>

        <div className="driver-card-text-body">
          <Link to={`/DriverPage/${name}`}>
            <h2 className="card-title-driver">{name}</h2>
          </Link>
          <p className="card-text-driver">Nationality: {nationality}</p>
          <p className="card-text-driver">Age: {age}</p>
          <p className="card-text-driver"> Team {teamId}</p>
        </div>
      </div>
    </div>
  );
};

export default DriverItem;
