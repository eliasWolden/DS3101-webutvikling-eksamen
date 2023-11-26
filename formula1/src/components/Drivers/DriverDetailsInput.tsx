// DriverDetailsInputs.tsx
import React from "react";

interface DriverDetailsInputsProps {
  name: string;
  age: number;
  nationality: string;
  teamId: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

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

      <div className="form-group col-md-6">
        <label>Team</label>
        <input
          name="teamid"
          type="text"
          className="form-control"
          placeholder="Age"
          value={isNaN(teamId) ? "" : teamId}
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default DriverDetailsInputs;
