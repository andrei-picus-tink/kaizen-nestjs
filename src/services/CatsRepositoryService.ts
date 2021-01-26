import { Inject, Injectable } from "@nestjs/common";
import { CatsRepository } from "./CatsRepository";
import { CatDTO, CatsService, CreateCatDTO } from "../controllers/CatsService";

@Injectable()
export class CatsRepositoryService implements CatsService {
  constructor(
    @Inject("CatsRepository") private readonly catsRepo: CatsRepository
  ) {}

  findAll(): Promise<CatDTO[]> {
    return this.catsRepo.findAll();
  }

  add(newCat: CreateCatDTO): Promise<CatDTO> {
    return this.catsRepo.add(newCat);
  }
}
