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
          <option value="1">Red bull</option>
          <option value="2">Mercedes</option>
          <option value="3">Ferrari</option>
          <option value="4">McLaren</option>
          <option value="5">Aston Martin</option>
          <option value="6">Alpine</option>
          <option value="7">Williams</option>
          <option value="8">AlphaTauri</option>
          <option value="9">Alfa Romeo</option>
          <option value="10">Haas F1</option>
        </select>
      </div>
    </div>
  );
};

export default TeamSelect;
