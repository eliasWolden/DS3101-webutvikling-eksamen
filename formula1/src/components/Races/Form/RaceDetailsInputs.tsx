import React from "react";
import "../../../interfaces/Races/IRaceDetailsInputsProps";

const RaceDetailsInputs: React.FC<RaceDetailsInputsProps> = ({
  winnerName,
  winnerTime,
  numberOfLaps,
  onChange,
}) => {
  return (
    <>
      <div className="form-group col-md-6">
        <label htmlFor="winnerName">Name</label>
        <input
          id="winnerName"
          name="winnerName"
          type="text"
          className="form-control"
          placeholder="Name"
          value={winnerName}
          onChange={onChange}
        />
      </div>

      <div className="row">
        <div className="form-group col-md-4">
          <label htmlFor="numberOfLaps">Number of Laps</label>
          <input
            id="numberOfLaps"
            type="number"
            name="numberOfLaps"
            value={isNaN(numberOfLaps) ? "" : numberOfLaps}
            className="form-control"
            placeholder="Number of Laps"
            onChange={onChange}
          />
        </div>
      </div>

      <div className="form-group col-md-4">
        <label htmlFor="winnerTime">Race Time</label>
        <input
          id="winnerTime"
          name="winnerTime"
          value={winnerTime}
          className="form-control"
          placeholder="Race Time"
          onChange={onChange}
        />
      </div>
    </>
  );
};

export default RaceDetailsInputs;
