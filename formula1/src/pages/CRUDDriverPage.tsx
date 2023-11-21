import CreateDriver from "../components/Drivers/CreateDriver";
import DeleteDriver from "../components/Drivers/DeleteDriver";
import EditDriver from "../components/Drivers/GetDriverById";


const CRUDDriverPage = () => {
    return (
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
    );
  };
  
  export default CRUDDriverPage;
  