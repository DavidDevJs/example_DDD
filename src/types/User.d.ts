export interface User {
  id: string | number;
  name: string;
  email: string;
}

export interface Reader<T> {
  find(item: Partial<T>): Promise<T[]>
  findOne(id: string | Partial<T>): Promise<T>
}

export type BaseRepository<T> = Reader<T>