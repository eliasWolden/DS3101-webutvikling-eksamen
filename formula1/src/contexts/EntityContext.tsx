import { createContext } from 'react';
import { IEntityContext } from '../interfaces/IEntityContext';

export const EntityContext = createContext<IEntityContext<any> | null>(null);
