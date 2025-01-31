import { FC, useState, useContext, ChangeEvent } from "react";
import { IGeneralContext } from "../../../interfaces/IGeneralContext";
import { IRace } from "../../../interfaces/Races/IRace";
import { GeneralContext } from "../../../contexts/GeneralProvider";
import IdInput from "../../Shared/IdInput";
import DeleteButton from "../../Shared/DeleteButton";
import StatusMessage from "../../Shared/StatusMessage";

const DeleteRace: FC = () => {
  const [id, setId] = useState<number>(0);
  const [status, setStatus] = useState<string>("");

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
      console.error("Error deleting race", error);
      setStatus("Error deleting race");
    }
  };

  return (
    <section className="d-flex justify-content-center">
      <form className="d-flex flex-column align-items-center bg-light p-4 border shadow w-75 rounded mb-3">
        <h2>Delete Race</h2>

        <IdInput id={id} onChange={handleChange} />

        <div className="mt-3">
          <DeleteButton onClick={handleDelete} />
        </div>

        <StatusMessage status={status} />
      </form>
    </section>
  );
};

export default DeleteRace;
