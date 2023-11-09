import axios, { HttpStatusCode } from "axios";

const MediaService = (() => {
  const driverController = "http://localhost:5257/api/Driver";
  const raceController = "http://localhost:5257/api/Race";
  const teamController = "http://localhost:5257/api/Team";

  const imageUploadController = "";

  const getAll = async () => {
    try {
      const [driverResponse, raceResponse, teamResponse] = await axios.all([
        axios.get(driverController),
        axios.get(raceController),
        axios.get(teamController),
      ]);

      return {
        drivers: driverResponse.data,
        races: raceResponse.data,
        teams: teamResponse.data,
      };
    } catch (error) {
      console.error("Error:", error.message);
      return HttpStatusCode(500);
    }
  };

  const getById = async (id) => {
    const result = await axios.get(
      `${(driverController, raceController, teamController)}/${id}`
    );
    return result.data;
  };

  const deleteById = async (id) => {
    const result = await axios.delete(
      `${(driverController, raceController, teamController)}/${id}`
    );
    return result.data;
  };

  //const update
})();
