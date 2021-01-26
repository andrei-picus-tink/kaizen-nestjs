import { Module } from "@nestjs/common";
import { AppController } from "./controllers/app.controller";
import { AppService } from "./services/app.service";
import { CatsController } from "./controllers/CatsController";
import { CatsRepositoryService } from "./services/CatsRepositoryService";
import { InMemoryCatsRepository } from "./services/InMemoryCatsRepository";

@Module({
  imports: [],
  controllers: [AppController, CatsController],
  providers: [
    AppService,
    { provide: "CatsService", useClass: CatsRepositoryService },
    { provide: "CatsRepository", useClass: InMemoryCatsRepository },
  ],
})
export class AppModule {}
