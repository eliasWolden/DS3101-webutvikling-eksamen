import { FC } from "react";
import "../../css/RacePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { IRace } from "../../interfaces/Races/IRace";
import { EntityProvider } from "../../contexts/EntityProvider";
import { RaceService } from "../../services/CreateService";

const RaceItem: FC<IRace> = ({ winnerName, winnerTime, grandPrix, numberOfLaps, image }) => {
  return (
    <EntityProvider service={RaceService}>
    <div className="col-md-4 mb-4 w-75 container">
      <article className="race-card-article">
        <img
          className="race-card-image-size-race"
          src={image}
          alt={grandPrix}
          draggable={false}
        />
        <div className="race-card-info">
          <span className="race-card-description">{winnerName}</span>
          <p className="race-card-text-info">
            Winner Time: {winnerTime}
          </p>
          <p className="race-card-text-info">Number of Laps: {numberOfLaps}</p>
          <a href="#" className="btn btn-success race-card-button">
            Les mer om {winnerName}
          </a>
        </div>
      </article>
    </div>
    </EntityProvider>
  );
};

export default RaceItem;
