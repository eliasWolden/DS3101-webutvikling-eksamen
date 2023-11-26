import { createContext, useEffect, useState } from "react";
import { IGeneralProviderProps } from "../interfaces/IGeneralProviderProps";
import { IGeneralContext } from "../interfaces/IGeneralContext";
import imageUploadService from "../services/ImageService";

export const GeneralContext = createContext<IGeneralContext<any> | null>(null);


export const GeneralProvider = <T extends {}>({ children, service }: IGeneralProviderProps<T>) => {
  const [items, setItems] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getAllItemsFromService = async (): Promise<{ items: T[] }> => {
    try {
      setLoading(true);
      const itemsFromService = await service.getAll();
      if (itemsFromService.items) {
        setItems(itemsFromService.items);
        return { items: itemsFromService.items };
      } else {
        // Return a default value or handle the case where items is falsy
        return { items: [] };
      }
    } catch (error) {
      console.error("Error fetching items:", error);
      setError("Error fetching items. Please try again later.");
      return { items: [] }; // Return a default value in case of an error
    } finally {
      setLoading(false);
    }
  };

    const getById = async (id: number): Promise<any> => {
      try {
        const itemToUpdate = await service.getById(id);
        return itemToUpdate;
      } catch (error) {
        console.error(`Error fetching item with ID ${id}: ${error}`);
      }
    };

    const getByName = async (name: string): Promise<any> => {
        try {
            const itemToUpdate = await service.getByName(name);
            return itemToUpdate;
        }   catch (error) {
            console.error(`Error fetching item with name ${name}: ${error}`);
        }
    };

    const postImage = async (image: File, subfolder: string): Promise<void> => {
      try {
        await imageUploadService.postImage(image, subfolder);
      } catch (error) {
        console.error('Error adding image:', error);
      }
    };
    
    const postItem = async (newItem: T): Promise<void> => {
        try {
            await service.post(newItem);
            getAllItemsFromService();
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };
    
    const editItem = async (itemToUpdate: any): Promise<void> => {
      try {
        await service.put(itemToUpdate);
        getAllItemsFromService();
      } catch (error) {
        console.error('Error editing item:', error);
      }
    };

    const deleteItemById = async (id: number): Promise<void> => {
      try {
        await service.deleteItemById(id);
        getAllItemsFromService();
      } catch (error) {
        console.error(`Error deleting item with ID ${id}: ${error}`);
      }
    };

    const deleteItemByName = async (name: string): Promise<void> => {
        try {
            await service.deleteItemByName(name);
            getAllItemsFromService();
        } catch (error) {
            console.error(`Error deleting item with name ${name}: ${error}`);
        }
    };

    useEffect(() => {
        getAllItemsFromService();
    }, []);

    const contextValue: IGeneralContext<T> = {
        items,
        loading,
        error,
        getAllItemsFromService,
        getById,
        getByName,
        postImage,
        postItem,
        editItem,
        deleteItemById,
        deleteItemByName,

      };      
      return <GeneralContext.Provider value={contextValue}>{children}</GeneralContext.Provider>;
      
    };