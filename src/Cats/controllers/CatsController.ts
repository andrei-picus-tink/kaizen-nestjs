import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { CatDTO, CatsService, CreateCatDTO } from "../services/CatsService";

@Controller("cats")
export class CatsController {
  constructor(
    @Inject("CatsService") private readonly catsService: CatsService
  ) {}

  @Get()
  findAll(): Promise<CatDTO[]> {
    return this.catsService.findAll();
  }

  @Post()
  addCat(@Body() newCat: CreateCatDTO): Promise<CatDTO> {
    return this.catsService.add(newCat);
  }
}
