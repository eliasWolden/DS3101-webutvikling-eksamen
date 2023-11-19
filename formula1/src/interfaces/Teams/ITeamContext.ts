import { ITeam } from "./ITeam";

export interface ITeamContext {
    teams: ITeam[];
    // må ha promise void for å kunne bruke await
    getAllTeamsFromService: (Team : ITeam) => Promise<void>;
    deleteTeam: (name : string) => Promise<void>;
    postTeam: (newTeam : ITeam) => Promise<void>;
    postImage: (image : File) => Promise<void>;
    getById: (id : string) => Promise<any>;
    editTeams: (TeamToUpdate : any) => Promise<void>;
  }