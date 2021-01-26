import { Injectable } from "@nestjs/common";
import { CatModel, CatsRepository } from "./CatsRepository";

const cats: CatModel[] = [
  {
    id: 1,
    name: "Misty",
  },
  {
    id: 2,
    name: "Pixy",
  },
  {
    id: 3,
    name: "Polly",
  },
  {
    id: 4,
    name: "Biby",
  },
  {
    id: 5,
    name: "Cutie",
  },
  {
    id: 6,
    name: "Didi",
  },
];

@Injectable()
export class InMemoryCatsRepository implements CatsRepository {
  // eslint-disable-next-line class-methods-use-this
  findAll(): Promise<CatModel[]> {
    return Promise.resolve(cats);
  }
}
