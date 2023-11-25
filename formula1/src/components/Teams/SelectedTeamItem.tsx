import { FC } from "react";
import "../../css/main.css";
import { ITeam } from "../../interfaces/Teams/ITeam";
import "bootstrap/dist/css/bootstrap.min.css";


//laget til sjaføren gjør det mulig å bruke isSelected for å finne rett lag
const SelectedTeamItem: FC<ITeam> = ({ id, driver1, driver2, image }) => {
  const modified_driver1=driver1.replace(" ","-");
  const modified_driver2=driver2.replace(" ","-");
  return (
    <div className="container">
      <div className="selected-emblem">
        <img
        src={`http://localhost:5257/api/Image/emblem/${id}.png`}
        className="selected-emblem-image"
        alt={"Team Emblem"}
        draggable="false"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = "public/images/amateur.png";
        }}
        />
      </div>
      <div className="selected-driver-team">
        <img id="driver-1-image" 
        src={`http://localhost:5257/api/Image/driver/${modified_driver1}.png`}
        draggable="false"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = "public/images/uknown.png";
        }}
        />
      </div>

      <div className="selected-driver-team">
        <img id="driver-2-image" 
        src={`http://localhost:5257/api/Image/driver/${modified_driver2}.png`}
        draggable="false"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = "public/images/uknown.png";
        }}
        />
      </div>

    <div className="selected-car">
      <img src={image} className="image-size-car"
        draggable="false"
        />
    </div>
            <h1 className="selected-team-text">hallo</h1>
    </div>
  );
};
export default SelectedTeamItem;
