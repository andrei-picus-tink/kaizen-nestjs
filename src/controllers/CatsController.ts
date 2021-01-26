import { Controller, Get, Inject } from "@nestjs/common";
import { CatDTO, CatsService } from "./CatsService";

@Controller("cats")
export class CatsController {
  constructor(
    @Inject("CatsService") private readonly catsService: CatsService
  ) {}

  @Get()
  findAll(): Promise<CatDTO[]> {
    return this.catsService.findAll();
  }
}
