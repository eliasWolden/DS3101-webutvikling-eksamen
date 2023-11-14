import { ITeam } from "./ITeam";

export interface ITeamContext {
    teams: ITeam[];
    // må ha promise void for å kunne bruke await
    getAllTeamsFromService: (team : ITeam) => Promise<void>;
  }