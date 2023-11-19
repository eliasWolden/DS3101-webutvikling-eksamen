import AddTeam from "../components/CRUD/Teams/AddTeam";
import DeleteTeam from "../components/CRUD/Teams/DeleteTeam";
import EditTeam from "../components/CRUD/Teams/EditTeam";


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
  