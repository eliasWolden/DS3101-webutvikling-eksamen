import RaceList from "../components/Races/RaceList";
import { GeneralProvider } from "../contexts/GeneralProvider";
import { RaceService } from "../services/CreateService";

const RacePage = () => {
  return (
    <GeneralProvider service={RaceService}>
      <div>
        <br />
        <section>
          <RaceList />
        </section>
      </div>
    </GeneralProvider>
  );
};

export default RacePage;
