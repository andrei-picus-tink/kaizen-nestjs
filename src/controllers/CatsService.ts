export type CatDTO = {
  id: number;
  name: string;
};

export interface CatsService {
  findAll: () => Promise<CatDTO[]>;
}
