import { FC } from "react";
import "../../css/main.css";
import { ITeam } from "../../interfaces/Teams/ITeam";
import "bootstrap/dist/css/bootstrap.min.css";


//laget til sjaføren gjør det mulig å bruke isSelected for å finne rett lag
const SelectedTeamItem: FC<ITeam> = ({ id, manufacturer, driver1, driver2, image }) => {
  const modified_driver1=driver1.replace(" ","-");
  const modified_driver2=driver2.replace(" ","-");
  
  const driver1FirstName = driver1.split(" ")[0];
  const driver2FirstName = driver2.split(" ")[0];
  return (
    <div className="selected-team-container">
      <img 
         src={`../../../public/images/Backgrounds/1.jpg`}       
        alt="background"
        draggable="false"
        className="selected-team-background-image" />

      <div className="selected-title-box">
        <h1 className="selected-title selected-team-text">{manufacturer}</h1>
          <div className="selected-emblem-box">
            <img src={`http://localhost:5257/api/Image/emblem/${id}.png`} 
                  alt="emblem"
                  className="selected-emblem-image" />
          </div>
      </div>
    <div className="selected-team-box-left">
      <div className="selected-text-box">
        <p className="selected-text selected-team-text">
          {manufacturer} is a team that has {driver1} and {driver2} as their drivers.
          Where {driver1FirstName} is the main driver and {driver2FirstName} is the supporting driver.
        </p>
      </div>

      <div className="selected-car-box">
        <img src={image} className="selected-car-image"
        draggable="false"
        />
      </div>
    </div>
    
    <div className="selected-team-box-right">
      <div className="selected-team-driver-box">
        <h2 className="selected-title">Driver 1</h2>
          <img src={`http://localhost:5257/api/Image/driver/${modified_driver1}.png`} 
              alt="driver1" 
              draggable="false"
              className="selected-team-driver-image"
              />
        <h3 className="selected-text selected-title">{driver1}</h3>
        <p className="selected-text-small">{driver1FirstName} has scored the most points for his team and is therefore the main driver.</p>
      </div>

      <div className="selected-team-driver2-box">
        <h2 className="selected-title">Driver 2</h2>
          <img src={`http://localhost:5257/api/Image/driver/${modified_driver2}.png`} 
              alt="driver1" 
              draggable="false"
              className="selected-team-driver2-image"
              />
        <h3 className="selected-text selected-title">{driver2}</h3>
        <p className="selected-text-small">{driver2FirstName} is the supporting driver and his goal is to help {driver1FirstName}.</p>

      </div>
    </div>

    </div>
    /*  
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
 */  );
};
export default SelectedTeamItem;
