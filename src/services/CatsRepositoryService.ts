import { Inject, Injectable } from "@nestjs/common";
import { CatsRepository } from "./CatsRepository";
import { CatDTO, CatsService } from "../controllers/CatsService";

@Injectable()
export class CatsRepositoryService implements CatsService {
  constructor(
    @Inject("CatsRepository") private readonly catsRepo: CatsRepository
  ) {}

  findAll(): Promise<CatDTO[]> {
    return this.catsRepo.findAll();
  }
}
