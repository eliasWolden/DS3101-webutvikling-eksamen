import AddRace from "../components/Races/CreateRace";
import DeleteRace from "../components/Races/DeleteRace";
import GetRaceByName from "../components/Races/GetRaceByName";
import { GeneralProvider } from "../contexts/GeneralProvider";
import { RaceService } from "../services/CreateService";

const CRUDRacePage = () => {
  return (
    <GeneralProvider service={RaceService}>
      <div className="section">
        <section>
          <AddRace />
        </section>
        <section>
          <DeleteRace />
        </section>
        <section>
          <GetRaceByName />
        </section>
      </div>
    </GeneralProvider>
  );
};

export default CRUDRacePage;
