import axios from "axios";

const MediaService = (() => {
  const raceController = "http://localhost:5257/api/Race";
  const driverController = "http://localhost:5257/api/Driver";
  const teamController = 'http://localhost:5257/api/Team';

  const getAllRaces = async () => {
    try {
      const raceResponse = await axios.get(raceController);
      const races = raceResponse.data;

      return {
        races,
      };
    } catch {
      return {
        races: [],
      };
    }
  };

  const getAllDrivers = async () => {
    try {
      const driverResponse = await axios.get(driverController);
      const drivers = driverResponse.data;

      return {
        drivers,
      };
    } catch {
      return {
        drivers: [],
      };
    }
  };

  const getAllTeams = async () => {
    try {
      const teamResponse = await axios.get(teamController);
      const teams = teamResponse.data;

      return {
        teams,
      };
    } catch {
      return {
        teams: [],
      };
    }
  };

  return {
    getAllDrivers,
    getAllRaces,
    getAllTeams
  };
})();

export default MediaService;
