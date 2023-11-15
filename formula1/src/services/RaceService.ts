import axios from "axios";
import { IRace } from "../interfaces/Races/IRace";

const RaceService = (
    () => {

    const raceController = "http://localhost:5257/api/Race";

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

    const getRacesById = async (id: Number) => {
        try {
            const result = await axios.get(`${raceController}/${id}`);
            const racesById = result.data;

            return {
                racesById
            }
        }
        catch {
            return {
                racesById: []
            };
        }
    }

    return {
        getAllRaces,
        getRacesById
    }
    }) ();

    export default RaceService;