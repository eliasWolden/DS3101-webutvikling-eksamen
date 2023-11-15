import axios from "axios";
import { IDriver } from "../interfaces/Drivers/IDriver";

const DriverService = (
    () => {
    const driverController = "http://localhost:5257/api/Driver";
    const imageController = 'http://localhost:5257/api/Image/Driver';


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

    const getDriversById = async (id: number) => {
        try {
            const driverResult = await axios.get(`${driverController}/${id}`);
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
    const postDriver = async (newDriver: IDriver, image: File) => {

        const formData = new FormData();
        formData.append("file", image);

        const result = await axios.post(driverController, newDriver);

        const resultImageUpload = await axios ({
            url: imageController,
            method: "POST",
            data: formData,
            headers: {"Content-Type": "multipart/form-data"}
        });

        formData.delete("file");

    }

    const deleteDriver = async (id: Number) => {
        const result = await axios.delete(`${driverController}/${id}`);
        
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
