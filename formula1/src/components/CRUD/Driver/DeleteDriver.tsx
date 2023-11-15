import { FC, useState, useContext, ChangeEvent } from "react";
import { DriverContext } from "../../../contexts/DriverContext";

const DeleteDriver : FC = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const name = firstName + " " + lastName;

    const context  = useContext(DriverContext);
    
    const handleDelete = async () => {
        try {

            if(context) {
            await context.deleteDriver(name);
            setFirstName('');
            setLastName('');
            }
            
        } catch (error) {
            console.log('Error deleting driver', error);
        }
        
    }
return (
    <form className="bg-light p-4 m-4 border rounded shadow-lg">
        <h2>Delete driver</h2>

        <div className="form-group col-md-4">
            <label htmlFor="exampleFormControlInput5">Firstname</label>
            <input 
            type="text" 
            className="form-control" 
            id="exampleFormControlInput5" 
            placeholder="Firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}/>
        </div>
        <div className="form-group col-md-4">
            <label htmlFor="exampleFormControlInput6">Lastname</label>
            <input 
            type="text" 
            className="form-control" 
            id="exampleFormControlInput6" 
            placeholder="Lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}/>
        </div>

        <div className='row'>
            <div className='form-group col-md-4'>
                <input type="submit" className='btn btn-danger' onClick={handleDelete} value="Delete driver" />
            </div>
        </div>

    </form>
    );
}

export default DeleteDriver;