import {FC} from "react";
import '../../css/DriverCarousel.css';
import {IDriver} from "../../interfaces/Drivers/IDriver";

// oppbygging av sjaførkort som blir brukt i carousel gjør det mulig å bruke onclick for å velge sjafør
const DriverItem: FC<IDriver> = ({ name, age, nationality, image, teamId }) => {
  
  return (
    <div className={`p-3 border-0 shadow text-center driver-card ${teamId}`}>
      <img
        src={image}
        alt="bilde av sjafør"
        className="card-img-top mx-auto d-block driver-image"
      />
      <div className="card-body">
        <h2 className="card-title-driver">{name}</h2>
        <p className="card-text-driver">{nationality}</p>
        <p className="card-text-driver">Age: {age}</p>
        <p className="card-text-driver">Team {teamId}</p>
      </div>
    </div>
  );
};

export default DriverItem;