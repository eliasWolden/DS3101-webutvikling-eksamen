import { FC, useState, useContext } from "react";
import { IGeneralContext } from "../../interfaces/IGeneralContext";
import { IDriver } from "../../interfaces/Drivers/IDriver";
import { GeneralContext } from "../../contexts/GeneralProvider";

const DeleteDriver: FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const name = firstName + " " + lastName;
  const [deleteStatus, setDeleteStatus] = useState("");

  const context = useContext(GeneralContext) as IGeneralContext<IDriver>;

  const handleDelete = async () => {
    try {
      if (context) {
        if (firstName.toLowerCase() !== "" && lastName.toLowerCase() != "") {
          await context.deleteItemByName(name);
          setFirstName("");
          setLastName("");
          setDeleteStatus("Driver deleted");
        } else {
          setDeleteStatus("Please enter both Firstname and Lastname");
        }
      } else {
        setDeleteStatus("Something went wrong with deleting..");
      }
    } catch (error) {
      console.log("Error deleting driver", error);
      setDeleteStatus("Error deleting driver");
    }
  };
  return (
    <section className="d-flex justify-content-center">
      <form className="d-flex flex-column align-items-center bg-light p-4 border shadow w-75 rounded mb-3">
        <h2>Delete driver</h2>

        <div className="form-group col-md-4 mb-4">
          <label htmlFor="exampleFormControlInput5">Firstname</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput5"
            placeholder="Firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group col-md-4">
          <label htmlFor="exampleFormControlInput6">Lastname</label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput6"
            placeholder="Lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="row">
          <div className="form-group col-md-4 p-3">
            <input
              type="button"
              className="btn btn-danger"
              onClick={handleDelete}
              value="Delete driver"
            />
            <span
              className={
                deleteStatus === "Driver deleted"
                  ? "success-message"
                  : "text-danger"
              }
            >
              {deleteStatus}
            </span>
          </div>
        </div>
      </form>
    </section>
  );
};

export default DeleteDriver;
