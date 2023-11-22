import { useContext } from "react";
import Carousel from "react-multi-carousel";
import RaceItem from "./RaceItem";
import { IRace } from "../../interfaces/Races/IRace";
import { EntityContext } from "../../contexts/EntityContext";
import { IEntityContext } from "../../interfaces/IEntityContext";
import { IService } from "../../interfaces/IService";

const RaceList = () => {
  const context = useContext(EntityContext) as IEntityContext<IService<IRace>>;
    const races = context.items as [];
    
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

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 1 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="driver-carousel-container">
      <Carousel
        responsive={responsive}
        infinite={true}
        containerClass="carousel-container center"
        showDots={false}
        draggable={true}
        arrows={false}
        itemClass="race-carousel-item"
      >
        {getRacesJSX()}
      </Carousel>
    </div>
  );
};

export default RaceList;
