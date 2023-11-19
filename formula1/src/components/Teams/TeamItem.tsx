import { FC } from "react";
import "../../css/main.css";
import "../../css/TeamCarousel.css";
import { ITeam } from "../../interfaces/Teams/ITeam";
import "bootstrap/dist/css/bootstrap.min.css";


//laget til sjaføren gjør det mulig å bruke isSelected for å finne rett lag
const TeamItem: FC<ITeam> = ({ id, manufacturer, driver1, driver2, image }) => {
  const modified_driver1=driver1.replace(" ","-");
  const modified_driver2=driver2.replace(" ","-");
  return (
    <div className="col-md-4 mb-4 w-75 team-card">
      <div className="card-body">
        <h5 className="card-title-team">{manufacturer} <img
        src={`http://localhost:5257/api/Image/emblem/${id}.png`}
        className="image-size-emblem"
        alt={"Team Emblem"}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = "public/images/amateur.png";
        }}
        />
      </h5>
      
      <div className="row">
        <p className="col-md-4">{driver1} 
        <img id="driver-1-image" 
        src={`http://localhost:5257/api/Image/driver/${modified_driver1}.png`}
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.src = "public/images/uknown.png";
        }}
        />
        </p>
          <p className="col-md-4">{driver2}
            <img id="driver-2-image" 
            src={`http://localhost:5257/api/Image/driver/${modified_driver2}.png`}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "public/images/uknown.png";
            }}
            />
          </p>
        </div>
      </div>
      <img src={image} className="image-size-car" />
    </div>
  );
};
export default TeamItem;
