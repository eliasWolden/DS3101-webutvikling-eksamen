import { IRace } from "./IRace";

export interface IRaceContext {
    races: IRace[];
    // må ha promise void for å kunne bruke await
    getAllRacesFromService: (race : IRace) => Promise<void>;
    deleteRace: (id: number) => Promise<void>;
    getRaceByName: (name: string) => Promise<void>;
  }