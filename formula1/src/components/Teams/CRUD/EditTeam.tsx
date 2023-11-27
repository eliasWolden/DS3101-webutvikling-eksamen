import { useState, ChangeEvent, useContext } from "react";
import "../../css/main.css";
import { ITeam } from "../../../interfaces/Teams/ITeam";
import { IGeneralContext } from "../../../interfaces/IGeneralContext";
import { GeneralContext } from "../../../contexts/GeneralProvider";
import "../../css/CRUD.css";
import IdInput from "../../Shared/IdInput";
import StatusMessage from "../../Shared/StatusMessage";
import SaveButton from "../../Shared/SaveButton";
import GetImage from "../../Shared/GetImage";
import GetButton from "../../Shared/GetButton";
import TeamInputForm from "../Forms/TeamInputForm";

const EditTeam = () => {
  const context = useContext(GeneralContext) as IGeneralContext<ITeam>;
  const [id, setId] = useState<number>(0);
  const [Status, setStatus] = useState("");
  const [driverObtained, setDriverObtained] = useState(false);

  const [teamsToUpdate, setTeamsToUpdate] = useState<ITeam>({
    manufacturer: "",
    image: "",
    driver1: "",
    driver2: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.currentTarget.name) {
      case "id":
        setId(parseInt(e.currentTarget.value));
        break;
      case "manufacturer":
        setTeamsToUpdate({
          ...teamsToUpdate,
          manufacturer: e.currentTarget.value,
        });
        break;
      case "Driver1":
        setTeamsToUpdate({ ...teamsToUpdate, driver1: e.currentTarget.value });
        break;
      case "Driver2":
        setTeamsToUpdate({ ...teamsToUpdate, driver2: e.currentTarget.value });
        break;
    }
  };

  const getByIdFromContext = async () => {
    if (id === 0) {
      setStatus("Please enter an id");
      return;
    }
    try {
      const teamsFromContext = await context?.getById(id);
      if (teamsFromContext != null) {
        setTeamsToUpdate(teamsFromContext);
        console.log(teamsFromContext);
        setStatus("");
        setDriverObtained(true);
      }
    } catch {
      setStatus("Error getting team");
    }
  };

  const saveChanges = () => {
    try {
      if (context != null) {
        context.editItem(teamsToUpdate);
        console.log(teamsToUpdate);
        setStatus("You´ve edited a team");
        setDriverObtained(false);
      }
    } catch (error) {
      setStatus("Error editing team");
    }
  };

  return (
    <section className="d-flex justify-content-center">
      <form className="bg-light p-4 border shadow w-75 rounded mb-3">
        <h2>Edit team</h2>
        <div className="row">
          <div className="col">
            <div className="form-group col-md-8">
              <IdInput id={id} onChange={handleChange} />

              <TeamInputForm
                onChange={handleChange}
                manufacturer={""}
                driver1={""}
                driver2={""}
              />
            </div>
            <GetButton onClick={getByIdFromContext} />
            <StatusMessage status={Status} />
            {driverObtained && <SaveButton onClick={saveChanges} />};
          </div>
          <div className="col">
            <GetImage imagePath={teamsToUpdate.image || ""} subfolder="car" />
          </div>
          <div className="col">
            <GetImage
              imagePath={teamsToUpdate?.id + ".png" || 0}
              subfolder="emblem"
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default EditTeam;
