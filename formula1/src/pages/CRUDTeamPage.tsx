import AddTeam from "../components/Teams/CreateTeam";
import DeleteTeam from "../components/Teams/DeleteTeam";
import EditTeam from "../components/Teams/EditTeam";
import { EntityProvider } from "../contexts/EntityProvider";
import { TeamService } from "../services/CreateService";


const CRUDTeamPage = () => {
    return (
      <EntityProvider service={TeamService}>
      <div>
        <section>
        </section>
          <AddTeam/>
        <section>
        </section>
          <DeleteTeam/>
        <section>
          <EditTeam/>
        </section>
      </div>
      </EntityProvider>
    );
  };
  
  export default CRUDTeamPage;
  