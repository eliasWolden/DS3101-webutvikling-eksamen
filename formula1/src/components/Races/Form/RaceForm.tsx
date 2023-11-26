import React from "react";
import "../../../interfaces/Races/IRaceFormProps";

const RaceForm: React.FC<RaceFormProps> = ({ setHandler }) => {
  return (
    <>
      <div className="row">
        <div className="form-group col-md-4">
          <label>Number of laps</label>
          <input
            id="numberOfLaps"
            type="text"
            name="numberOfLaps"
            className="form-control"
            placeholder="Number of laps"
            onChange={setHandler}
          />
        </div>
      </div>

      <div className="form-group col-md-4">
        <label>Race time</label>
        <input
          name="winnerTime"
          className="form-control"
          placeholder="Race time"
          onChange={setHandler}
        />
      </div>
    </>
  );
};

export default RaceForm;
