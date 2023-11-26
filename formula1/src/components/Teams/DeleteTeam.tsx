import { FC, useState, useContext } from "react";
import { ITeam } from "../../interfaces/Teams/ITeam";
import { IGeneralContext } from "../../interfaces/IGeneralContext";
import { GeneralContext } from "../../contexts/GeneralProvider";

const DeleteTeam: FC = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [Status, setStatus] = useState("");


  const context = useContext(GeneralContext) as IGeneralContext<ITeam>;

  const handleDelete = async () => {
    try {
      if (context) {
        if (manufacturer.toLowerCase() !== "") {
          await context.deleteItemByName(manufacturer);
          setStatus("You deleted a Team");
        } else {
          setStatus("Please enter a manufacturer");
        }
      }
    } catch (error) {
      setStatus("Something went wrong with deleting...");
    }
  };
  return (
    <section className="d-flex justify-content-center">
      <form className="d-flex flex-column align-items-center bg-light p-4 border shadow w-75 rounded mb-3">

        <h2>Delete Team</h2>

        <div className="form-group col-md-4 mb-4">
          <label htmlFor="exampleFormControlInput5">Manufacturer</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput5"
            placeholder="Manufacturer"
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}
          />
        </div>

        <div className="row">
          <div className="form-group col-md-4">
            <input
              type="button"
              className="btn btn-danger"
              onClick={handleDelete}
              value="Delete Team"
            />
            <span
              className={
                Status === "Please enter a manufacturer"
                  ? "text-danger"
                  : "success-message"
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

export default DeleteTeam;
