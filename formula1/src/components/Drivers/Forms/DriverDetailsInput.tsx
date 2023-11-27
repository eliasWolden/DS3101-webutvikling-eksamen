import React from "react";
import { DriverDetailsInputsProps } from "../../../interfaces/Drivers/IDriverDetailsInputsProps";

const DriverDetailsInputs: React.FC<DriverDetailsInputsProps> = ({
  name,
  age,
  nationality,
  teamId,
  onChange,
}) => {
  return (
    <>
      <div className="form-group col-md-6">
        <label>Name</label>
        <input
          name="name"
          type="text"
          className="form-control"
          placeholder="name"
          value={name}
          onChange={onChange}
        />
      </div>

      <div className="form-group col-md-6">
        <label>Age</label>
        <input
          name="Age"
          type="text"
          className="form-control"
          placeholder="Age"
          value={isNaN(age) ? "" : age}
          onChange={onChange}
        />
      </div>

      <div className="form-group col-md-6">
        <label>Nationality</label>
        <input
          name="nationality"
          type="text"
          className="form-control"
          placeholder="Nationality"
          value={nationality}
          onChange={onChange}
        />
      </div>

      <div className="row mb-3">
      <div className="col-md-6">
        <label htmlFor="team" className="form-label">
          Team
        </label>
        <select
          id="teamId"
          name="teamId"
          className="form-control"
          value={isNaN(teamId) ? "" : teamId}
          onChange={onChange}
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
    </>
  );
};

export default DriverDetailsInputs;
