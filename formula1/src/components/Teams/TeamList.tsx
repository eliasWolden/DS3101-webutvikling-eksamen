import { useContext } from "react";
import Carousel from "react-multi-carousel";
import TeamItem from "./TeamItem";
import "react-multi-carousel/lib/styles.css";
import "../../css/TeamCarousel.css";
import { ITeam } from "../../interfaces/Teams/ITeam";
import { IGeneralContext } from "../../interfaces/IGeneralContext";
import { IService } from "../../interfaces/IService";
import { GeneralContext } from "../../contexts/GeneralProvider";

const TeamList = () => {
  const context = useContext(GeneralContext) as IGeneralContext<
    IService<ITeam>
  >;
  const teams = context.items as [];

  const getTeamsJSX = () => {
    return teams.map((team: ITeam) => (
      <TeamItem
        key={`team-item-${team.id + team.manufacturer}`}
        id={team.id}
        manufacturer={team.manufacturer}
        driver1={team.driver1}
        driver2={team.driver2}
        image={`http://localhost:5257/api/Image/car/${team.image}`}
      />
    ));
  };

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 2 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 1 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <div className="p-5">
      <Carousel
        responsive={responsive}
        infinite={true}
        containerClass="carousel-container center"
        showDots={false}
        draggable={true}
        arrows={false}
        itemClass="carousel-item-padding-40"
      >
        {getTeamsJSX()}
      </Carousel>
    </div>
  );
};

export default TeamList;
