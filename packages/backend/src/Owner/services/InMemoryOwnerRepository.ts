import { Inject } from "@nestjs/common";
import { CreateOwner, OwnerEntity, OwnerClient } from "./OwnerClient";

export class InMemoryOwnerRepository implements OwnerClient {
  constructor(@Inject("owners") private owners: OwnerEntity[]) {}

  create = async (owner: CreateOwner): Promise<OwnerEntity> => {
    const newOwner: OwnerEntity = {
      ...owner,
      id: this.owners.length + 1,
    };

    this.owners.push(newOwner);

    return newOwner;
  };

  findMany = async (ids: number[]): Promise<OwnerEntity[]> => {
    const owners = this.owners.filter((owner) => ids.includes(owner.id));

    if (owners.length !== ids.length) {
      throw new Error(`Not all owners found`);
    }

    return owners;
  };

  findOne = async (id: number): Promise<OwnerEntity> => {
    const owner = this.owners.find((owner) => owner.id === id);

    if (!owner) {
      throw new Error(`Owner ${id} not found`);
    }

    return owner;
  };
}
