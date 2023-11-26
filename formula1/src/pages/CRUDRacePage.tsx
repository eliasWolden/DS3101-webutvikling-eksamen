import AddRace from "../components/Races/CRUD/AddRace";
import DeleteRace from "../components/Races/CRUD/DeleteRace";
import GetRaceByName from "../components/Races/CRUD/EditRace";
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
