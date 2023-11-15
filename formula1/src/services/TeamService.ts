import axios from "axios";
import { ITeam } from "../interfaces/Teams/ITeam";

const TeamService = (
    () => {
    const teamController = 'http://localhost:5257/api/Team';
    
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

return {
    getAllTeams
};
})();

export default TeamService;
