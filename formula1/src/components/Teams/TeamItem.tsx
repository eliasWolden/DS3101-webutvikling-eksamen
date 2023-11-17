import { FC } from "react";
import "../../css/main.css";
import "../../css/TeamCarousel.css";
import { ITeam } from "../../interfaces/Teams/ITeam";

//laget til sjaføren gjør det mulig å bruke isSelected for å finne rett lag
const TeamItem: FC<ITeam> = ({ id, manufacturer, driver1, driver2, image }) => {
  return (
    <div className="col-md-4 mb-4 w-75 team-card">
      <img
        src={`http://localhost:5257/api/Image/emblem/${id}.png`}
        className="image-size-emblem"
        alt={"Team Emblem"}
      />
      <div className="card-body">
        <h5 className="card-title-team text-center">{manufacturer}</h5>
        <p className="card-text-team text-center">{driver1}</p>
        <p className="card-text-team text-center">{driver2}</p>
      </div>
      <img src={image} className="image-size-car" />
    </div>
  );
};
export default TeamItem;
