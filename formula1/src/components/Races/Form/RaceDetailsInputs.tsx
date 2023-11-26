import React from "react";

interface RaceDetailsInputsProps {
  winnerName: string;
  winnerTime: string;
  numberOfLaps: number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RaceDetailsInputs: React.FC<RaceDetailsInputsProps> = ({
    winnerName,
    winnerTime,
    numberOfLaps,

  onChange,
}) => {
  return (
    <>
      <div className="form-group col-md-6">
        <label>Name</label>
        <input
          id="winnerName"
          name="winnerName"
          type="text"
          className="form-control"
          placeholder="name"
          value={winnerName}
          onChange={onChange}
        />
      </div>

      <div className="row">
        <div className="form-group col-md-4">
          <label>Number of laps</label>
          <input
            id="numberOfLaps"
            type="text"
            name="numberOfLaps"
            value={isNaN(numberOfLaps) ? "" : numberOfLaps}
            className="form-control"
            placeholder="Number of laps"
            onChange={onChange}
          />
        </div>
      </div>

      <div className="form-group col-md-4">
        <label>Race time</label>
      <input
        id="winnerTime"
        name="winnerTime"
        value={winnerTime}
        className="form-control"
        placeholder="Race time"
        onChange={onChange}
      />
    </div>


    </>
  );
};

export default RaceDetailsInputs;
