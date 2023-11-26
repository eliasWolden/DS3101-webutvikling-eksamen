import { useState, ChangeEvent, useContext } from "react";
import { IRace } from "../../../interfaces/Races/IRace";
import "../../../css/main.css";
import { IGeneralContext } from "../../../interfaces/IGeneralContext";
import { GeneralContext } from "../../../contexts/GeneralProvider";
import '../../../css/CRUD.css';
import NameInput from "../Form/NameInput";
import RaceDetailsInputs from "../Form/RaceDetailsInputs";
import StatusMessage from "../../Shared/StatusMessage";
import GetImage from "../../Shared/GetImage";

const EditRace = () => {
  const context = useContext(GeneralContext) as IGeneralContext<IRace>;
  const [GrandPrix, setGrandPrix] = useState<string>("");
  const [Status, setStatus] = useState("");
  const [driverObtained, setDriverObtained] = useState(false);
  const subfolder = "Race";


  const [RacesToUpdate, setRacesToUpdate] = useState<IRace>({
    grandPrix: "",
    winnerName: "",
    winnerTime: "",
    numberOfLaps: 0,
    image: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.currentTarget.name) {
      case "grandPrix":
        setGrandPrix(e.currentTarget.value);
        break;
      case "winnerName":
        setRacesToUpdate({
          ...RacesToUpdate,
          winnerName: e.currentTarget.value,
        });
        console.log(RacesToUpdate);
        break;
      case "winnerTime":
        setRacesToUpdate({
          ...RacesToUpdate,
          winnerTime: e.currentTarget.value,
        });
        console.log(RacesToUpdate);

        break;
      case "numberOfLaps":
        setRacesToUpdate({
          ...RacesToUpdate,
          numberOfLaps: parseInt(e.currentTarget.value),
        });
        console.log(RacesToUpdate);

        break;
    }
  };

  const getByGrandPrixFromContext = async () => {
    try {
      if (context) {
        if (GrandPrix !== "") {
          const RacesFromContext = await context?.getByName(GrandPrix);
          setRacesToUpdate(RacesFromContext);
          console.log(RacesFromContext);
          setStatus("Completed");
          setDriverObtained(true);
        } else {
          setStatus("Please enter a GrandPrix");
        }
      }
    } catch (error) {
      setStatus("Grand Prix not found");
    }
  };

  const saveChanges = () => {
    if (context) {
      context.editItem(RacesToUpdate);
      console.log(RacesToUpdate);
      setStatus("Completed");
      setDriverObtained(false);
    } else {
      setStatus("Error saving changes");

    }
  };

  return (
    <section className="d-flex justify-content-center">
      <form className="bg-light p-4 border shadow w-75 rounded mb-3">
        <h2>Edit Race</h2>
        <div className="row">
          
          <div className="col">
          <NameInput grandPrix={GrandPrix} onChange={handleChange} />

          <RaceDetailsInputs 
          winnerName={RacesToUpdate?.winnerName|| ""} 
          winnerTime={RacesToUpdate?.winnerTime || ""} 
          numberOfLaps={RacesToUpdate?.numberOfLaps || 0} 
          onChange={handleChange} />



            <div className="row">
              <div className="form-group col-md-4">
                <input
                  type="button"
                  className="btn btn-primary"
                  value="get Race"
                  onClick={getByGrandPrixFromContext}
                />
              </div>
            </div>

            {driverObtained && (
              <div className="row">
                <div className="form-group col-md-4">
                  <input
                    type="button"
                    className="btn btn-warning"
                    value="save Race"
                    onClick={saveChanges}
                  />
                </div>
              </div>
            )}
            <StatusMessage status={Status} />
          </div>
          <GetImage imagePath={RacesToUpdate?.image || ""} subfolder={subfolder} />

        </div>
      </form>
    </section>
  );
};

export default EditRace;
