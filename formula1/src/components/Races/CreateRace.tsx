import { FC, useState, ChangeEvent, useContext } from "react";
import { IRace } from "../../interfaces/Races/IRace";
import { IGeneralContext } from "../../interfaces/IGeneralContext";
import { GeneralContext } from "../../contexts/GeneralProvider";

const AddRace: FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const fullName = `${firstName} ${lastName}`;
  const subfolder = "Races";

  const [Status, setStatus] = useState("");
  const [winnerTime, setWinnerTime] = useState("");
  const [grandPrix, setGrandPrix] = useState("");
  const [numberOfLaps, setNumberOfLaps] = useState<number>(Number);
  const [image, setImage] = useState<File | null>(null);

  const context = useContext(GeneralContext) as IGeneralContext<IRace>;

  const setHandler = (e: ChangeEvent<any>) => {
    const { name, value, files } = e.target;

    switch (name) {
      case "Firstname":
        setFirstName(value);
        break;
      case "Lastname":
        setLastName(value);
        break;
      case "winnerTime":
        setWinnerTime(value);
        break;
      case "grandPrix":
        setGrandPrix(value);
        break;
      case "teamid":
        setNumberOfLaps(parseInt(value));
        break;
      case "image":
        if (files != null) {
          const file = files[0];
          setImage(file);
        }
        break;
    }
  };

  const saveRace = () => {
    if (
      firstName &&
      lastName &&
      winnerTime &&
      grandPrix &&
      numberOfLaps &&
      image
    ) {
      const newRace: IRace = {
        winnerName: fullName,
        winnerTime: winnerTime,
        grandPrix: grandPrix,
        image: image.name,
        numberOfLaps: numberOfLaps,
      };
      handleAdd(newRace, image, subfolder);
      setStatus("Race created");
      console.log(newRace);
    } else {
      setStatus("Please fill out all fields");
    }
  };

  const handleAdd = async (newRace: IRace, image: File, subfolder: string) => {
    try {
      if (context) await context.postItem(newRace);
      await context.postImage(image, subfolder);
    } catch (error) {
      console.log("Error adding race", error);
      setStatus("Something went wrong with adding...");
    }
  };

  return (
    <section className="d-flex justify-content-center align-items-center">
      <form className="bg-light p-4 border shadow w-75 rounded mb-3">
        <h2 className="text-center mb-4">Create race</h2>

        <div className="row mb-3">
          <h3>Name of Winner</h3>
          <div className="form-group col-md-4">
            <label>Firstname</label>
            <input
              name="Firstname"
              type="text"
              className="form-control"
              placeholder="Firstname"
              onChange={setHandler}
            />
          </div>

          <div className="form-group col-md-6">
            <label>LastName</label>
            <input
              name="Lastname"
              type="text"
              className="form-control"
              placeholder="Lastname"
              onChange={setHandler}
            />
          </div>
        </div>

        <div className="form-group col-md-4">
          <label>Race time</label>
          <input
            name="winnerTime"
            className="form-control"
            placeholder="Race time"
            onChange={setHandler}
          />
        </div>

        <div className="form-group col-md-4">
          <label>Name of Grand Prix</label>
          <input
            name="grandPrix"
            type="text"
            className="form-control"
            placeholder="Grand Prix"
            onChange={setHandler}
          />
        </div>

        <div className="row">
          <div className="form-group col-md-4">
            <label>Number of laps</label>
            <input
              name="numberOfLaps"
              className="form-control"
              placeholder="Number of laps"
              onChange={setHandler}
            />
          </div>
        </div>

        <div className="row">
          <div className="form-group col-md-4">
            <label>Upload image</label>
            <div className="custom-file">
              <input
                name="image"
                type="file"
                className="custom-file-input"
                onChange={setHandler}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="form-group col-md-4">
            <input
              type="button"
              className="btn btn-primary"
              value="Create race"
              onClick={saveRace}
            />
            <span
              className={
                Status === "Race created" ? "success-message" : "text-danger"
              }
            >
              {Status}
            </span>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddRace;
