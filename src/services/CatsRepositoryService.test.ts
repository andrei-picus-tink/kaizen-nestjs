import { CatsRepositoryService } from "./CatsRepositoryService";
import { instance, mock, when } from "strong-mock";
import { CatModel, CatsRepository } from "./CatsRepository";

describe("CatsRepositoryService", () => {
  const catsRepo = mock<CatsRepository>();

  it("should find all the cats", async () => {
    const cats: CatModel[] = [
      {
        id: 1,
        name: "Cat 1",
      },
      {
        id: 2,
        name: "Cat 2",
      },
    ];
    when(catsRepo.findAll()).thenResolve(cats);

    const service = new CatsRepositoryService(instance(catsRepo));

    expect(await service.findAll()).toEqual(cats);
  });

  it("should add a new cat", async () => {
    const newCat: CatModel = { id: 1, name: "new" };

    when(catsRepo.add({ name: "new" })).thenResolve(newCat);

    const service = new CatsRepositoryService(instance(catsRepo));

    expect(await service.add({ name: "new" })).toEqual(newCat);
  });
});
