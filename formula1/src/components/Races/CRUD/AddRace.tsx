import { ChangeEvent, FC, useContext, useState } from "react";
import { IGeneralContext } from "../../../interfaces/IGeneralContext";
import { IRace } from "../../../interfaces/Races/IRace";
import { GeneralContext } from "../../../contexts/GeneralProvider";
import WinnerNameInput from "../Form/RaceFormInfo";
import ImageUpload from "../../Shared/ImageUpload";
import StatusMessage from "../../Shared/StatusMessage";
import RaceForm from "../Form/RaceForm";

const AddRace: FC = () => {
  const [status, setStatus] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [winnerTime, setWinnerTime] = useState<string>("");
  const [grandPrix, setGrandPrix] = useState<string>("");
  const [numberOfLaps, setNumberOfLaps] = useState<number>(0);

  const subfolder = "Races";

  const context = useContext(GeneralContext) as IGeneralContext<IRace>;

  const [winnerName, setWinnerName] = useState({
    firstName: "",
    lastName: "",
  });

  const setHandler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;

    switch (name) {
      case "firstName":
        setWinnerName({ ...winnerName, firstName: value });
        break;
      case "lastName":
        setWinnerName({ ...winnerName, lastName: value });
        break;
      case "winnerTime":
        setWinnerTime(value);
        break;
      case "grandPrix":
        setGrandPrix(value);
        break;
      case "numberOfLaps":
        setNumberOfLaps(Number(value));
        break;
      case "image":
        if (files != null) {
          const file = files[0];
          setImage(file);
        }
        break;
    }
  };

  const saveRace = async () => {
    try {
      if (
        winnerName.firstName &&
        winnerName.lastName &&
        winnerTime &&
        grandPrix &&
        numberOfLaps &&
        image
      ) {
        const newRace: IRace = {
          winnerName: `${winnerName.firstName} ${winnerName.lastName}`,
          winnerTime: winnerTime,
          grandPrix: grandPrix,
          image: image.name,
          numberOfLaps: numberOfLaps,
        };
        await handleAdd(newRace, image, subfolder);
        setStatus("Completed");
        console.log(newRace);
      } else {
        setStatus("Please fill out all fields");
        console.log(winnerName, winnerTime, grandPrix, numberOfLaps, image);
      }
    } catch (error) {
      console.error("Error saving race", error);
      setStatus("Error saving race");
    }
  };

  const handleAdd = async (newRace: IRace, image: File, subfolder: string) => {
    try {
      if (context) {
        await context.postItem(newRace);
        await context.postImage(image, subfolder);
      }
    } catch (error) {
      console.error("Error adding race", error);
      setStatus("Error adding race");
    }
  };

  return (
    <section className="d-flex justify-content-center align-items-center">
      <form className="bg-light p-4 border shadow w-75 rounded mb-3">
        <h2 className="text-center">Create race</h2>

        <WinnerNameInput setHandler={setHandler} />

        <RaceForm setHandler={setHandler} />

        <ImageUpload setHandler={setHandler} />

        <div className="row">
          <div className="form-group col-md-4">
            <input
              type="button"
              className="btn btn-primary"
              value="Create race"
              onClick={saveRace}
            />
          </div>
        </div>
        <StatusMessage status={status} />
      </form>
    </section>
  );
};

export default AddRace;
