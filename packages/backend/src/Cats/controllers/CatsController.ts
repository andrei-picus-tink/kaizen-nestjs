import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { CatDTO, CatsService, CreateCatDTO } from "../services/CatsService";
import { Public } from "../../auth.guard";

@Controller("cats")
export class CatsController {
  constructor(
    @Inject("CatsService") private readonly catsService: CatsService
  ) {}

  @Public()
  @Get()
  findAll(): Promise<CatDTO[]> {
    return this.catsService.findAll();
  }

  @Post()
  addCat(@Body() newCat: CreateCatDTO): Promise<CatDTO> {
    return this.catsService.add(newCat);
  }
}
