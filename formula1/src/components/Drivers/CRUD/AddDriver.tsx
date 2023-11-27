import { ChangeEvent, FC, useContext, useState } from "react";
import { IGeneralContext } from "../../../interfaces/IGeneralContext";
import { IDriver } from "../../../interfaces/Drivers/IDriver";
import { GeneralContext } from "../../../contexts/GeneralProvider";
import DriverForm from "../Forms/DriverForm";
import DriverInfoForm from "../Forms/DriverInfoForm";
import TeamSelect from "../Forms/TeamSelect";
import ImageUpload from "../../Shared/ImageUpload";
import StatusMessage from "../../Shared/StatusMessage";
import SaveButton from "../../Shared/SaveButton";

const AddDriver: FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [age, setAge] = useState<number>(0);
  const [nationality, setNationality] = useState<string>("");
  const [teamId, setTeamId] = useState<number>(0);
  const [image, setImage] = useState<File | null>(null);
  const [status, setStatus] = useState<string>("");

  const subfolder = "Drivers";
  const context = useContext(GeneralContext) as IGeneralContext<IDriver>;

  const setHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;

    switch (name) {
      case "firstname":
        setFirstName(value);
        break;
      case "lastname":
        setLastName(value);
        break;
      case "age":
        setAge(Number(value));
        break;
      case "nationality":
        setNationality(value);
        break;
      case "teamid":
        setTeamId(parseInt(value));
        break;
      case "image":
        if (files != null) {
          const file = files[0];
          const imageFileName = `${firstName}-${lastName}.png`;
          const renamedImage = new File([file], imageFileName, {
            type: file.type,
          });
          setImage(renamedImage);
        }
        break;
      default:
        break;
    }
  };

  const saveDriver = async () => {
    try {
      if (validateInputs()) {
        const newDriver: IDriver = {
          name: `${firstName} ${lastName}`,
          age: age,
          nationality: nationality,
          image: image?.name || "",
          teamId: teamId,
        };
        await context.postItem(newDriver);
        await context.postImage(image!, subfolder);
        setStatus("Completed");
        console.log(newDriver);
      } else {
        setStatus("Please fill out all fields");
      }
    } catch (error) {
      console.error("Error adding driver", error);
      setStatus("Error adding driver");
    }
  };

  const validateInputs = () => {
    return (
      !!firstName &&
      !!lastName &&
      age > 0 &&
      !!nationality &&
      teamId > 0 &&
      !!image
    );
  };

  return (
    <section className="d-flex justify-content-center align-items-center">
      <form className="bg-light p-4 border shadow w-75 rounded mb-3">
        <h2 className="text-center mb-4">Register driver</h2>

        <DriverForm setHandler={setHandler} />
        <DriverInfoForm setHandler={setHandler} />
        <TeamSelect setHandler={setHandler} />
        <ImageUpload setHandler={setHandler} />
        <SaveButton onClick={saveDriver} />
        <StatusMessage status={status} />
      </form>
    </section>
  );
};

export default AddDriver;
