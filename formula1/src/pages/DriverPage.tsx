import DriverList from "../components/Drivers/DriverList";
import { EntityProvider } from "../contexts/EntityProvider";
import { DriverService } from "../services/CreateService";

const DriverPage = () => {
  /* velger sjaførs sitt lag */

  return (
    <EntityProvider service={DriverService}>
      <section>
        <DriverList />
      </section>
    </EntityProvider>
  );
};

export default DriverPage;
