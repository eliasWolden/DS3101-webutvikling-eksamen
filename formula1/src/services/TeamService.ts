import axios from "axios";
import { ITeam } from "../interfaces/Teams/ITeam";

const teamService = (
    () => {
    const teamController = "http://localhost:5257/api/team";


    const getAllTeams = async () => {
        try {
        const teamResult = await axios.get(teamController);
        const teams = teamResult.data;

            return {
                teams
            };
        } 
        catch(error) {
            console.log("Error getting all teams", error);
            throw error;
        }
    };

    const getTeamsById = async (id: string) => {
        try {
            const teamResult = await axios.get(`${teamController}/id/${id}`);
            const teamsById = teamResult.data;

            return {
                teamsById
            }
        }
        catch(error) {
            console.log("Error getting teams by id", error);
            throw error;
    }
}

    // PUT:
    const putTeam = async (teamToUpdate: ITeam) => {
        try {
            const result = await axios.put(teamController, teamToUpdate);
            const putteamResult = result.data;

            return {
                putteamResult
            }
        }
        catch(error){
            console.log("Error editing team...", error);
           throw error; 
        }
    }


    // POST:
    const postTeam = async (newteam: ITeam) => {
        try {
            const result = await axios.post(teamController, newteam);
            const postteamResult = result.data;

            return {
                postteamResult
            }
        }
        catch(error) {
            console.log("Error posting team...", error);
            throw error;
        }
    }

    // DELETE:

    const deleteTeam = async (name: string) => {
        try {
            const result = await axios.delete(`${teamController}/${name}`);
            console.log(`team with manufacturer ${name} deleted successfully`, result);
        } 
        catch (error){
            console.log(`Error deleting team with manufacturer ${name}`, error);
            throw error;
        };
    }



  return {
    getAllTeams,
    getTeamsById,
    putTeam,
    postTeam,
    deleteTeam
  };
})();

export default teamService;