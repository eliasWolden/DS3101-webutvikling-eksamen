import { useState, ChangeEvent, useContext } from "react";
import { IRace } from "../../../interfaces/Races/IRace";
import "../../../css/main.css";
import { IGeneralContext } from "../../../interfaces/IGeneralContext";
import { GeneralContext } from "../../../contexts/GeneralProvider";
import "../../../css/CRUD.css";
import NameInput from "../Form/NameInput";
import RaceDetailsInputs from "../Form/RaceDetailsInputs";
import StatusMessage from "../../Shared/StatusMessage";
import GetImage from "../../Shared/GetImage";

const EditRace = () => {
  const context = useContext(GeneralContext) as IGeneralContext<IRace>;
  const [grandPrix, setGrandPrix] = useState<string>("");
  const [status, setStatus] = useState("");
  const [raceObtained, setRaceObtained] = useState(false);
  const subfolder = "Race";

  const [raceToUpdate, setRaceToUpdate] = useState<IRace>({
    grandPrix: "",
    winnerName: "",
    winnerTime: "",
    numberOfLaps: 0,
    image: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.currentTarget.name) {
      case "grandPrix":
        setGrandPrix(e.currentTarget.value.toLowerCase());
        break;
      case "winnerName":
        setRaceToUpdate({
          ...raceToUpdate,
          winnerName: e.currentTarget.value,
        });
        break;
      case "winnerTime":
        setRaceToUpdate({
          ...raceToUpdate,
          winnerTime: e.currentTarget.value,
        });
        break;
      case "numberOfLaps":
        setRaceToUpdate({
          ...raceToUpdate,
          numberOfLaps: parseInt(e.currentTarget.value),
        });
        break;
    }
  };

  const getRaceByGrandPrixFromContext = async () => {
    try {
      if (context) {
        if (grandPrix !== "") {
          const raceFromContext = await context?.getByName(grandPrix);
          setRaceToUpdate(raceFromContext);
          setStatus("Completed");
          setRaceObtained(true);
        } else {
          setStatus("Please enter a Grand Prix");
        }
      }
    } catch (error) {
      setStatus("Race not found");
    }
  };

  const saveChanges = () => {
    try {
      if (context) {
        context.editItem(raceToUpdate);
        setStatus("Completed");
        setRaceObtained(false);
      } else {
        setStatus("Error saving changes");
      }
    } catch (error) {
      console.error("Error saving race", error);
      setStatus("Error saving race");
    }
  };

  return (
    <section className="d-flex justify-content-center">
      <form className="bg-light p-4 border shadow w-75 rounded mb-3">
        <h2>Edit Race</h2>
        <div className="row">
          <div className="col">
            <NameInput grandPrix={grandPrix} onChange={handleChange} />

            <RaceDetailsInputs
              winnerName={raceToUpdate?.winnerName || ""}
              winnerTime={raceToUpdate?.winnerTime || ""}
              numberOfLaps={raceToUpdate?.numberOfLaps || 0}
              onChange={handleChange}
            />

            <div className="row mt-3">
              <div className="form-group col-md-4">
                <input
                  type="button"
                  className="btn btn-primary btn-block"
                  value="Get Race"
                  onClick={getRaceByGrandPrixFromContext}
                />
              </div>
            </div>

            {raceObtained && (
              <div className="row mt-3">
                <div className="form-group col-md-4">
                  <input
                    type="button"
                    className="btn btn-warning btn-block"
                    value="Save Race"
                    onClick={saveChanges}
                  />
                </div>
              </div>
            )}
            <StatusMessage status={status} />
          </div>
          <GetImage imagePath={raceToUpdate?.image} subfolder={subfolder} />
        </div>
      </form>
    </section>
  );
};

export default EditRace;
