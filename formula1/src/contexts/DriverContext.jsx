import { useState, createContext, useEffect } from 'react';
import MediaService from '../services/MediaService';

export const DriverContext = createContext();

export const DriverProvider = ({ children }) => {
  // lager context for drivers og setter de
  const [drivers, setDrivers] = useState([]);

  // Henter drivers fra service
  const getDriversFromService = async () => {
    try {
      const driversFromService = await MediaService.getAllDrivers();
      if (driversFromService.drivers) {
        setDrivers(driversFromService.drivers);
      }
    } catch (error) {
      console.error("Error fetching drivers:", error);
    }
  };

  // Useffect caller på getDriversFromService
  useEffect(() => {
    getDriversFromService();
  }, []); // Tom array betyr at den kun kjører en gang

  // eksporterer context
  const contextValue = {
    drivers,
    getDriversFromService,
  };

  return <DriverContext.Provider value={contextValue}>{children}</DriverContext.Provider>;
};
