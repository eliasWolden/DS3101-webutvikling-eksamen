import { FC } from "react";
import '../../css/DriverCarousel.css'; // Import the CSS file
import { IDriver } from "../../interfaces/Drivers/IDriver";

// Define the DriverItem component
const DriverItem: FC<IDriver> = ({ name, age, nationality, image, teamId }) => {
  return (
    <div className="driver-card">
      <div className="driver-card-wrapper">
          <div className="driver-card-image">
            <img
              src={image}
              alt="bilde av sjafør"
              className="driver-image"
              draggable="false"
            />
        </div>

          <div className="driver-card-text-body">
            <h2 className="card-title-driver">{name}</h2>
            <p className="card-text-driver">Nationality: {nationality}</p>
            <p className="card-text-driver">Age: {age}</p>
            <p className="card-text-driver"> Team {teamId}</p>
        </div>
      </div>
    </div>
  );
};

export default DriverItem;
