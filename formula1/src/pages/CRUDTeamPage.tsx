import AddTeam from "../components/Teams/CreateTeam";
import DeleteTeam from "../components/Teams/DeleteTeam";
import EditTeam from "../components/Teams/EditTeam";


const CRUDTeamPage = () => {
    return (
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
    );
  };
  
  export default CRUDTeamPage;
  