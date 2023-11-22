import RaceList from "../components/Races/RaceList";
import { EntityProvider } from "../contexts/EntityProvider";
import { RaceService } from "../services/CreateService";

const RacePage = () => {
  return (
    <EntityProvider service={RaceService}>
    <div>
      <br />
      <section>
        <RaceList/>
      </section>
    </div>
    </EntityProvider>
  );
};

export default RacePage;
