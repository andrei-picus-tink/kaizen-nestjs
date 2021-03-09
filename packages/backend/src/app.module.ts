import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { CatModule } from "./Cat/Cat.module";
import { AuthGuard } from "./auth.guard";

@Module({
  imports: [CatModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
