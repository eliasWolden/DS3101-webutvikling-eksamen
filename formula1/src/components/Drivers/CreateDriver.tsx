import { FC, useState, ChangeEvent, useContext } from "react";
import { IDriver } from "../../interfaces/Drivers/IDriver";
import { IGeneralContext } from "../../interfaces/IGeneralContext";
import { GeneralContext } from "../../contexts/GeneralProvider";
import "../../css/CRUD.css";

const AddDriver: FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const fullName = `${firstName} ${lastName}`;
  const [Status, setStatus] = useState("");

  const [age, setAge] = useState<number>(Number);
  const [nationality, setNationality] = useState("");
  const [teamid, setTeamid] = useState<number>(Number);
  const [image, setImage] = useState<File | null>(null);

  const subfolder = "Drivers";

  const context = useContext(GeneralContext) as IGeneralContext<IDriver>;

  const setHandler = (e: ChangeEvent<any>) => {
    const { name, value, files } = e.target;

    switch (name) {
      case "Firstname":
        setFirstName(value);
        break;
      case "Lastname":
        setLastName(value);
        break;
      case "Age":
        setAge(Number(value));
        break;
      case "nationality":
        setNationality(value);
        break;
      case "teamid":
        setTeamid(parseInt(value));
        break;
      case "image":
        if (files != null) {
          const file = files[0];
          setImage(file);
        }
        break;
    }
  };

  const saveDriver = () => {
    if (firstName && lastName && age && nationality && teamid && image) {
      const newDriver: IDriver = {
        name: fullName,
        age: age,
        nationality: nationality,
        image: image.name,
        teamId: teamid,
      };
      handleAdd(newDriver, image, subfolder);
      setStatus("Driver created");
      console.log(newDriver);
    } else {
      setStatus("Please fill out all fields");
    }
  };

  const handleAdd = async (
    newItem: IDriver,
    image: File,
    subfolder: string
  ) => {
    try {
      if (context) {
        await context.postItem(newItem);
        await context.postImage(image, subfolder);
      }
    } catch (error) {
      console.log("Error adding driver", error);
    }
  };

  return (
    <section className="d-flex justify-content-center align-items-center">
      <form className="bg-light p-4 border shadow w-75 rounded mb-3">
        <h2 className="text-center mb-4">Create driver</h2>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="firstName" className="form-label">
              Firstname
            </label>
            <input
              id="firstName"
              name="Firstname"
              type="text"
              className="form-control"
              placeholder="Firstname"
              onChange={setHandler}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="lastName" className="form-label">
              Lastname
            </label>
            <input
              id="lastName"
              name="Lastname"
              type="text"
              className="form-control"
              placeholder="Lastname"
              onChange={setHandler}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="age" className="form-label">
              Age
            </label>
            <input
              id="age"
              name="Age"
              type="text"
              className="form-control"
              placeholder="Age"
              onChange={setHandler}
            />
          </div>

          <div className="col-md-6">
            <label htmlFor="nationality" className="form-label">
              Nationality
            </label>
            <input
              id="nationality"
              name="nationality"
              type="text"
              className="form-control"
              placeholder="Nationality"
              onChange={setHandler}
            />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="team" className="form-label">
              Team
            </label>
            <select
              id="team"
              name="teamid"
              className="form-control"
              onChange={setHandler}
            >
              <option value="car-red-bull.png">Red bull</option>
              <option value="car-mercedes.png">Mercedes</option>
              <option value="car-ferrari.png">Ferrari</option>
              <option value="car-mclaren.png">McLaren</option>
              <option value="car-aston-martin.png">Aston Martin</option>
              <option value="car-alpine.png">Alpine</option>
              <option value="car-williams.png">Williams</option>
              <option value="car-alphatauri.png">AlphaTauri</option>
              <option value="car-alfa-romeo.png">Alfa Romeo</option>
              <option value="car-haas-f1-team.png">Haas F1</option>
            </select>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="image" className="form-label">
              Upload image
            </label>
            <div className="custom-file">
              <input
                id="image"
                name="image"
                type="file"
                className="custom-file-input"
                onChange={setHandler}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <input
              type="button"
              className="btn btn-primary"
              value="Create driver"
              onClick={saveDriver}
            />
            <span
              className={
                Status === "Driver created" ? "success-message" : "text-danger"
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

export default AddDriver;
