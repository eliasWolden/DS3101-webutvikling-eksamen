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
/*   const getRaceByName = async (name: string): Promise<void> => {
    try {
      const racesByName = await RaceService.getRaceByName(name);
      if(racesByName.racesByName) {
        setRaces(racesByName.racesByName);
      } else {
        setRaces([]);
      }
    } catch (error) {
      console.log(`error fetching races`, error);
    }
  }; */
  //PUT
  const getByName = async (grandPrix : string): Promise<any> => {
    try {
      const driversToUpdate = await RaceService.getByName(grandPrix);
      return driversToUpdate;
      }
     catch (error) {
      console.error('Error fetching drivers:', error);
    }
  };

  
  const editRaces = async (racesToUpdate: any): Promise<void> => {
  try {
    await RaceService.putRace( racesToUpdate );
    getAllRacesFromService();
  } catch (error) {
    console.log('Error editing driver', error);
  }
};

  // DELETE

  //POST
  const postRace = async (newRace: IRace): Promise<void> => {
    try {
      await RaceService.postRace(newRace);
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
  const deleteRace = async (id: number) : Promise<void> => {
    try {
    const deleteRaceFromService= await RaceService.deleteById(id);
    return deleteRaceFromService;  
    }
     catch (error) {
       console.log(`error deleting driver with name ${id}}`, error);
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
