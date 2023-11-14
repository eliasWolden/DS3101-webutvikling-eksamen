import { useContext } from "react";
import RaceItem from "./RaceItem";
import { RaceContext } from "../../contexts/RaceContext";
import { IRaceContext } from "../../interfaces/Races/IRaceContext";
import { IRace } from "../../interfaces/Races/IRace";

const RaceList = () => {
  const { races } = useContext(RaceContext) as IRaceContext;
  //getRacesJSX henter inn race fra context og lager en liste med races som blir burkt av item
  const getRacesJSX = () => 
    races.map((race: IRace) => (
      <RaceItem
        key={`race-item-${race.id}`}
        id={race.id}
        winnerName={race.winnerName}
        winnerTime={race.winnerTime}
        grandPrix={race.grandPrix}
        numberOfLaps={race.numberOfLaps}
        image={`http://localhost:5257/api/Image/race/${race.image}`}
      />
    ));

  return (
    <section className="row g-3">
      {getRacesJSX()}
    </section>
  );
};

export default RaceList;
