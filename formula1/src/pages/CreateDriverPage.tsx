import CreateDriver from "../components/CRUD/Driver/CreateDriver";
import DeleteDriver from "../components/CRUD/Driver/DeleteDriver";


const CreateDriverPage = () => {
    return (
      <div>
        <section>
          <CreateDriver/>
        </section>

        <section>
          <DeleteDriver/>
        </section>
      </div>
    );
  };
  
  export default CreateDriverPage;
  