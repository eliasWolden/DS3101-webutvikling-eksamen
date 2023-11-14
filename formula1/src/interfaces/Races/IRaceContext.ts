import { IRace } from "./IRace";

export interface IRaceContext {
    races: IRace[];
    // må ha promise void for å kunne bruke await
    getAllRacesFromService: (driver : IRace) => Promise<void>;
  }