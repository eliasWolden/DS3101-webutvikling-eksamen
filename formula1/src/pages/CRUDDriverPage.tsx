import CreateDriver from "../components/CRUD/Driver/CreateDriver";
import DeleteDriver from "../components/CRUD/Driver/DeleteDriver";
import EditDriver from "../components/CRUD/Driver/GetDriverById";


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
  