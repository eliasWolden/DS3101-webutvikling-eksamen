import { ChangeEvent, FC, useContext, useState } from 'react';
import { DriverContext } from '../../../contexts/DriverContext';

const EditDrivers: FC = () => {
    const [id, setId] = useState<number>(0);
    const [driverToUpdate, setDriverToUpdate] = useState<any>({
        firstName: "",
        lastName: "",
        age: "",
        nationality: "",
        teamId: "",
    });
    

    const context = useContext(DriverContext);

    const setHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
            console.log(name, value);
        switch (name) {
            case 'id':
                setId(Number(value));
                break;
            case 'firstname':
                setDriverToUpdate({ ...driverToUpdate, firstName: value });
                break;
            case 'lastname':
                setDriverToUpdate({ ...driverToUpdate, lastName: value });
                break;
            case 'age':
            case 'teamId':
                setDriverToUpdate({ ...driverToUpdate, teamId: value });
                break;
            case 'nationality':
                setDriverToUpdate({ ...driverToUpdate, [name]: value });
                break;
            default:
                break;
        }
    };

    const GetDriversById = async () => {
        try {
            if (context) {
            
                await context.getDriversById(id);
                const drivers = context.drivers;
    
                if (drivers.length > 0) {
                    const selectedDriver = drivers[id - 1];
    
                    // deler opp navnet i to deler, og setter de i hver sin variabel
                    const fullName = selectedDriver.name;
                    const [firstName, ...lastNameArray] = fullName.split(' ');
                    const lastName = lastNameArray.join(' ');

    
                    setDriverToUpdate({
                        firstName: firstName || "", // Set default value if firstName is falsy
                        lastName: lastName || "",   // Set default value if lastName is falsy
                        age: selectedDriver.age || "",
                        nationality: selectedDriver.nationality || "",
                        teamId: selectedDriver.teamId || "",
                    });
                    console.log(id);
                }
            }
        } catch (error) {
            console.log('Error getting driver', error);
            // Handle the error as needed (e.g., show an error message to the user)
            setDriverToUpdate({
                firstName: "",
                lastName: "",
                age: "",
                nationality: "",
                teamId: "",
            });

        }
    };
    

    return (
        <form className="bg-light p-4 m-4 border rounded shadow-lg">
            <h2>Get driver by id</h2>

            <div className='form-group col-md-4'>
                <label>Id</label>
                <input
                    name='id'
                    type="number"
                    className='form-control'
                    placeholder='id'
                    onChange={setHandler}
                />
            </div>
            
            <div className='form-group col-md-4'>
                <label>First Name</label>
                <input
                    name='firstname'
                    type="text"
                    className='form-control'
                    placeholder='First Name'
                    value={driverToUpdate.firstName}
                    onChange={setHandler}
                />
            </div>

            <div className='form-group col-md-4'>
                <label>Last Name</label>
                <input
                    name='lastname'
                    type="text"
                    className='form-control'
                    placeholder='Last Name'
                    value={driverToUpdate.lastName}
                    onChange={setHandler}
                />
            </div>

            <div className='form-group col-md-4'>
                <label>Age</label>
                <input
                    name='age'
                    type="text"
                    className='form-control'
                    placeholder="age"
                    value={driverToUpdate.age}
                    onChange={setHandler}
                />
            </div>

            <div className='form-group col-md-4'>
                <label>Team</label>
                <input
                    name='teamId'
                    type="text"
                    className='form-control'
                    placeholder="teamId"
                    value={driverToUpdate.teamId}
                    onChange={setHandler}
                />
            </div>

            <div className='form-group col-md-4'>
                <label>Nationality</label>
                <input
                    name='nationality'
                    type="text"
                    className='form-control'
                    placeholder="Nationality"
                    value={driverToUpdate.nationality}
                    onChange={setHandler}
                />
            </div>

            <div className='row'>
                <div className='form-group col-md-4'>
                    <input type='button' className='btn btn-primary' value="Find driver by id" onClick={GetDriversById}/>
                </div>
            </div>
        </form>
    );
};

export default EditDrivers;
