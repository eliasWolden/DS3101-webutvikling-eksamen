import { FC } from "react";
import "../../css/main.css";
import { ITeam } from "../../interfaces/Teams/ITeam";
import "bootstrap/dist/css/bootstrap.min.css";

const SelectedTeamItem: FC<ITeam> = ({
  driver1,
  driver2
}) => {
  const modified_driver1 = driver1.replace(" ", "-");
  const modified_driver2 = driver2.replace(" ", "-");

  return (
    <div className="bg-image selected-team-bg">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-6">
            <div className="card selected-team-card-size mx-auto">
              <img
                src={`http://localhost:5257/api/Image/driver/${modified_driver1}.png`}
                alt={`${driver1}'s image`}
              />
              <div className="card-body">
                <h5 className="card-title">{driver1}</h5>
                <p className="card-text">Driver 1</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="card selected-team-card-size mx-auto">
              <img
                src={`http://localhost:5257/api/Image/driver/${modified_driver2}.png`}
                alt={`${driver2}'s image`}
              />
              <div className="card-body">
                <h5 className="card-title">{driver2}</h5>
                <p className="card-text">Driver 2</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SelectedTeamItem;
