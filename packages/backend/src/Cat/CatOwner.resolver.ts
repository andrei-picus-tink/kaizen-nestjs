import { Parent, ResolveField, Resolver } from "@nestjs/graphql";
import { Owner, OwnerClient } from "../Owner/services/OwnerClient";
import { Inject } from "@nestjs/common";
import { Cat } from "./services/CatClient";

@Resolver("Cat")
export class CatOwnerResolver {
  constructor(
    @Inject("OwnerClient") private readonly ownerClient: OwnerClient
  ) {}

  @ResolveField()
  async owner(@Parent() cat: Cat): Promise<Owner> {
    return this.ownerClient.findOne(cat.owner);
  }
}
