export type OwnerEntity = {
  id: number;
  name: string;
};

export type CreateOwner = Omit<OwnerEntity, "id">;

export interface OwnerClient {
  findOne: (id: number) => Promise<OwnerEntity>;
  findMany: (ids: number[]) => Promise<OwnerEntity[]>;
  create: (owner: CreateOwner) => Promise<OwnerEntity>;
}
