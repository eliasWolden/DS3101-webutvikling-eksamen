import React, { useEffect, useState } from "react";
import MediaService from "../../services/MediaService";
import DriverItem from "./DriverItem";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../../css/DriverCarousel.css";

const DriverList = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await MediaService.getAllDrivers();
        if (result.drivers) {
          setDrivers(result.drivers);
        }
      } catch {
        console.log("error");      }
    };

    fetchData();
  }, []);

  const getDrivers = () => {
    return drivers.map((driver, i) => (
      <DriverItem
        key={`driver-${i}`}
        name={driver.name}
        age={driver.age}
        nationality={driver.nationality}
        image={`http://localhost:5257/api/ImageUpload/driver/${driver.image}`}
      />
    ));
  };
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return <Carousel 
            responsive={responsive}
            infinite={true}
            containerClass="carousel-container center"
            showDots={true}
            >
              {getDrivers()}
          </Carousel>;
};

export default DriverList;
