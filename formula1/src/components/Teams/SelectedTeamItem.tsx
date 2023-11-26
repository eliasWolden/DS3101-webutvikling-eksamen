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
    <div className="container">
      <div className="bg-image">

      </div>

    </div>
  );
};
export default SelectedTeamItem;
