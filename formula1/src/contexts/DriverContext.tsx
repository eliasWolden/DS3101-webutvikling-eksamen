import React, { FC, useEffect, useState } from 'react';
import DriverService from '../services/DriverService';
import ImageService from '../services/ImageService';
import { IDriver } from '../interfaces/Drivers/IDriver';
import { IDriverContext } from '../interfaces/Drivers/IDriverContext';
import { IProps } from '../interfaces/Iprops';


export const DriverContext = React.createContext<IDriverContext | null>(null);

export const DriverProvider: FC<IProps> = ({ children }) => {
  const [drivers, setDrivers] = useState<IDriver[]>([]);

  // GET ALL
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

  // GET BY ID
  const getDriversById = async (id : number) : Promise<void> => {
    try {
      const driversById = await DriverService.getDriversById(id);
      if (driversById.driversById) {
        setDrivers(driversById.driversById);
      } else {
        setDrivers([]);
      }
    } catch (error) {
      console.error('Error fetching drivers:', error);
    }
  };

  // DELETE
  const deleteDriver = async (name: string) : Promise<void> => {
    try {
    await DriverService.deleteDriver(name);
    }
     catch (error) {
       console.log(`error deleting driver with name ${name}`, error);
    }
  };

  // POST
  const postDriver = async (newDriver: IDriver): Promise<void> => {
    try {
      await DriverService.postDriver(newDriver);
    } catch (error) {
      console.log('Error adding driver', error);
    }
  };


  const postImage = async (image: File): Promise<void> => {
    try {
      await ImageService.postImage(image);
    } catch (error) {
      console.log('Error adding image', error);
    }
  };

  
  // PUT
  const putDriver = async (driversToUpdate: IDriver): Promise<void> => {
  try {
    await DriverService.putDriver( driversToUpdate );
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
    getDriversById,
    putDriver,
  };


  return <DriverContext.Provider value={contextValue}>{children}</DriverContext.Provider>;
  
};
