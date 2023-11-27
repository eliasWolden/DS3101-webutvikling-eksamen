import React from "react";

const TeamForm: React.FC<DriverFormProps> = ({ setHandler }) => {
  return (
    <>
      <div className="row mb-3">
        <div className="col-md-4">
          <label>Driver 1 firstname</label>
          <input
            name="driver1FirstName"
            type="text"
            className="form-control"
            placeholder="Firstname"
            onChange={setHandler}
          />
        </div>

        <div className="form-group col-md-4">
          <label>Driver 1 lastname</label>
          <input
            name="driver1LastName"
            type="text"
            className="form-control"
            placeholder="Lastname"
            onChange={setHandler}
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-md-4">
          <label>Driver 2 firstname</label>
          <input
            name="driver2FirstName"
            type="text"
            className="form-control"
            placeholder="Firstname"
            onChange={setHandler}
          />
        </div>

        <div className="form-group col-md-4">
          <label>driver 2 lastname</label>
          <input
            name="driver2LastName"
            type="text"
            className="form-control"
            placeholder="Lastname"
            onChange={setHandler}
          />
        </div>
      </div>
      <div className="form-group col-md-2">
        <label>Manufacturer</label>
        <input
          name="manufacturer"
          type="text"
          className="form-control"
          placeholder="Manufacturer"
          onChange={setHandler}
        />
      </div>
    </>
  );
};

export default TeamForm;
