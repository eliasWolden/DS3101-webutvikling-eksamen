import axios from "axios";

const MediaService = (() => {
  const driverController = "http://localhost:5257/api/Driver";
  const raceController = "http://localhost:5257/api/Race";

  const getDriverImage = async (imageName) => {
    try {
      const imageResponse = await axios.get(`http://localhost:5257/api/ImageUpload/driver-photos/${imageName}`);
      return imageResponse.data;
    } catch {
      return null;
    }
  };

  const getRaceImage = async (imageName) => {
    try {
      const imageResponse = await axios.get(`http://localhost:5257/api/ImageUpload/race-photos/${imageName}`);
      return imageResponse.data;
    } catch {
      return null;
    }
  };

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
    getDriverImage,
    getRaceImage
  };
})();

export default MediaService;
