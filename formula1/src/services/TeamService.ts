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
        catch {
            return {
                teams: []
            };
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
        catch {
            return {
                teamsById: []
            };
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
        catch {
            return {
                putteamResult: []
            } 
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
        catch {
            return {
                postteamResult: []
            }
        }
    }

    // DELETE:

    const deleteTeam = async (name: string) => {
        try {
            const result = await axios.delete(`${teamController}/${name}`);
            console.log(`team with ID ${name} deleted successfully`, result);
        } 
        catch (error){
            console.log(`Error deleting team with ID ${name}`, error);
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