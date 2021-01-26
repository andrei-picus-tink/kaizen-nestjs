import { InMemoryCatsRepository } from "./InMemoryCatsRepository";
import { CatModel } from "./CatsRepository";

describe("InMemoryCatsRepository", () => {
  it("should find all the cats", async () => {
    const cats: CatModel[] = [
      { id: 1, name: "Cat 1" },
      { id: 2, name: "Cat 2" },
    ];

    const repo = new InMemoryCatsRepository(cats);

    expect(await repo.findAll()).toEqual(cats);
  });

  it("should should add a new cat", async () => {
    const repo = new InMemoryCatsRepository([]);

    await repo.add({ name: "new" });

    expect(await repo.findAll()).toContainEqual(
      expect.objectContaining({ name: "new" })
    );
  });
});
