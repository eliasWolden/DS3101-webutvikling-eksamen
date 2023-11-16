import { IDriver } from "./IDriver";

export interface IDriverContext {
    drivers: IDriver[];
    // må ha promise void for å kunne bruke await
    getAllDriversFromService: (driver : IDriver) => Promise<void>;
    deleteDriver: (name : string) => Promise<void>;
    postDriver: (newDriver : IDriver) => Promise<void>;
    postImage: (image : File) => Promise<void>;
    getById: (id : string) => Promise<any>;
    editDrivers: (driverToUpdate : any) => Promise<void>;
  }