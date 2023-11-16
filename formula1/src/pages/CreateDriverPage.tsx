import CreateDriver from "../components/CRUD/Driver/CreateDriver";
import DeleteDriver from "../components/CRUD/Driver/DeleteDriver";
import GetDriverById from "../components/CRUD/Driver/GetDriverById";


const CreateDriverPage = () => {
    return (
      <div>
        <section>
          <CreateDriver/>
        </section>

        <section>
          <DeleteDriver/>
        </section>

        <section>
          <GetDriverById/>
        </section>
      </div>
    );
  };
  
  export default CreateDriverPage;
  