import DeleteDriver from "../components/Drivers/DeleteDriver";
import EditDriver from "../components/Drivers/EditDriver";
import { GeneralProvider } from "../contexts/GeneralProvider";
import { DriverService } from "../services/CreateService";
import "../css/CRUD.css";
import AddDriver from "../components/Drivers/AddDriver";

const CRUDDriverPage = () => {
  return (
    <GeneralProvider service={DriverService}>
      <div className="section">
        <section>
          <AddDriver />
        </section>

        <section>
          <DeleteDriver />
        </section>

        <section>
          <EditDriver />
        </section>
      </div>
    </GeneralProvider>
  );
};

export default CRUDDriverPage;
