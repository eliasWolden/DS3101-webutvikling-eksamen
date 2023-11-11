import React from "react";
import '../../css/RacePage.css';
import boostrap from 'bootstrap/dist/css/bootstrap.min.css';

const RaceItem = ({ winnerName, winnerTime, grandPrix, numberOfLaps, image }) => {
  return (
    <div className="container container d-flex align-items-center justify-content-center">
      <div className="card-container">
        <article className="card-article">
          <img className="card-image" src={image} alt={grandPrix}/>
          <div className="card-info">
            <span className="card-description">{winnerName}</span>
            <p className="card-text-info">Winner Time: {winnerTime} seconds</p>
            <p className="card-text-info">Number of Laps: {numberOfLaps}</p>
            <a href="#" className="btn btn-success card-button">Les mer om {winnerName}</a>
          </div>
        </article>
      </div>
    </div>
  );
};

export default RaceItem;
