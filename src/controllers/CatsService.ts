export type CatDTO = {
  id: number;
  name: string;
};

export type CreateCatDTO = {
  name: string;
};

export interface CatsService {
  findAll: () => Promise<CatDTO[]>;
  add: (newCat: CreateCatDTO) => Promise<CatDTO>;
}
