import React, { FC, useState, useEffect } from 'react';
import RaceService from '../services/RaceService';
import ImageService from '../services/ImageService';
import { IRaceContext } from '../interfaces/Races/IRaceContext';
import { IProps } from '../interfaces/Iprops';
import { IRace } from '../interfaces/Races/IRace';

export const RaceContext = React.createContext<IRaceContext | null>(null);

export const RaceProvider: FC<IProps> = ({ children }) => {
  const [races, setRaces] = useState<IRace[]>([]);

  // GET ALL
  const getAllRacesFromService = async () => {
    try {
      const racesFromService = await RaceService.getAllRaces();
      if (racesFromService.races) {
        setRaces(racesFromService.races);
      }
    } catch (error) {
      console.error("Error fetching races:", error);
    }
  };

  
  // GET BY NAME

  const getByName = async (grandPrix : string): Promise<any> => {
    try {
      const driversToUpdate = await RaceService.getByName(grandPrix);
      return driversToUpdate;
      }
     catch (error) {
      console.error('Error fetching drivers:', error);
    }
  };


  // PUT:
  const editRaces = async (racesToUpdate: any): Promise<void> => {
  try {
    await RaceService.putRace( racesToUpdate );
    getAllRacesFromService();
  } catch (error) {
    console.log('Error editing driver', error);
  }
};

  

  //POST
  const postRace = async (newRace: IRace): Promise<void> => {
    try {
      await RaceService.postRace(newRace);
    } catch (error) {
      console.log('Error adding driver', error);
    }
  };


  const postImage = async (image: File, subfolder : string): Promise<void> => {
    try {
      await ImageService.postImage(image, subfolder);
    } catch (error) {
      console.log('Error adding image', error);
      console.log(subfolder);
    }

  };

  // DELETE
  const deleteRace = async (id: number) : Promise<void> => {
    try {
    const deleteRaceFromService= await RaceService.deleteById(id);
    return deleteRaceFromService;  
    }
     catch (error) {
       console.log(`error deleting race with id ${id}}`, error);
       throw error;
    }
  };

  useEffect(() => {
    getAllRacesFromService();
  }, []);

  const contextValue: IRaceContext = {
    races: races!,
    getAllRacesFromService,
    deleteRace,
    getByName,
    editRaces,
    postRace,
    postImage,
  };

  return <RaceContext.Provider value={contextValue}>{children}</RaceContext.Provider>;
};
