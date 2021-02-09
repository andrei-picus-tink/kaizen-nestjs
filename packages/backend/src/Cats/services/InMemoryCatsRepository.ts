import { Inject, Injectable } from "@nestjs/common";
import { CatModel, CatsRepository } from "./CatsRepository";

@Injectable()
export class InMemoryCatsRepository implements CatsRepository {
  constructor(@Inject("cats") private readonly cats: CatModel[]) {}

  findAll = async (): Promise<CatModel[]> => Promise.resolve(this.cats);

  add = async (newCat: Omit<CatModel, "id">): Promise<CatModel> => {
    const cat: CatModel = {
      id: this.cats.length + 1,
      name: newCat.name,
    };

    this.cats.push(cat);

    return cat;
  };
}
