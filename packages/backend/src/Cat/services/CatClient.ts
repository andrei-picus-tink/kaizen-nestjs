export type Cat = {
  id: number;
  name: string;
};

export type CreateCat = Omit<Cat, "id">;

export interface CatClient {
  findAll: () => Promise<Cat[]>;
  add: (newCat: CreateCat) => Promise<Cat>;
}
