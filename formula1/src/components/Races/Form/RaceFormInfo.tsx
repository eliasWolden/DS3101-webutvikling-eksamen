import React from "react";
import "../../../interfaces/Races/IRaceFormProps";

const WinnerNameInput: React.FC<RaceFormProps> = ({ setHandler }) => {
  return (
    <fieldset>
      <legend>Name of Winner</legend>

      <div className="row mb-3">
        <div className="form-group col-md-4">
          <label htmlFor="firstName">First Name</label>
          <input
            id="firstName"
            name="Firstname"
            type="text"
            className="form-control"
            placeholder="First Name"
            onChange={setHandler}
          />
        </div>

        <div className="form-group col-md-6">
          <label htmlFor="lastName">Last Name</label>
          <input
            id="lastName"
            name="Lastname"
            type="text"
            className="form-control"
            placeholder="Last Name"
            onChange={setHandler}
          />
        </div>

        <div className="form-group col-md-4">
          <label htmlFor="grandPrix">Name of Grand Prix</label>
          <input
            id="grandPrix"
            name="grandPrix"
            type="text"
            className="form-control"
            placeholder="Grand Prix"
            onChange={setHandler}
          />
        </div>
      </div>
    </fieldset>
  );
};

export default WinnerNameInput;
