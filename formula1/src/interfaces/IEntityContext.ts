export interface IEntityContext<T> {
  items: T[];
  loading: boolean;
  error: string | null;
  getAllItemsFromService: () => Promise<{ items: T[] }>;  // Corrected return type
  getById: (id: number) => Promise<T>;
  getByName: (name: string) => Promise<T>;
  postImage: (image: File, subfolder: string) => Promise<void>;
  postItem: (newItem: T) => Promise<void>;
  editItem: (itemToUpdate: any) => Promise<void>;
  deleteItemById: (id: number) => Promise<void>;
  deleteItemByName: (name: string) => Promise<void>;
}
