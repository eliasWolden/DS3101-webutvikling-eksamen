import "../../css/HomePage.css";
import TeamList from "../Teams/TeamList";
import DriverList from "../Drivers/DriverList";
import RaceList from "../Races/RaceList";
import Quiz from "./Quiz";
import "../../css/QuizGame.css";

const Content = () => {
  return (
    <article>
      <section>
        <div>
          <h3 className="header-f1 text-center p-4 text-uppercase">
            Formula 1 Drivers
          </h3>
        </div>
        <DriverList />
      </section>
      <section>
        <div>
          <h3 className="header-f1 text-center p-4 text-uppercase">
            Formula 1 Teams
          </h3>
        </div>
        <TeamList />
      </section>
      <section>
        <div>
          <h3 className="header-f1 text-center p-4 text-uppercase">
            Formula 1 Races
          </h3>
        </div>
        <RaceList />
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
