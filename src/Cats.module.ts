import { Module } from "@nestjs/common";
import { CatsController } from "./controllers/CatsController";
import { CatsRepositoryService } from "./services/CatsRepositoryService";
import { InMemoryCatsRepository } from "./services/InMemoryCatsRepository";
import { CatModel } from "./services/CatsRepository";

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

@Module({
  imports: [],
  controllers: [CatsController],
  providers: [
    { provide: "CatsService", useClass: CatsRepositoryService },
    { provide: "CatsRepository", useClass: InMemoryCatsRepository },
    { provide: "cats", useValue: cats },
  ],
})
export class CatsModule {}
