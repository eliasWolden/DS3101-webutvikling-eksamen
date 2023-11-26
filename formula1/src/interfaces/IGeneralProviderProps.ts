import { IService } from "./IService";

export interface IGeneralProviderProps<T> {
    children: React.ReactNode;
    service: IService<T>; // Pass the generic service
  }