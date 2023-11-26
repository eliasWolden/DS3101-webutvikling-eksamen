import { FC, useState, useContext, ChangeEvent } from "react";
import { IGeneralContext } from "../../interfaces/IGeneralContext";
import { IDriver } from "../../interfaces/Drivers/IDriver";
import { GeneralContext } from "../../contexts/GeneralProvider";
import DriverForm from "./DriverForm";

const DeleteDriver: FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const name = firstName + " " + lastName;
  const [deleteStatus, setDeleteStatus] = useState("");

  const context = useContext(GeneralContext) as IGeneralContext<IDriver>;

  const handleDelete = async () => {
    try {
      if (context) {
        if (firstName.toLowerCase() !== "" && lastName.toLowerCase() != "") {
          await context.deleteItemByName(name);
          setFirstName("");
          setLastName("");
          setDeleteStatus("Driver deleted");
        } else {
          setDeleteStatus("Please enter both Firstname and Lastname");
        }
      } else {
        setDeleteStatus("Something went wrong with deleting..");
      }
    } catch (error) {
      console.log("Error deleting driver", error);
      setDeleteStatus("Error deleting driver");
    }
  };

  const setHandler = (e: ChangeEvent<any>) => {
      const { name, value } = e.target;
  
      switch (name) {
        case "Firstname":
          setFirstName(value);
          break;
        case "Lastname":
          setLastName(value);
          break;
      }
    }

  return (
    <section className="d-flex justify-content-center">
      <form className="d-flex flex-column align-items-center bg-light p-4 border shadow w-75 rounded mb-3">
        <h2>Delete driver</h2>

         <DriverForm setHandler={setHandler} />


        <div className="row">
          <div className="form-group col-md-4 p-3">
            <input
              type="button"
              className="btn btn-danger"
              onClick={handleDelete}
              value="Delete driver"
            />

          </div>
        </div>
      </form>
    </section>
  );
};

export default DeleteDriver;
