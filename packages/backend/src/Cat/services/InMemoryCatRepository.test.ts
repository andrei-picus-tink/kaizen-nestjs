import { Cat, CreateCat } from "./CatClient";
import { InMemoryCatRepository } from "./InMemoryCatRepository";

describe("InMemoryCatRepository", () => {
  const cats: Cat[] = [
    {
      id: 1,
      name: "Cat 1",
      owner: 1,
    },
    {
      id: 2,
      name: "Cat 2",
      owner: 2,
    },
  ];

  it("should find all the cats", async () => {
    const client = new InMemoryCatRepository(cats);

    expect(await client.findAll()).toEqual(cats);
  });

  it("should add a new cat", async () => {
    const newCat: CreateCat = { name: "new", owner: 3 };

    const client = new InMemoryCatRepository(cats);

    expect(await client.add(newCat)).toMatchObject(newCat);

    expect(await client.findAll()).toContainEqual(
      expect.objectContaining({ name: "new" })
    );
  });
});
