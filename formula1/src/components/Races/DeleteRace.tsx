import { FC, useState, useContext } from "react";
import { IEntityContext } from "../../interfaces/IEntityContext";
import { IRace } from "../../interfaces/Races/IRace";
import { EntityContext } from "../../contexts/EntityProvider";

const DeleteRace : FC = () => {
    const [id, setId] = useState(0);
    const [Status, setStatus] = useState("");

    const context = useContext(EntityContext) as IEntityContext<IRace>;
    
    const handleDelete = async () => {
        console.log(id);
        try {
            if(context) {
                if(id !== 0) {  
            await context.deleteItemById(id);
            setStatus("Race deleted")
            } 
            else {
                setStatus("Please enter an ID");
            }
        }  
        }
        catch(error){
            setStatus("Something went wrong with deleting..");
        }
    }
return (
    <form className="bg-light p-4 m-4 border rounded shadow-lg">
        <h2>Delete Race</h2>

        <div className="form-group col-md-4">
            <label>Id</label>
            <input 
            type="text" 
            className="form-control" 
            placeholder="id"
            onChange={(e) => setId(parseInt(e.target.value))}
            />            
        </div>

        <div className='row'>
            <div className='form-group col-md-4'>
                <input type="button" className='btn btn-danger' onClick={handleDelete} value="Delete Race" />
                <span className={Status === 'Race deleted' ? 'success-message' : 'text-danger'}>{Status}</span>
            </div>
        </div>

    </form>
    );
}

export default DeleteRace;