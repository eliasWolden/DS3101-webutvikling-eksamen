import React, { FC, useEffect, useState } from 'react';
import DriverService from '../services/DriverService';
import ImageService from '../services/ImageService';
import { IDriver } from '../interfaces/Drivers/IDriver';
import { IDriverContext } from '../interfaces/Drivers/IDriverContext';
import { IProps } from '../interfaces/Iprops';


export const DriverContext = React.createContext<IDriverContext | null>(null);


export const DriverProvider: FC<IProps> = ({ children }) => {
  const [drivers, setDrivers] = useState<IDriver[]>([]);

  const getAllDriversFromService = async () => {
    try {
      const driversFromService = await DriverService.getAllDrivers();
      if (driversFromService.drivers) {
        setDrivers(driversFromService.drivers);
      }
    } catch (error) {
      console.error('Error fetching drivers:', error);
    }
  };

  const deleteDriver = async (name: string) : Promise<void> => {
    try {
    const deleteDriverFromService= await DriverService.deleteDriver(name);
    return deleteDriverFromService;  
    }
     catch (error) {
       console.log(`error deleting driver with name ${name}`, error);
    }
  };


  const postDriver = async (newDriver: IDriver): Promise<void> => {
    try {
      await DriverService.postDriver(newDriver);
    } catch (error) {
      console.log('Error adding driver', error);
    }
  };


  const postImage = async (image: File, subfolder: string): Promise<void> => {
    try {
      await ImageService.postImage(image, subfolder);
    } catch (error) {
      console.log('Error adding image', error);
    }
  };


  const getById = async (id : string): Promise<any> => {
    try {
      const driversToUpdate = await DriverService.getDriversById(id);
      return driversToUpdate;
      }
     catch (error) {
      console.error('Error fetching drivers:', error);
    }
  };

  
  const editDrivers = async (driversToUpdate: any): Promise<void> => {
  try {
    await DriverService.putDriver( driversToUpdate );
    getAllDriversFromService();
  } catch (error) {
    console.log('Error editing driver', error);
  }
};

  useEffect(() => {
    getAllDriversFromService();
  }, []);

  const contextValue: IDriverContext = {
    drivers: drivers!,
    getAllDriversFromService,
    deleteDriver,
    postDriver,
    postImage,
    getById,
    editDrivers,
  };


  return <DriverContext.Provider value={contextValue}>{children}</DriverContext.Provider>;
  
};