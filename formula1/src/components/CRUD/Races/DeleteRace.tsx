import { FC, useState, useContext, ChangeEvent} from "react";
import { RaceContext } from "../../../contexts/RaceContext";

const DeleteRace : FC = () => {

    const context = useContext(RaceContext);
    const [id, setId] = useState<number>(0);
    const [deleteStatus, setDeleteStatus] = useState("");
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setId(Number(e.target.value));
    };


    const handleClick =  async () => {
        try {
            const result = await context?.deleteRace(id);
            if(result) { 
                setDeleteStatus(`You deleted a race with ID ${id}`);
            } else {
                setDeleteStatus("Error deleting race");
            }
        } catch (error){
            console.log("Error deleting race", error);
            setDeleteStatus("Error deleting race");
        }
    }

return (
        <form className="bg-light p-4 m-4 border rounded shadow-lg" >
        <h3>Delete Race By Id</h3>
        <div className="form-group col-md-4">
            <label htmlFor="exampleFormControlInput5">Id</label>
            <input  
            name='id' 
            type="number"
            className="form-control"
            onChange={handleChange}
            />
        </div>
        <br />
        <input onClick={handleClick} type="button" className='btn btn-danger' value="Delete race"/>
        <span>{deleteStatus}</span>
    </form>
);
}

export default DeleteRace;