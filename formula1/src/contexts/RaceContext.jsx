import React, { useState, createContext, useEffect } from 'react';
import MediaService from '../services/MediaService';

export const RaceContext = createContext();

export const RaceProvider = ({ children }) => {
  const [races, setRaces] = useState([]);

  const getRacesFromService = async () => {
    try {
      const racesFromService = await MediaService.getAllRaces();
      if (racesFromService.races) {
        setRaces(racesFromService.races);
      }
    } catch (error) {
      console.error("Error fetching races:", error);
    }
  };

  useEffect(() => {
    getRacesFromService();
  }, []);

  const contextValue = {
    races,
    getRacesFromService,
  };

  return <RaceContext.Provider value={contextValue}>{children}</RaceContext.Provider>;
};
