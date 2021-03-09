import { Inject } from "@nestjs/common";
import {
  CreateOwner,
  Owner,
  OwnerClient,
} from "@kaizen/backend/src/Owner/services/OwnerClient";

export class InMemoryOwnerRepository implements OwnerClient {
  constructor(@Inject() private owners: Owner[]) {}

  create = async (owner: CreateOwner): Promise<Owner> => {
    const newOwner: Owner = {
      ...owner,
      id: this.owners.length + 1,
    };

    this.owners.push(newOwner);

    return newOwner;
  };

  findMany = async (ids: number[]): Promise<Owner[]> => {
    const owners = this.owners.filter((owner) => ids.includes(owner.id));

    if (owners.length !== ids.length) {
      throw new Error(`Not all owners found`);
    }

    return owners;
  };

  findOne = async (id: number): Promise<Owner> => {
    const owner = this.owners.find((owner) => owner.id === id);

    if (!owner) {
      throw new Error(`Owner ${id} not found`);
    }

    return owner;
  };
}
