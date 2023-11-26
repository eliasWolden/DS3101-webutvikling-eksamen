import AddDriver from "../components/Drivers/CRUD/AddDriver";
import DeleteDriver from "../components/Drivers/CRUD/DeleteDriver";
import EditDriver from "../components/Drivers/CRUD/EditDriver";
import { GeneralProvider } from "../contexts/GeneralProvider";
import "../css/CRUD.css";
import { DriverService } from "../services/CreateService";

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
