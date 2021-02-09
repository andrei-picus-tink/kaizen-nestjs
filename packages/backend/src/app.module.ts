import { Module } from "@nestjs/common";
import { CatsModule } from "./Cats/Cats.module";

@Module({
  imports: [CatsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
