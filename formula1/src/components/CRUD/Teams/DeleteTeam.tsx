import { FC, useState, useContext } from "react";
import { TeamContext } from "../../../contexts/TeamContext";

const DeleteTeam : FC = () => {
    const [manufacturer, setManufacturer] = useState('');
    const [deleteStatus, setDeleteStatus] = useState("");

    const context  = useContext(TeamContext);
    
    const handleDelete = async () => {
        try {
            if(context) {
            await context.deleteTeam(manufacturer);
            setDeleteStatus("You deleted a Team")
            } else {
                setDeleteStatus("Something went wrong with deleting..");
            }
            
        } catch (error) {
            console.log('Error deleting Team', error);
        }
        
    }
return (
    <form className="bg-light p-4 m-4 border rounded shadow-lg">
        <h2>Delete Team</h2>

        <div className="form-group col-md-4">
            <label htmlFor="exampleFormControlInput5">Manufacturer</label>
            <input 
            type="text" 
            className="form-control" 
            id="exampleFormControlInput5" 
            placeholder="Manufacturer"
            value={manufacturer}
            onChange={(e) => setManufacturer(e.target.value)}/>
            
        </div>

        <div className='row'>
            <div className='form-group col-md-4'>
                <input type="button" className='btn btn-danger' onClick={handleDelete} value="Delete Team" />
                <span className="">{deleteStatus}</span>
            </div>
        </div>

    </form>
    );
}

export default DeleteTeam;