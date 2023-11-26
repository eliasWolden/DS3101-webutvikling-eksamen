import { FC } from "react";
import "../../css/RacePage.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { IRace } from "../../interfaces/Races/IRace";
import { Link } from "react-router-dom";

const RaceItem: FC<IRace> = ({
  id,
  winnerName,
  winnerTime,
  grandPrix,
  numberOfLaps,
  image,
}) => {
  return (
    <div key={id} className="col-md-4 mb-4 w-75 container">
      <article className="race-card-article">
        <img
          className="race-card-image-size-race"
          src={image}
          alt={grandPrix}
          draggable={false}
        />
        <div className="race-card-info">
          <span className="race-card-description">{winnerName}</span>
          <p className="race-card-text-info">Winner Time: {winnerTime}</p>
          <p className="race-card-text-info">Number of Laps: {numberOfLaps}</p>

          <Link to={`/DriverPage/${winnerName}`}>
            <button className="btn btn-primary">Read more</button>
          </Link>
        </div>
      </article>
    </div>
  );
};

export default RaceItem;
