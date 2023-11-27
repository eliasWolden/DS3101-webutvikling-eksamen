import { ChangeEvent, FC, useContext, useState } from "react";
import { GeneralContext } from "../../../contexts/GeneralProvider";
import { IGeneralContext } from "../../../interfaces/IGeneralContext";
import { IDriver } from "../../../interfaces/Drivers/IDriver";
import DriverForm from "../Forms/DriverForm";
import DeleteButton from "../../Shared/DeleteButton";
import StatusMessage from "../../Shared/StatusMessage";

const DeleteDriver: FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const context = useContext(GeneralContext) as IGeneralContext<IDriver>;

  const setHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name.toLowerCase()) {
      case "firstname":
        setFirstName(value);
        break;
      case "lastname":
        setLastName(value);
        break;
      default:
        break;
    }
  };

  const handleDelete = async () => {
    try {
      if (context) {
        if (firstName.trim() !== "" && lastName.trim() !== "") {
          const name = `${firstName} ${lastName}`;
          await context.deleteItemByName(name);
          setFirstName("");
          setLastName("");
          setStatus("Completed");
        } else {
          setStatus("Please enter both Firstname and Lastname");
        }
      } else {
        setStatus("Something went wrong with deleting...");
      }
    } catch (error) {
      console.error("Error deleting driver", error);
      setStatus("Error deleting driver");
    }
  };

  return (
    <section className="d-flex justify-content-center">
      <form className="d-flex flex-column align-items-center bg-light p-4 border shadow w-75 rounded mb-3">
        <h2>Delete driver</h2>

        <DriverForm setHandler={setHandler} />

        <div className=" align-items-center">
          <DeleteButton onClick={handleDelete} />
        </div>

        <StatusMessage status={status} />
      </form>
    </section>
  );
};

export default DeleteDriver;
