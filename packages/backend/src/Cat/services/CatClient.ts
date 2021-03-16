export type Cat = {
  id: number;
  name: string;
  owner: number;
};

export type CreateCat = Omit<Cat, "id">;

export interface CatClient {
  findAll: () => Promise<Cat[]>;
  findOne: (id: number) => Promise<Cat>;
  add: (newCat: CreateCat) => Promise<Cat>;
}
