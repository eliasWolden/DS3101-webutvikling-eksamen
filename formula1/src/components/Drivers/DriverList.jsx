import React, { useEffect, useState } from "react";
import MediaService from "../../services/MediaService";
import DriverItem from "./DriverItem";

const DriverList = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await MediaService.getAll();
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
        image={`http://localhost:5257/api/ImageUpload/${driver.image}`}
      />
    ));
  };

  return <section className="row g-5">{getDrivers()}</section>;
};

export default DriverList;
