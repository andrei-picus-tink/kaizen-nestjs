import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { APP_GUARD } from "@nestjs/core";
import { AuthGuard } from "./auth.guard";
import { CatModule } from "./Cat/Cat.module";
import { OwnerModule } from "./Owner/Owner.module";
import { CatResolver } from "./resolvers/Cat.resolver";

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ["./**/*.graphql"],
    }),
    CatModule,
    OwnerModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
    CatResolver,
  ],
})
export class AppModule {}
