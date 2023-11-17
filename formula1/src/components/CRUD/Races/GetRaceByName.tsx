import { ChangeEvent, FC, useContext, useState } from 'react';
import { RaceContext } from '../../../contexts/RaceContext';

const GetRaceByName: FC = () => {
    const [name, setName] = useState("");    
    const context = useContext(RaceContext);
    //const [raceToUpdate, setRaceToUpdate] = useState("");

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleGetRace = async () => {
        try {
        if(context) {
            await context.getRaceByName(name);
            const races = context.races;

            if(races.length > 0) {
                const selectedRace = races[0];
                console.log("You just got a race by name")
                return selectedRace;
            }
        }
    } catch (error) {
        console.log("Error getting race by name", error);
    }
    };

    return (
        <form className="bg-light p-4 m-4 border rounded shadow-lg" >

        <div>
            <h3>Get Race By Name</h3>
            <input type="text" value={name} onChange={handleNameChange} />
            <br />
            <button className='btn btn-primary' onClick={handleGetRace}> Get Race </button>
        </div>

        <div>
            
        </div>
        </form>
    )

}

export default GetRaceByName;