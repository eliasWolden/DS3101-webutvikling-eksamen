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
        catch {
            return {
                drivers: []
            };
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
        catch {
            return {
                driversById: []
            };
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
        catch {
            return {
                putDriverResult: []
            } 
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
        catch {
            return {
                postDriverResult: []
            }
        }
    }

    // DELETE:

    const deleteDriver = async (name: string) => {
        try {
            const result = await axios.delete(`${driverController}/${name}`);
            console.log(`Driver with ID ${name} deleted successfully`, result);
        } 
        catch (error){
            console.log(`Error deleting driver with ID ${name}`, error);
            throw error;
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