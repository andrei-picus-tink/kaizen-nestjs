export type Owner = {
  id: number;
  name: string;
};

export type CreateOwner = Omit<Owner, "id">;

export interface OwnerClient {
  findOne: (id: number) => Promise<Owner>;
  findMany: (ids: number[]) => Promise<Owner[]>;
  create: (owner: CreateOwner) => Promise<Owner>;
}
