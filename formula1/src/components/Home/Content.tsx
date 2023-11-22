import "../../css/HomePage.css";
import TeamList from "../Teams/TeamList";
import DriverList from "../Drivers/DriverList";
import RaceList from "../Races/RaceList";
import Quiz from "./Quiz";
import "../../css/QuizGame.css";
import { EntityProvider } from "../../contexts/EntityProvider";
import { DriverService, RaceService, TeamService } from "../../services/CreateService";

const Content = () => {
  return (
    <article>
      <section>
        <div>
          <h3 className="header-f1 text-center p-4 text-uppercase">
            Formula 1 Drivers
          </h3>
        </div>
        <EntityProvider service={DriverService}>
        <DriverList />
        </EntityProvider>
      </section>
      <section>
        <div>
          <h3 className="header-f1 text-center p-4 text-uppercase">
            Formula 1 Teams
          </h3>
        </div>
        <EntityProvider service={TeamService}>
        <TeamList />
        </EntityProvider>
      </section>
      <section>
        <div>
          <h3 className="header-f1 text-center p-4 text-uppercase">
            Formula 1 Races
          </h3>
        </div>
        <EntityProvider service={RaceService}>
        <RaceList />
        </EntityProvider>
      </section>
      <section>
        <div>
          <Quiz />
        </div>
      </section>
    </article>
  );
};

export default Content;
