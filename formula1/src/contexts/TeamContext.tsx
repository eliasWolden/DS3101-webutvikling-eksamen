import React, { FC, useEffect, useState } from 'react';
import TeamService from '../services/TeamService';
import ImageService from '../services/ImageService';
import { ITeam } from '../interfaces/Teams/ITeam';
import { ITeamContext } from '../interfaces/Teams/ITeamContext';
import { IProps } from '../interfaces/Iprops';


export const TeamContext = React.createContext<ITeamContext | null>(null);


export const TeamProvider: FC<IProps> = ({ children }) => {
  const [Teams, setTeams] = useState<ITeam[]>([]);

  const getAllTeamsFromService = async () => {
    try {
      const TeamsFromService = await TeamService.getAllTeams();
      if (TeamsFromService.teams) {
        setTeams(TeamsFromService.teams);
      }
    } catch (error) {
      console.error('Error fetching Teams:', error);
    }
  };

  const deleteTeam = async (name: string) : Promise<void> => {
    try {
    const deleteTeamFromService= await TeamService.deleteTeam(name);
    return deleteTeamFromService;  
    }
     catch (error) {
       console.log(`error deleting Team with manufacturer ${name}`, error);
       throw error;
    }
  };


  const postTeam = async (newTeam: ITeam): Promise<void> => {
    try {
      await TeamService.postTeam(newTeam);
    } catch (error) {
      console.log('Error adding Team', error);
    }
  };


  const postImage = async (image: File, subfolder : string): Promise<void> => {
    try {
      await ImageService.postImage(image, subfolder);
    } catch (error) {
      console.log('Error adding image', error);
    }
  };


  const getById = async (id : string): Promise<any> => {
    try {
      const TeamsToUpdate = await TeamService.getTeamsById(id);
      return TeamsToUpdate;
      }
     catch (error) {
      console.error('Error fetching Teams:', error);
    }
  };

  
  const editTeams = async (TeamsToUpdate: any): Promise<void> => {
  try {
    await TeamService.putTeam( TeamsToUpdate );
    getAllTeamsFromService();
  } catch (error) {
    console.log('Error editing Team', error);
  }
};

  useEffect(() => {
    getAllTeamsFromService();
  }, []);

  const contextValue: ITeamContext = {
    teams: Teams!,
    getAllTeamsFromService,
    deleteTeam,
    postTeam,
    postImage,
    getById,
    editTeams,
  };


  return <TeamContext.Provider value={contextValue}>{children}</TeamContext.Provider>;
  
};