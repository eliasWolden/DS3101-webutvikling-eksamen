import { useState, createContext, useEffect } from 'react';
import MediaService from '../services/MediaService';

export const TeamContext = createContext();

export const TeamProvider = ({ children }) => {
  // Create context for teams and set them
  const [teams, setTeams] = useState([]);

  // Fetch teams from the service
  const getTeamsFromService = async () => {
    try {
      const teamsFromService = await MediaService.getAllTeams();
      if (teamsFromService.teams) {
        setTeams(teamsFromService.teams);
      }
    } catch (error) {
      console.error('Error fetching teams:', error);
    }  
    
  };

  // useEffect calls getTeamsFromService
  useEffect(() => {
    getTeamsFromService();
  }, []); // Empty array means it runs only once

  // Export the context
  const contextValue = {
    teams,
    getTeamsFromService
  };

  return <TeamContext.Provider value={contextValue}>{children}</TeamContext.Provider>;
};
