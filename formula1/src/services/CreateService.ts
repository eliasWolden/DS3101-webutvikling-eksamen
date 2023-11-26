import axios from "axios";
import { IService } from "../interfaces/IService";
import { IDriver } from "../interfaces/Drivers/IDriver";
import { IRace } from "../interfaces/Races/IRace";
import { ITeam } from "../interfaces/Teams/ITeam";

const createService = <T>(controller: string) => {
  
  const getAll = async (): Promise<{ items: T[] }> => {
    try {
      const result = await axios.get(controller);
      const items = result.data.items || result.data; // Adjust this line based on your API response structure
      return { items };
    } catch (error) {
      console.log(`Error getting all items from ${controller}`, error);
      throw error;
    }
  };

  const getById = async (id: number): Promise<{ item: T }> => {
    try {
      const result = await axios.get(`${controller}/id/${id}`);
      const item = result.data;
      return item;
    } catch (error) {
      console.log(`Error getting item by ID from ${controller}`, error);
      throw error;
    }
  };

  const getByName = async (name: string): Promise<{ item: T }> => {
    try {
      const result = await axios.get(`${controller}/grandPrix/${name}`);
      const item = result.data;
      return item;
    } catch (error) {
      console.log(`Error getting item by name from ${controller}`, error);
      throw error;
    }
  };

  const post = async (data: T): Promise<{ result: T }> => {
    try {
      const result = await axios.post(controller, data);
      const postResult = result.data;
      return { result: postResult };
    } catch (error) {
      console.log(`Error posting item to ${controller}`, error);
      throw error;
    }
  };

  const put = async (data: T): Promise<{ result: T }> => {
    try {
      const result = await axios.put(controller, data);
      const putResult = result.data;
      return { result: putResult };
    } catch (error) {
      console.log(`Error editing item at ${controller}`, error);
      throw error;
    }
  };
  
  const deleteItemById = async (id: number): Promise<void> => {
    try {
      await axios.delete(`${controller}/${id}`);
      console.log(`Item with ID ${id} deleted successfully from ${controller}`);
    } catch (error) {
      console.log(`Error deleting item with ID ${id} from ${controller}`, error);
      throw error;
    }
  };

  const deleteItemByName = async (name: string): Promise<void> => {
    try {
      await axios.delete(`${controller}/${name}`);
      console.log(`Item with name ${name} deleted successfully from ${controller}`);
    } catch (error) {
      console.log(`Error deleting item with ID ${name} from ${controller}`, error);
      throw error;
    }
  };


  return {
    getAll,
    getById, 
    getByName,
    post, 
    put, 
    deleteItemById,
    deleteItemByName,
  } as IService<T>;
};

export const DriverService = createService<IDriver>("http://localhost:5257/api/Driver");
export const RaceService = createService<IRace>("http://localhost:5257/api/Race");
export const TeamService = createService<ITeam>("http://localhost:5257/api/team");