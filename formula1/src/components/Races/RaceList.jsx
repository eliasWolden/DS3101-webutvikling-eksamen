// RaceList.js
import React, { useContext } from "react";
import MediaService from "../../services/MediaService";
import RaceItem from "./RaceItem";
import { RaceContext } from "../../contexts/RaceContext";

const RaceList = () => {
  const { races } = useContext(RaceContext);
  //getRacesJSX henter inn race fra context og lager en liste med races som blir burkt av item
  const getRacesJSX = () => 
    races.map((race, i) => (
      <RaceItem
        key={`race-item-${i}`}
        winnerName={race.winnerName}
        winnerTime={race.winnerTime}
        grandPrix={race.grandPrix}
        numberOfLaps={race.numberOfLaps}
        image={`http://localhost:5257/api/ImageUpload/race/${race.image}`}
      />
    ));

  return (
    <section>
      {getRacesJSX()}
    </section>
  );
};

export default RaceList;
