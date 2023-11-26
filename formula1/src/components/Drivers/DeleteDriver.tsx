
import { FC, useState, useContext, ChangeEvent } from "react";
import { IGeneralContext } from "../../interfaces/IGeneralContext";
import { IDriver } from "../../interfaces/Drivers/IDriver";
import { GeneralContext } from "../../contexts/GeneralProvider";
import DriverForm from "./DriverForm";

import DeleteButton from "../Shared/DeleteButton";
import StatusMessage from "../Shared/StatusMessage";


const DeleteDriver: FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [Status, setStatus] = useState("");

  const context = useContext(GeneralContext) as IGeneralContext<IDriver>;

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
  };

  const handleDelete = async () => {
    try {
      if (context) {
        if (firstName.toLowerCase() !== "" && lastName.toLowerCase() !== "") {
          const name = `${firstName} ${lastName}`;
          await context.deleteItemByName(name);
          setFirstName("");
          setLastName("");

          setStatus("Completed");

        } else {
          setStatus("Please enter both Firstname and Lastname");
        }
      } else {
        setStatus("Something went wrong with deleting..");
      }
    } catch (error) {
      console.log("Error deleting driver", error);
      setStatus("Error deleting driver");
    }
  };


  return (
    <section className="d-flex justify-content-center">
      <form className="d-flex flex-column align-items-center bg-light p-4 border shadow w-75 rounded mb-3">
        <h2>Delete driver</h2>


        <DriverForm setHandler={setHandler} />

        <DeleteButton onClick={handleDelete} />

        <StatusMessage status={Status} />

      </form>
    </section>
  );
};

export default DeleteDriver;
