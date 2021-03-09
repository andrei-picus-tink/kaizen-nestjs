import { Owner } from "@kaizen/backend/src/Owner/services/OwnerClient";
import { InMemoryOwnerRepository } from "@kaizen/backend/src/Owner/services/InMemoryOwnerRepository";

describe("InMemoryOwnerRepository", () => {
  const owners: Owner[] = [
    {
      id: 1,
      name: "Bob",
    },
    {
      id: 2,
      name: "Frank",
    },
  ];

  it("should find an existing owner", async () => {
    const client = new InMemoryOwnerRepository(owners);

    expect(await client.findOne(1)).toEqual(owners[0]);
  });

  it("should throw for a non existent owner", async () => {
    const client = new InMemoryOwnerRepository(owners);

    await expect(client.findOne(-1)).rejects.toThrow();
  });

  it("should find several existing owners", async () => {
    const client = new InMemoryOwnerRepository(owners);

    expect(await client.findMany([1, 2])).toEqual(owners);
  });

  it("should throw when one of several owners are missing", async () => {
    const client = new InMemoryOwnerRepository(owners);

    await expect(client.findMany([1, 2, 3])).rejects.toThrow();
  });
});
