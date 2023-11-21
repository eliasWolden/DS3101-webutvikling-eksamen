import axios from "axios";
import { IDriver } from "../interfaces/Drivers/IDriver";

const DriverService = (
    () => {
    const driverController = "http://localhost:5257/api/Driver";


    const getAllDrivers = async () => {
        try {
        const driverResult = await axios.get(driverController);
        const drivers = driverResult.data;

            return {
                drivers
            };
        } 
        catch (error) {
            console.log("Error getting all drivers", error);
            throw error;
        }
    };

    const getDriversById = async (id: string) => {
        try {
            const driverResult = await axios.get(`${driverController}/id/${id}`);
            const driversById = driverResult.data;

            return {
                driversById
            }
        }
        catch (error){
            console.log("Error getting driver by ID", error);
            throw error;
        }
    }

    // PUT:
    const putDriver = async (driverToUpdate: IDriver) => {
        try {
            const result = await axios.put(driverController, driverToUpdate);
            const putDriverResult = result.data;

            return {
                putDriverResult
            }
        }
        catch(error) {
            console.log("Error editing driver", error);
            throw error;
        }
    }


    // POST:
    const postDriver = async (newDriver: IDriver) => {
        try {
            const result = await axios.post(driverController, newDriver);
            const postDriverResult = result.data;

            return {
                postDriverResult
            }
        }
        catch(error) {
            console.log("Error posting driver", error);
            throw error;
        }
    }

    // DELETE:

    const deleteDriver = async (name: string): Promise<void> => {
        try {
            const result = await axios.delete(`${driverController}/${name}`);
            console.log(`Driver with name ${name} deleted successfully`, result);
        } 
        catch (error){
            console.log(`Error deleting driver with name ${name}`, error);
            throw error; // Rethrow the error to be caught in the component        
        };
    }


  return {
    getAllDrivers,
    getDriversById,
    putDriver,
    postDriver,
    deleteDriver
  };
})();

export default DriverService;