import { useContext, useEffect } from "react";
import { IRace } from "../../interfaces/Races/IRace";
import { IGeneralContext } from "../../interfaces/IGeneralContext";
import { IService } from "../../interfaces/IService";
import SelectedRaceItem from "./SelectedRaceItem";
import Carousel from "react-multi-carousel";
import { SelectedRaceListProps } from "../../interfaces/ISelectedRaceListProps";
import { GeneralContext } from "../../contexts/GeneralProvider";

const SelectedRaceList: React.FC<SelectedRaceListProps> = ({
  name,
  updateAmountOfWins,
}) => {
  const context = useContext(GeneralContext) as IGeneralContext<
    IService<IRace>
  >;
  const racesFromContext = context.items as unknown as IRace[];

  const races = racesFromContext.filter(
    (race) => race.winnerName.toLowerCase() === name
  );

  const amountOfWins = races.length;

  useEffect(() => {
    updateAmountOfWins(amountOfWins);
  }, [amountOfWins, updateAmountOfWins]);

  const getRacesJSX = () =>
    races.map((race: IRace) => (
      <div key={race.id} className="col-md-6">
        <SelectedRaceItem
          id={race.id}
          winnerName={race.winnerName}
          winnerTime={race.winnerTime}
          grandPrix={race.grandPrix}
          numberOfLaps={race.numberOfLaps}
          image={`http://localhost:5257/api/Image/race/${race.image}`}
        />
      </div>
    ));

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="selected-race-container">
      <Carousel
        responsive={responsive}
        infinite={true}
        showDots={false}
        draggable={true}
        arrows={false}
        autoPlay={true}
        itemClass="race-carousel-item"
      >
        {getRacesJSX()}
      </Carousel>
    </div>
  );
};

export default SelectedRaceList;
