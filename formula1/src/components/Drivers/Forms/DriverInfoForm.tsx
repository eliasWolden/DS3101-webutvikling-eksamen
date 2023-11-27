import React from "react";
import "../../../interfaces/Drivers/IDriverFormProps";

const DriverInfoForm: React.FC<DriverFormProps> = ({ setHandler }) => {
  return (
    <div className="row mb-3">
      <div className="col-md-6">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          id="age"
          name="Age"
          type="text"
          className="form-control"
          placeholder="Age"
          onChange={setHandler}
        />
      </div>

      <div className="col-md-6">
        <label htmlFor="nationality" className="form-label">
          Nationality
        </label>
        <input
          id="nationality"
          name="nationality"
          type="text"
          className="form-control"
          placeholder="Nationality"
          onChange={setHandler}
        />
      </div>
    </div>
  );
};

export default DriverInfoForm;
