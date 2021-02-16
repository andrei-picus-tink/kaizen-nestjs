import { Body, Controller, Get, Inject, Post, UseGuards } from "@nestjs/common";
import { CatDTO, CatsService, CreateCatDTO } from "../services/CatsService";
import { AuthGuard } from "../../auth.guard";

@Controller("cats")
export class CatsController {
  constructor(
    @Inject("CatsService") private readonly catsService: CatsService
  ) {}

  @UseGuards(AuthGuard)
  @Get()
  findAll(): Promise<CatDTO[]> {
    return this.catsService.findAll();
  }

  @Post()
  addCat(@Body() newCat: CreateCatDTO): Promise<CatDTO> {
    return this.catsService.add(newCat);
  }
}
