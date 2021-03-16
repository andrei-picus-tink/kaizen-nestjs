import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Inject, ParseIntPipe } from "@nestjs/common";
import { Public } from "../auth.guard";
import { CatClient, CatEntity } from "../Cat/services/CatClient";
import { OwnerClient, OwnerEntity } from "../Owner/services/OwnerClient";

@Resolver("Cat")
export class CatResolver {
  constructor(
    @Inject("CatClient") private catClient: CatClient,
    @Inject("OwnerClient") private readonly ownerClient: OwnerClient
  ) {}

  @Public()
  @Query("cat")
  async cat(@Args("id", ParseIntPipe) id: number) {
    return this.catClient.findOne(id);
  }

  @Public()
  @Query("cats")
  async cats() {
    return this.catClient.findAll();
  }

  @ResolveField("owner")
  async getOwner(@Parent() cat: CatEntity): Promise<OwnerEntity> {
    return this.ownerClient.findOne(cat.owner);
  }
}
