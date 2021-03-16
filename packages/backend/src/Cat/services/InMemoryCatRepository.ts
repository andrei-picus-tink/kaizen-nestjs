import { Inject, Injectable } from "@nestjs/common";
import { Cat, CatClient, CreateCat } from "./CatClient";

@Injectable()
export class InMemoryCatRepository implements CatClient {
  constructor(@Inject("cats") private readonly cats: Cat[]) {}

  findOne = async (id: number): Promise<Cat> => {
    const cat = this.cats.find((cat) => cat.id === id);

    if (!cat) {
      throw new Error(`Cat ${id} not found`);
    }

    return cat;
  };

  findAll = async (): Promise<Cat[]> => Promise.resolve(this.cats);

  add = async (newCat: CreateCat): Promise<Cat> => {
    const cat: Cat = {
      id: this.cats.length + 1,
      name: newCat.name,
      owner: newCat.owner,
    };

    this.cats.push(cat);

    return cat;
  };
}
