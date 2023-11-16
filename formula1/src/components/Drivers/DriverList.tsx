import { useContext } from "react";
import Carousel from "react-multi-carousel";
import { DriverContext } from "../../contexts/DriverContext";
import DriverItem from "./DriverItem";
import "react-multi-carousel/lib/styles.css";
import "../../css/DriverCarousel.css";
import { IDriver } from "../../interfaces/Drivers/IDriver";
import { IDriverContext } from "../../interfaces/Drivers/IDriverContext";

const DriverList = () => {
  const { drivers } = useContext(DriverContext) as IDriverContext;

  const getDriversJSX = () =>
    drivers.map((driver: IDriver) => (
      <DriverItem
        key={driver.id}
        id={driver.id}
        name={driver.name}
        age={driver.age}
        nationality={driver.nationality}
        image={`http://localhost:5257/api/Image/driver/${driver.image}`}
        teamid={driver.teamid}
      />
    ));

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
      step: 3,
    },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3, step: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, step: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1, step: 3 },
  };

  return (
    <div className="p-5">
      <Carousel
        responsive={responsive}
        infinite={true}
        containerClass="carousel-container center"
        showDots={true}
        draggable={false}
        itemClass="driver-carousel-item"
      >
        {getDriversJSX()}
      </Carousel>
    </div>
  );
};

export default DriverList;
