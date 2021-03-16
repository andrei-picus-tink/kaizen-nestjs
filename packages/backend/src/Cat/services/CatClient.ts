export type CatEntity = {
  id: number;
  name: string;
  owner: number;
};

export type CreateCat = Omit<CatEntity, "id">;

export interface CatClient {
  findAll: () => Promise<CatEntity[]>;
  findOne: (id: number) => Promise<CatEntity>;
  add: (newCat: CreateCat) => Promise<CatEntity>;
}
