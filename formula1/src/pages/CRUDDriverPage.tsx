import CreateDriver from "../components/Drivers/CreateDriver";
import DeleteDriver from "../components/Drivers/DeleteDriver";
import EditDriver from "../components/Drivers/GetDriverById";
import { EntityProvider } from "../contexts/EntityProvider";
import { DriverService } from "../services/CreateService";


const CRUDDriverPage = () => {
    return (
      <EntityProvider service={DriverService}>
      <div>
        <section>
          <CreateDriver/>
        </section>

        <section>
          <DeleteDriver/>
        </section>

        <section>
          <EditDriver/>
        </section>
      </div>
      </EntityProvider>
    );
  };
  
  export default CRUDDriverPage;
  