import { FC, useState, useContext } from "react";
import { IGeneralContext } from "../../interfaces/IGeneralContext";
import { IRace } from "../../interfaces/Races/IRace";
import { GeneralContext } from "../../contexts/GeneralProvider";

const DeleteRace: FC = () => {
  const [id, setId] = useState(0);
  const [Status, setStatus] = useState("");

  const context = useContext(GeneralContext) as IGeneralContext<IRace>;

  const handleDelete = async () => {
    console.log(id);
    try {
      if (context) {
        if (id !== 0) {
          await context.deleteItemById(id);
          setStatus("Race deleted");
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

        <div className="form-group col-md-4 mb-4">
          <label>Id</label>
          <input
            type="text"
            className="form-control"
            placeholder="id"
            onChange={(e) => setId(parseInt(e.target.value))}
          />
        </div>

        <div className="row">
          <div className="form-group col-md-4">
            <input
              type="button"
              className="btn btn-danger"
              onClick={handleDelete}
              value="Delete Race"
            />
            <span
              className={
                Status === "Race deleted" ? "success-message" : "text-danger"
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

export default DeleteRace;
