import DriverList from "../components/Drivers/DriverList";
import TeamList from "../components/Teams/TeamList";

const DriverPage = () => {
  /* velger sjaførs sitt lag */

  return (
    <div>
      <section>
        <DriverList />
      </section>
      <section>
        <TeamList />
      </section>
    </div>
  );
};

export default DriverPage;
