import React, { useContext } from "react";
import Carousel from "react-multi-carousel";
import { DriverContext } from "../../contexts/DriverContext";
import DriverItem from "./DriverItem";
import "react-multi-carousel/lib/styles.css";
import "../../css/DriverCarousel.css";

const DriverList = ({ onSelectDriver }) => {
  const { drivers } = useContext(DriverContext);
//getDriversJSX henter inn sjafører fra context og lager en liste med sjafører som blir burkt av item i carousel
  const getDriversJSX = () =>
    drivers.map((driver) => (
      <DriverItem
        key={`driver-${driver.id}`}
        name={driver.name}
        age={driver.age}
        nationality={driver.nationality}
        image={`http://localhost:5257/api/Image/driver/${driver.image}`}
        teamid={driver.teamId}
        onClick={() => onSelectDriver(driver)} // kaller på utvalgt sjafør
      />
    ));
  // Carousel konfigurasjon
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  return (
    <Carousel
      responsive={responsive}
      infinite={true}
      containerClass="carousel-container center"
      showDots={true}
    >
      {getDriversJSX()}
    </Carousel>
  );
};

export default DriverList;
