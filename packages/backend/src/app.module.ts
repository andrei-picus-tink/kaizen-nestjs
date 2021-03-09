import { Module } from "@nestjs/common";
import { APP_GUARD } from "@nestjs/core";
import { AuthGuard } from "./auth.guard";
import { CatModule } from "./Cat/Cat.module";
import { OwnerModule } from "./Owner/Owner.module";

@Module({
  imports: [CatModule, OwnerModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
