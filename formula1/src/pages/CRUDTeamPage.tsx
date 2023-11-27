import Footer from "../components/Home/Footer";
import AddTeam from "../components/Teams/AddTeam";
import DeleteTeam from "../components/Teams/DeleteTeam";
import EditTeam from "../components/Teams/EditTeam";
import { GeneralProvider } from "../contexts/GeneralProvider";
import { TeamService } from "../services/CreateService";

const CRUDTeamPage = () => {
  return (
    <GeneralProvider service={TeamService}>
      <div className="section">
        <section>
          <AddTeam />
        </section>

        <section>
          <DeleteTeam />
        </section>

        <section>
          <EditTeam />
        </section>
      </div>
      <section>
        <Footer />
      </section>
    </GeneralProvider>
  );
};

export default CRUDTeamPage;
