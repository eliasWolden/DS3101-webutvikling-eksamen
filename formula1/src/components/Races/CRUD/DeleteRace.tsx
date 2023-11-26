import { FC, useState, useContext, ChangeEvent } from "react";
import { IGeneralContext } from "../../../interfaces/IGeneralContext";
import { IRace } from "../../../interfaces/Races/IRace";
import { GeneralContext } from "../../../contexts/GeneralProvider";
import IdInput from "../../Shared/IdInput";
import DeleteButton from "../../Shared/DeleteButton";
import StatusMessage from "../../Shared/StatusMessage";



const DeleteRace: FC = () => {
  const [id, setId] = useState(0);
  const [Status, setStatus] = useState("");

  const context = useContext(GeneralContext) as IGeneralContext<IRace>;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    switch (e.currentTarget.name) {
      case "id":
        setId(parseInt(e.currentTarget.value));
        break;
    }
  };
        
  const handleDelete = async () => {
    console.log(id);
    try {
      if (context) {
        if (id !== 0) {
          await context.deleteItemById(id);
          setStatus("Completed");
        } else {
          setStatus("Please enter an ID");
        }
      }
    } catch (error) {
      setStatus("Something went wrong with deleting..");
    }
  };
  return (
    <section className="d-flex justify-content-center">
      <form className="d-flex flex-column align-items-center bg-light p-4 border shadow w-75 rounded mb-3">
        <h2>Delete Race</h2>

      <IdInput id={id} onChange={handleChange} />

      <DeleteButton onClick={handleDelete} />

      <StatusMessage status={Status} />
      </form>
    </section>
  );
};

export default DeleteRace;
