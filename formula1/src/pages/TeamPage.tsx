import TeamList from "../components/Teams/TeamList";
import { GeneralProvider } from "../contexts/GeneralProvider";
import { TeamService } from "../services/CreateService";

const TeamPage = () => {
  return (
    <GeneralProvider service={TeamService}>
      <section>
        <TeamList />
      </section>
    </GeneralProvider>
  );
};

export default TeamPage;
