import CreateDriver from "../components/Drivers/CreateDriver";
import DeleteDriver from "../components/Drivers/DeleteDriver";
import EditDriver from "../components/Drivers/GetDriverById";
import { GeneralProvider } from "../contexts/GeneralProvider";
import { DriverService } from "../services/CreateService";


const CRUDDriverPage = () => {
    return (
      <GeneralProvider service={DriverService}>
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
      </GeneralProvider>
    );
  };
  
  export default CRUDDriverPage;
  