import TeamList from "../components/Teams/TeamList";
import { EntityProvider } from "../contexts/EntityProvider";
import { TeamService } from "../services/CreateService";

const TeamPage = () => {
  return (
    <EntityProvider service={TeamService}>
    <section>
      <TeamList/>
    </section>
    </EntityProvider>
  );
};

export default TeamPage;
