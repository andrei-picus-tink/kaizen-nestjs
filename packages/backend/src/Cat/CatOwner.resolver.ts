import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { OwnerEntity, OwnerClient } from "../Owner/services/OwnerClient";
import { Inject } from "@nestjs/common";
import { CatEntity } from "./services/CatClient";

@Resolver("Cat")
export class CatOwnerResolver {
  constructor(
    @Inject("OwnerClient") private readonly ownerClient: OwnerClient
  ) {}

  @ResolveField()
  async owner(@Parent() cat: CatEntity): Promise<OwnerEntity> {
    return this.ownerClient.findOne(cat.owner);
  }
}
