export interface IService<T> {
  getAll: () => Promise<{ items: T[] }>;
  getById: (id: number) => Promise<{ item: T }>;
  getByName: (name: string) => Promise<{ item: T }>;
  post: (data: T) => Promise<{ result: T }>;
  put: (data: T) => Promise<{ result: T }>;
  deleteItemById: (id: number) => Promise<void>;
  deleteItemByName: (name: string) => Promise<void>;
}
