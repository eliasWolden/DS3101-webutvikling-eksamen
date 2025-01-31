import React, { useEffect, useState } from "react";
import SelectedDriverList from "../components/Drivers/SelectedDriverList";
import { GeneralProvider } from "../contexts/GeneralProvider";
import {
  DriverService,
  RaceService,
  TeamService,
} from "../services/CreateService";
import SelectedTeamList from "../components/Teams/SelectedTeamList";
import SelectedRaceList from "../components/Races/SelectedRaceList";
import { useParams } from "react-router-dom";
import Footer from "../components/Home/Footer";
import '../css/main.css';

const DriverPage: React.FC = () => {
  const [driverName, setDriverName] = useState<string>("");
  const [amountOfWins, setAmountOfWins] = useState<number>(0);
  const { name } = useParams<{ name: string }>();

  const updateAmountOfWins = (wins: number) => {
    setAmountOfWins(wins);
  };

  useEffect(() => {
    if (name !== undefined && name.toLowerCase() !== driverName) {
      setDriverName(name.toLowerCase());
    }
  }, [name, driverName]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [driverName]);

  const teamSectionClass = amountOfWins <= 0 ? "teams-with-wins" : "";


  return (
    <section>
      <GeneralProvider service={DriverService}>
        <section className="selected-driver-section selected-team-text">
          <h1 className="selected-title">Driver information</h1>
            <p className="selected-text selected-text-background">{driverName} has won {amountOfWins} races.</p>
          <SelectedDriverList name={driverName} />
        </section>
      </GeneralProvider>
      <GeneralProvider service={RaceService}>
        <section className={teamSectionClass}>
          <SelectedRaceList
            name={driverName}
            updateAmountOfWins={updateAmountOfWins}
          />
        </section>
      </GeneralProvider>
      <GeneralProvider service={TeamService}>
        <section className={teamSectionClass}>
        <h1 className="selected-title">Team:</h1>
          <SelectedTeamList name={driverName} />
        </section>
      </GeneralProvider>
      <Footer />
    </section>
  );
};

export default DriverPage;
