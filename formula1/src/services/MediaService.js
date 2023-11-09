import axios from "axios";

const MediaService = (() => {
  const driverController = "http://localhost:5257/api/Driver";
  const imageController = "http://localhost:5257/api/ImageUpload";
/* henter bilder fra imageupload apiet */
  const getImage = async (imageName) => {
    try {
      const imageResponse = await axios.get(`${imageController}/${imageName}`);
      return imageResponse.data;
    } catch {
      return null;
    }
  };
/* henter alle sjaførene fra driver apiet ved bruk av driver controller */
  const getAll = async () => {
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
    getAll,
    getImage
  };
})();

export default MediaService;
