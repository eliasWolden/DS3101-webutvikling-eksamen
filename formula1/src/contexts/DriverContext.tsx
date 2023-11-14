import { FC, createContext, useEffect, useState } from 'react';
import MediaService from '../services/MediaService';
import { IDriver } from '../interfaces/Drivers/IDriver';
import { IDriverContext } from '../interfaces/Drivers/IDriverContext';
import { IProps } from '../interfaces/Iprops';


export const DriverContext = createContext<IDriverContext | null>(null);


export const DriverProvider: FC<IProps> = ({ children }) => {
  const [drivers, setDrivers] = useState<IDriver[]>([]);

  const getAllDriversFromService = async () => {
    try {
      const driversData = await MediaService.getAllDrivers();
      if (driversData && driversData.drivers) {
        setDrivers(driversData.drivers);
      }
    } catch (error) {
      console.error('Error fetching drivers:', error);
    }
  };

  useEffect(() => {
    getAllDriversFromService();
  }, []);

  const contextValue: IDriverContext = {
    drivers: drivers!,
    getAllDriversFromService,
  };

  return <DriverContext.Provider value={contextValue}>{children}</DriverContext.Provider>;
};
