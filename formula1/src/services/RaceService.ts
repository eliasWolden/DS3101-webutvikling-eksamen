import axios from "axios";
import { IRace } from "../interfaces/Races/IRace";

const RaceService = (
    () => {

    const raceController = "http://localhost:5257/api/Race";

    // Get all
    const getAllRaces = async () => {
        try {
            const result = await axios.get(raceController);
            const races = result.data;

                return {
                    races
                };
        }
        catch {
            return {
                races: []
            };
        }
    };

    // Get by name
    const getByName = async (grandPrix: string) => {
        try {
            const result = await axios.get(`${raceController}/grandPrix/${grandPrix}`);
            const racesByName = result.data;

            return {
                racesByName
            }
        }
        catch {
            return {
                racesByName: []
            };
        }
    }

    // DELETE:
    const deleteById = async (id: number) => {
        try {
            const result = await axios.delete(`${raceController}/${id}`);
            console.log(`Race with ID${id}is now deleted`, result);
        }
        catch {
            console.log(`Error deleting race with ID ${id}`);
        };
    }
    // POST:
    const postRace = async (newRace: IRace) => {
        try {
            const result = await axios.post(raceController, newRace);
            const postRaceResult = result.data;
    
         return {
             postRaceResult
         }
        }
        catch {
            return {
                postRaceResult: []
            }
        }
    }
    //PUT
        const putRace = async (raceToUpdate: IRace) => {
        try {
            const result = await axios.put(raceController, raceToUpdate);
            const putRaceResult = result.data;

            return {
                putRaceResult
            }
        }
        catch {
            return {
                putRaceResult: []
            } 
        }
    }

    

    

    return {
        getAllRaces,
        getByName,
        deleteById,
        postRace,
        putRace
    }
    }) ();

    export default RaceService;