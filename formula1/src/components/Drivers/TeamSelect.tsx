import React from "react";

interface TeamSelectProps {
  setHandler: (e: React.ChangeEvent<any>) => void;
}

const TeamSelect: React.FC<TeamSelectProps> = ({ setHandler }) => {
  return (
    <div className="row mb-3">
      <div className="col-md-6">
        <label htmlFor="team" className="form-label">
          Team
        </label>
        <select
          id="team"
          name="teamid"
          className="form-control"
          onChange={setHandler}
        >
              <option value="car-red-bull.png">Red bull</option>
              <option value="car-mercedes.png">Mercedes</option>
              <option value="car-ferrari.png">Ferrari</option>
              <option value="car-mclaren.png">McLaren</option>
              <option value="car-aston-martin.png">Aston Martin</option>
              <option value="car-alpine.png">Alpine</option>
              <option value="car-williams.png">Williams</option>
              <option value="car-alphatauri.png">AlphaTauri</option>
              <option value="car-alfa-romeo.png">Alfa Romeo</option>
              <option value="car-haas-f1-team.png">Haas F1</option>
        </select>
      </div>
    </div>
  );
};

export default TeamSelect;
