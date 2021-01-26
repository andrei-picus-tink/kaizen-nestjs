export type CatModel = {
  id: number;
  name: string;
};

export interface CatsRepository {
  findAll: () => Promise<CatModel[]>;
  add: (newCat: Omit<CatModel, "id">) => Promise<CatModel>;
}
