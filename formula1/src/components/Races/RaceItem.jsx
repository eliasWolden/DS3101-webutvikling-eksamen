import React from "react";
import '../../css/RacePage.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const RaceItem = ({ winnerName, winnerTime, grandPrix, numberOfLaps, image }) => {
  return (
    <div className="col-md-4 container">
        <article className="race-card-article">
          <img className="race-card-image-size-race" src={image} alt={grandPrix}/>
          <div className="race-card-info">
            <span className="race-card-description">{winnerName}</span>
            <p className="race-card-text-info">Winner Time: {winnerTime} seconds</p>
            <p className="race-card-text-info">Number of Laps: {numberOfLaps}</p>
            <a href="#" className="btn btn-success race-card-button">Les mer om {winnerName}</a>
          </div>
        </article>
      </div>
  );
};

export default RaceItem;
