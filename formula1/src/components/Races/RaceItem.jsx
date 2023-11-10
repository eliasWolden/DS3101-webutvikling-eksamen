import React from "react";

const RaceItem = ({ winnerName, winnerTime, grandPrix, numberOfLaps, image }) => {
  return (
    <article>
      <h2>{grandPrix}</h2>
      <p>Winner: {winnerName}</p>
      <p>Winner Time: {winnerTime} seconds</p>
      <p>Number of Laps: {numberOfLaps}</p>
      {image && <img src={image} alt={grandPrix}/>}
    </article>
  );
};

export default RaceItem;
