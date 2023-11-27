import "react-multi-carousel/lib/styles.css";
import "../../css/DriverCarousel.css";
import { useContext } from "react";
import { GeneralContext } from "../../contexts/GeneralProvider";
import { IGeneralContext } from "../../interfaces/IGeneralContext";
import { IService } from "../../interfaces/IService";
import { IDriver } from "../../interfaces/Drivers/IDriver";
import DriverItem from "./Item/DriverItem";
import Carousel from "react-multi-carousel";

const DriverList = () => {
  const context = useContext(GeneralContext) as IGeneralContext<
    IService<IDriver>
  >;
  const drivers = context.items as [];

  const getDriversJSX = () =>
    drivers.map((driver: IDriver) => (
      <DriverItem
        key={driver.id}
        id={driver.id}
        name={driver.name}
        age={driver.age}
        nationality={driver.nationality}
        image={`http://localhost:5257/api/Image/driver/${driver.image}`}
        teamId={driver.teamId}
      />
    ));

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      step: 3,
    },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4, step: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2, step: 2 },
    mobile: { breakpoint: { max: 600, min: 0 }, items: 1, step: 1 },
  };

  return (
    <div className="p-5">
      <Carousel
        responsive={responsive}
        infinite={true}
        containerClass="carousel-container center"
        draggable={true}
        arrows={false}
        itemClass="driver-carousel-item"
      >
        {getDriversJSX()}
      </Carousel>
    </div>
  );
};

export default DriverList;
