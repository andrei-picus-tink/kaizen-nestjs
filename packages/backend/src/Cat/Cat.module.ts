import { Module } from "@nestjs/common";
import { CatController } from "./controllers/CatController";
import { InMemoryCatRepository } from "./services/InMemoryCatRepository";
import { Cat } from "./services/CatClient";

const cats: Cat[] = [
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
  ],
})
export class CatModule {}
