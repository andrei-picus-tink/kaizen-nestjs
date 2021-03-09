import { Inject, Injectable } from "@nestjs/common";
import { Cat, CatClient, CreateCat } from "./CatClient";

@Injectable()
export class InMemoryCatRepository implements CatClient {
  constructor(@Inject("cats") private readonly cats: Cat[]) {}

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
