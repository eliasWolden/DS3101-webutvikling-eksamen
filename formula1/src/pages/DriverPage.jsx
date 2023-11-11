import DriverList from "../components/Drivers/DriverList";
import TeamList from "../components/Teams/TeamList";
import React, { useState } from 'react';

const DriverPage = () => {
  /* velger sjaførs sitt lag */
  const [selectedDriver, setSelectedDriver] = useState(null);

  return (
    <div>
      <section>
        {/* henter utvalgt sjafør fra driverlist */}
        <DriverList onSelectDriver={(driver) => setSelectedDriver(driver)} />
      </section>
      <section className="d-flex justify-content-center text-center">
        {/* sender utvalgt sjafør team id til teamlist */}
        <TeamList selectedDriver={selectedDriver} />
      </section>
    </div>
  );
};

export default DriverPage;
