import React, { useEffect, useState } from "react";
import SelectedDriverList from "../components/Drivers/SelectedDriverList";
import { EntityProvider } from "../contexts/EntityProvider";
import { DriverService, RaceService, TeamService } from "../services/CreateService";
import SelectedTeamList from "../components/Teams/SelectedTeamList";
import SelectedRaceList from "../components/Races/SelectedRaceList";
import { useParams } from "react-router-dom";

const DriverPage: React.FC = () => {
  const [driverName, setDriverName] = useState<string>("");
  const {name} = useParams<{name: string}>();

  useEffect(() => {
    if (name !== undefined && name.toLowerCase() !== driverName) {
      setDriverName(name.toLowerCase());
    }
  }, [name, driverName]);

  return (
    <section>
      <EntityProvider service={DriverService}>
        <section>
          <SelectedDriverList name={driverName} />
        </section>
      </EntityProvider>
      <EntityProvider service={TeamService}>
        <section>
          <SelectedTeamList name={driverName} />
        </section>
      </EntityProvider>
      <EntityProvider service={RaceService}>
        <section>
          <SelectedRaceList name={driverName} />
        </section>
      </EntityProvider>
  
    </section>
  );
};

export default DriverPage;
