import { FC } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { IRace } from "../../interfaces/Races/IRace";

const SelectedRaceItem: FC<IRace> = ({ winnerName, winnerTime, grandPrix, numberOfLaps, image }) => {
  return (
    <div className="col-md-4 mb-4 w-75 container">
      <article className="race-card-article">
        <img
          className="race-card-image-size-race"
          src={image}
          alt={grandPrix}
          draggable={false}
        />
        <div className="text-center">
          <span className="">{winnerName}</span>
          <p className="">Winner Time: {winnerTime}</p>
          <p className="">Number of Laps: {numberOfLaps}</p>
        </div>
      </article>
    </div>
  );
};

export default SelectedRaceItem;
