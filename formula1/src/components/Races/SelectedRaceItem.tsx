import { FC } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IRace } from "../../interfaces/Races/IRace";
import "../../css/main.css";
const SelectedRaceItem: FC<IRace> = ({
  grandPrix,
  numberOfLaps,
  winnerTime,
  winnerName,
  image,
}) => {
  return (
    <div className="selected-race-container">
      <div className="selected-race-box-full">
        <div className="selected-race-box-left">
          <img
            className="selected-race-card-image-size"
            src={image}
            alt={grandPrix}
            draggable={false}
          />
        </div>

        <div className="selected-race-box-right">
          <div className="selected-race-text-box">
            <h1 className="selected-title">{grandPrix}</h1>
            <p className="selected-text">
              This race was in {grandPrix} the winner was {winnerName}. They won
              the race with a time of {winnerTime} and had {numberOfLaps} laps
              in total.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectedRaceItem;
