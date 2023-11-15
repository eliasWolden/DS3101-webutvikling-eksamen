import { IDriver } from "./IDriver";

export interface IDriverContext {
    drivers: IDriver[];
    // må ha promise void for å kunne bruke await
    getAllDriversFromService: (driver : IDriver) => Promise<void>;
    deleteDriver: (name : string) => Promise<void>;
  }