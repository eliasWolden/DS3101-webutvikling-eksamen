import axios from "axios";

const MediaService = (() => {
  const driverController = "http://localhost:5257/api/Driver";
  const raceController = "http://localhost:5257/api/Race";

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

  return {
    getAllDrivers,
    getAllRaces,
  };
})();

export default MediaService;
