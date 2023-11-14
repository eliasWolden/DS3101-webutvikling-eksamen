import { FC, useState, createContext, useEffect } from 'react';
import MediaService from '../services/MediaService';
import { IRaceContext } from '../interfaces/Races/IRaceContext';
import { IProps } from '../interfaces/Iprops';
import { IRace } from '../interfaces/Races/IRace';

export const RaceContext = createContext<IRaceContext | null>(null);

export const RaceProvider: FC<IProps> = ({ children }) => {
  const [races, setRaces] = useState<IRace[]>([]);

  const getAllRacesFromService = async () => {
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
    getAllRacesFromService();
  }, []);

  const contextValue: IRaceContext = {
    races: races!,
    getAllRacesFromService,
  };

  return <RaceContext.Provider value={contextValue}>{children}</RaceContext.Provider>;
};
