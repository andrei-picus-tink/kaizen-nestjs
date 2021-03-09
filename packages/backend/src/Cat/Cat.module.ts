import { Module } from "@nestjs/common";
import { CatController } from "./controllers/CatController";
import { InMemoryCatRepository } from "./services/InMemoryCatRepository";
import { Cat } from "./services/CatClient";

const cats: Cat[] = [
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

@Module({
  imports: [],
  controllers: [CatController],
  providers: [
    { provide: "CatClient", useClass: InMemoryCatRepository },
    { provide: "cats", useValue: cats },
  ],
})
export class CatModule {}
