import React from "react";
import "../../../interfaces/Races/IRaceFormProps";

const RaceForm: React.FC<RaceFormProps> = ({ setHandler }) => {
  return (
    <>
      <div className="row">
        <div className="form-group col-md-4">
          <label htmlFor="numberOfLaps">Number of Laps</label>
          <input
            id="numberOfLaps"
            type="number"
            name="numberOfLaps"
            className="form-control"
            placeholder="Number of Laps"
            onChange={setHandler}
          />
        </div>
      </div>

      <div className="form-group col-md-4">
        <label htmlFor="winnerTime">Race Time</label>
        <input
          id="winnerTime"
          name="winnerTime"
          className="form-control"
          placeholder="Race Time"
          onChange={setHandler}
        />
      </div>
    </>
  );
};

export default RaceForm;
