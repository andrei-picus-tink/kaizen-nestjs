export type CatModel = {
  id: number;
  name: string;
};

export interface CatsRepository {
  findAll: () => Promise<CatModel[]>;
}
