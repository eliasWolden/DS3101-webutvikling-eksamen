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

    // Get by id
    const getRaceByName = async (name: string) => {
        try {
            const result = await axios.get(`${raceController}/${name}`);
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
    const deleteRace = async (id: number) => {
        try {
            const result = await axios.delete(`${raceController}/${id}`);
            console.log(`Race with ID${id}is now deleted`, result);
            return true;
        }
        catch {
            console.log(`Error deleting race with ID ${id}`);
            return false;
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

    

    

    return {
        getAllRaces,
        getRaceByName,
        deleteRace,
        postRace
    }
    }) ();

    export default RaceService;