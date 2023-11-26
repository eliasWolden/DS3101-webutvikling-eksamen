import React from "react";

interface DriverFormProps {
  setHandler: (e: React.ChangeEvent<any>) => void;
}

const DriverForm: React.FC<DriverFormProps> = ({ setHandler }) => {
  return (
    <div className="row mb-3">
      <div className="col-md-6">
        <label htmlFor="firstName" className="form-label">
          Firstname
        </label>
        <input
          id="firstName"
          name="Firstname"
          type="text"
          className="form-control"
          placeholder="Firstname"
          onChange={setHandler}
        />
      </div>

      <div className="col-md-6">
        <label htmlFor="lastName" className="form-label">
          Lastname
        </label>
        <input
          id="lastName"
          name="Lastname"
          type="text"
          className="form-control"
          placeholder="Lastname"
          onChange={setHandler}
        />
      </div>
    </div>
  );
};

export default DriverForm;
