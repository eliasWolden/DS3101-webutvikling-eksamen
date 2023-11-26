import React from "react";
import "../../../interfaces/Races/IWinnerNameInputProps";

const WinnerNameInput: React.FC<WinnerNameInputProps> = ({ setHandler }) => {
  return (
    <div>
      <div className="row mb-3">
        <h3>Name of Winner</h3>
        <div className="form-group col-md-4">
          <label>Firstname</label>
          <input
            name="Firstname"
            type="text"
            className="form-control"
            placeholder="Firstname"
            onChange={setHandler}
          />
        </div>

        <div className="form-group col-md-6">
          <label>LastName</label>
          <input
            name="Lastname"
            type="text"
            className="form-control"
            placeholder="Lastname"
            onChange={setHandler}
          />
        </div>
        <div className="form-group col-md-4">
          <label>Name of Grand Prix</label>
          <input
            name="grandPrix"
            type="text"
            className="form-control"
            placeholder="Grand Prix"
            onChange={setHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default WinnerNameInput;
