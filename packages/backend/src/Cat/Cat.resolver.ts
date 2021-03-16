import { Args, Query, Resolver } from "@nestjs/graphql";
import { Cat, CatClient } from "./services/CatClient";
import { Inject, ParseIntPipe } from "@nestjs/common";
import { Public } from "../auth.guard";

@Resolver("Cat")
export class CatResolver {
  constructor(@Inject("CatClient") private catClient: CatClient) {}

  @Public()
  @Query("cat")
  async cat(@Args("id", ParseIntPipe) id: number): Promise<Cat> {
    return this.catClient.findOne(id);
  }

  @Public()
  @Query("cats")
  async cats(): Promise<Cat[]> {
    return this.catClient.findAll();
  }
}
