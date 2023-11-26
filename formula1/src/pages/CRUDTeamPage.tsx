import AddTeam from "../components/Teams/CreateTeam";
import DeleteTeam from "../components/Teams/DeleteTeam";
import EditTeam from "../components/Teams/EditTeam";
import { GeneralProvider } from "../contexts/GeneralProvider";
import { TeamService } from "../services/CreateService";


const CRUDTeamPage = () => {
    return (
      <GeneralProvider service={TeamService}>
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
      </GeneralProvider>
    );
  };
  
  export default CRUDTeamPage;
  