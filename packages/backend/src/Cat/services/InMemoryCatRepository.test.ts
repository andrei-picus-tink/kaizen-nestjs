import { Cat, CreateCat } from "./CatClient";
import { InMemoryCatRepository } from "./InMemoryCatRepository";

describe("InMemoryCatRepository", () => {
  const cats: Cat[] = [
    {
      id: 1,
      name: "Cat 1",
    },
    {
      id: 2,
      name: "Cat 2",
    },
  ];

  it("should find all the cats", async () => {
    const client = new InMemoryCatRepository(cats);

    expect(await client.findAll()).toEqual(cats);
  });

  it("should add a new cat", async () => {
    const newCat: CreateCat = { name: "new" };

    const client = new InMemoryCatRepository(cats);

    expect(await client.add({ name: "new" })).toMatchObject(newCat);

    expect(await client.findAll()).toContainEqual(
      expect.objectContaining({ name: "new" })
    );
  });
});
