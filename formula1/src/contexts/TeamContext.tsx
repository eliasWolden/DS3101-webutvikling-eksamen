import { FC, createContext, useEffect, useState } from 'react';
import MediaService from '../services/MediaService';
import { ITeam } from '../interfaces/Teams/ITeam';
import { ITeamContext } from '../interfaces/Teams/ITeamContext';
import { IProps } from '../interfaces/Iprops';

export const TeamContext = createContext<ITeamContext | null>(null);

export const TeamProvider: FC<IProps> = ({ children }) => {
  const [Teams, setTeams] = useState<ITeam[]>([]);

  const getAllTeamsFromService = async () => {
    try {
      const teamsFromService = await MediaService.getAllTeams();
      if (teamsFromService.teams) {
        setTeams(teamsFromService.teams);
      }
    } catch (error) {
      console.error('Error fetching Teams:', error);
    }
  };

  useEffect(() => {
    getAllTeamsFromService();
  }, []);

  const contextValue: ITeamContext = {
    teams: Teams!,
    getAllTeamsFromService,
  };

  return <TeamContext.Provider value={contextValue}>{children}</TeamContext.Provider>;
};
