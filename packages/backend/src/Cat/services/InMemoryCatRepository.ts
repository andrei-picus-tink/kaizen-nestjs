import { Inject, Injectable } from "@nestjs/common";
import { CatEntity, CatClient, CreateCat } from "./CatClient";

@Injectable()
export class InMemoryCatRepository implements CatClient {
  constructor(@Inject("cats") private readonly cats: CatEntity[]) {}

  findOne = async (id: number): Promise<CatEntity> => {
    const cat = this.cats.find((cat) => cat.id === id);

    if (!cat) {
      throw new Error(`Cat ${id} not found`);
    }

    return cat;
  };

  findAll = async (): Promise<CatEntity[]> => Promise.resolve(this.cats);

  add = async (newCat: CreateCat): Promise<CatEntity> => {
    const cat: CatEntity = {
      id: this.cats.length + 1,
      name: newCat.name,
      owner: newCat.owner,
    };

    this.cats.push(cat);

    return cat;
  };
}
