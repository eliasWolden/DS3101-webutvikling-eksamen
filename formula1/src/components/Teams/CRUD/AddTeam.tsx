import { FC, useState, ChangeEvent, useContext } from "react";
import { ITeam } from "../../../interfaces/Teams/ITeam";
import { IGeneralContext } from "../../../interfaces/IGeneralContext";
import { GeneralContext } from "../../../contexts/GeneralProvider";
import TeamForm from "../Forms/TeamForm";
import TeamCarSelect from "../Forms/TeamCarSelect";
import StatusMessage from "../../Shared/StatusMessage";
import SaveButton from "../../Shared/SaveButton";

const AddTeam: FC = () => {
  const [driver1FirstName, setDriver1FirstName] = useState("");
  const [driver1LastName, setDriver1LastName] = useState("");
  const driver1FullName = `${driver1FirstName} ${driver1LastName}`;

  const [driver2FirstName, setDriver2FirstName] = useState("");
  const [driver2LastName, setDriver2LastName] = useState("");
  const driver2FullName = `${driver2FirstName} ${driver2LastName}`;

  const [manufacturer, setManufacturer] = useState("");
  const [selectedCar, setSelectedCar] = useState("");
  const [Status, setStatus] = useState("");

  const context = useContext(GeneralContext) as IGeneralContext<ITeam>;

  const setHandler = (e: ChangeEvent<any>) => {
    const { name, value, files } = e.target;
    console.log(name, value, files);

    switch (name) {
      case "driver1FirstName":
        setDriver1FirstName(value);
        break;
      case "driver1LastName":
        setDriver1LastName(value);
        break;
      case "driver2FirstName":
        setDriver2FirstName(value);
        break;
      case "driver2LastName":
        setDriver2LastName(value);
        break;
      case "manufacturer":
        setManufacturer(value);
        break;
      case "selectedCar":
        setSelectedCar(value);
        break;
    }
  };

  const saveTeam = () => {
    if (driver1FirstName != "" && driver1LastName != "") {
      const newTeam: ITeam = {
        manufacturer: manufacturer,
        image: selectedCar,
        driver1: driver1FullName,
        driver2: driver2FullName,
      };
      handleAdd(newTeam);
      setStatus("You added a team!");
      console.log(newTeam);
    } else {
      setStatus("Please enter a name");
    }
  };

  const handleAdd = async (newTeam: ITeam) => {
    try {
      if (context) await context.postItem(newTeam);
    } catch (error) {
      console.log("Error adding Team", error);
      setStatus("Something went wrong with adding...");
    }
  };

  return (
    <section className="d-flex justify-content-center align-items-center">
      <form className="bg-light p-4 border shadow w-75 rounded mb-3">
        <h2 className="text-center mb-4">Create Team</h2>

        <TeamForm setHandler={setHandler} />

        <TeamCarSelect setHandler={setHandler} />

        <StatusMessage status={Status} />

        <SaveButton onClick={saveTeam} />
      </form>
    </section>
  );
};

export default AddTeam;
