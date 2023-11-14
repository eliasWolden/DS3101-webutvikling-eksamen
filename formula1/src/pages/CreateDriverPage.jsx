import CreateDriver from "../../src/components/CRUD/Driver/CreateDriver";
import DeleteDriver from "../../src/components/CRUD/Driver/DeleteDriver";


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
  