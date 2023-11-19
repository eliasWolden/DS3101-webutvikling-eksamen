import { IRace } from "./IRace";

export interface IRaceContext {
    races: IRace[];
    // må ha promise void for å kunne bruke await
    getAllRacesFromService: (race : IRace) => Promise<void>;
    deleteRace: (id: number) => Promise<void>;
    getByName: (grandPrix: string) => Promise<any>;
    postRace: (newRace : IRace) => Promise<void>;
    postImage: (image : File) => Promise<void>;
    editRaces: (raceToUpdate : any) => Promise<void>;

  }