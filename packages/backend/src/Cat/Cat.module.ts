import { Module } from "@nestjs/common";
import { CatController } from "./controllers/CatController";
import { InMemoryCatRepository } from "./services/InMemoryCatRepository";
import { CatEntity } from "./services/CatClient";
import { CatResolver } from "./Cat.resolver";

const cats: CatEntity[] = [
  {
    id: 1,
    name: "Misty",
    owner: 1,
  },
  {
    id: 2,
    name: "Pixy",
    owner: 1,
  },
  {
    id: 3,
    name: "Polly",
    owner: 1,
  },
  {
    id: 4,
    name: "Biby",
    owner: 2,
  },
  {
    id: 5,
    name: "Cutie",
    owner: 2,
  },
  {
    id: 6,
    name: "Didi",
    owner: 2,
  },
];

@Module({
  imports: [],
  controllers: [CatController],
  providers: [
    { provide: "CatClient", useClass: InMemoryCatRepository },
    { provide: "cats", useValue: cats },
    CatResolver,
  ],
})
export class CatModule {}
