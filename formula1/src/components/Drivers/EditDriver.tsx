import { FC, useState, useContext, ChangeEvent } from "react";
import { IGeneralContext } from "../../interfaces/IGeneralContext";
import { IDriver } from "../../interfaces/Drivers/IDriver";
import { GeneralContext } from "../../contexts/GeneralProvider";
import IdInput from "../Shared/IdInput";
import DriverImage from "./DriverImage";
import DriverDetailsInputs from "./DriverDetailsInput";
import StatusMessage from "../Shared/StatusMessage";

const EditDriver: FC = () => {
  const context = useContext(GeneralContext) as IGeneralContext<IDriver>;
  const [id, setId] = useState<number>(0);
  const [status, setStatus] = useState("");
  const [driverObtained, setDriverObtained] = useState(false);
  const [driversToUpdate, setDriversToUpdate] = useState<IDriver>({
    name: "",
    age: 0,
    nationality: "",
    image: "",
    teamId: 0,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.currentTarget.name) {
      case "id":
        setId(parseInt(e.currentTarget.value));
        break;
      case "name":
        setDriversToUpdate({ ...driversToUpdate, name: e.currentTarget.value });
        break;
      case "Age":
        setDriversToUpdate({
          ...driversToUpdate,
          age: parseInt(e.currentTarget.value),
        });
        break;
      case "nationality":
        setDriversToUpdate({
          ...driversToUpdate,
          nationality: e.currentTarget.value,
        });
        break;
      case "teamid":
        setDriversToUpdate({
          ...driversToUpdate,
          teamId: parseInt(e.currentTarget.value),
        });
        break;
    }
  };

  const getByIdFromContext = async () => {
    if (id === 0) {
      setStatus("Please enter an id");
      return;
    }
    try {
      const driversToUpdate = await context?.getById(id);
      setDriversToUpdate(driversToUpdate);
      console.log(driversToUpdate);
      setStatus("");
      setDriverObtained(true);
    } catch {
      setStatus("Error getting driver");
    }
  };

  const saveChanges = () => {
    try {
      if (context) {
        context.editItem(driversToUpdate);
        setStatus("Completed");
        setDriverObtained(false);
      }
    } catch (error) {
      setStatus("Error editing driver");
    }
  };

  return (
    <section className="d-flex justify-content-center">
      <form className="bg-light p-4 border shadow w-75 rounded mb-3">
        <h2 className="text-center mb-4">Edit driver</h2>
        <div className="row">
          <div className="col">
            <IdInput id={id} onChange={handleChange}/>

            <DriverDetailsInputs
              name={driversToUpdate?.name}
              age={driversToUpdate?.age || 0}
              nationality={driversToUpdate?.nationality || ""}
              teamId={driversToUpdate?.teamId || 0}
              onChange={handleChange}
            />

            <div className="row">
              <div className="form-group col-md-4 p-3">
                <input
                  type="button"
                  className="btn btn-primary"
                  value="get driver"
                  onClick={getByIdFromContext}
                />
              </div>
            </div>

            {driverObtained && (
              <div className="row">
                <div className="form-group col-md-4">
                  <input
                    type="button"
                    className="btn btn-warning"
                    value="save driver"
                    onClick={saveChanges}
                  />
                </div>
              </div>
            )}
          </div>
          <div className="col">
            <DriverImage imagePath={driversToUpdate?.image || ""} />
          </div>
        </div>
        <StatusMessage status={status} />

      </form>
    </section>
  );
};

export default EditDriver;
