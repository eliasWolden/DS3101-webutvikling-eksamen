import { IService } from "./IService";

export interface IEntityProviderProps<T> {
    children: React.ReactNode;
    service: IService<T>; // Pass the generic service
  }