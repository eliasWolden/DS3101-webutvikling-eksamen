import React, { FC, useEffect, useState } from 'react';
import DriverService from '../services/DriverService';
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

  const deleteDriver = async (name: string) => {
    try {
    const deleteDriverFromService= await DriverService.deleteDriver(name);
    return deleteDriverFromService;  
    }
     catch (error) {
       console.log(`error deleting driver with name ${name}`, error);
    }
    }

  useEffect(() => {
    getAllDriversFromService();
  }, []);

  const contextValue: IDriverContext = {
    drivers: drivers!,
    getAllDriversFromService,
    deleteDriver,
  };

  return <DriverContext.Provider value={contextValue}>{children}</DriverContext.Provider>;

};
