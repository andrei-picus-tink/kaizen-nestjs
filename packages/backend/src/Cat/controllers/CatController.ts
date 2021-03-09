import { Body, Controller, Get, Inject, Post } from "@nestjs/common";
import { CatDTO, CreateCatDTO } from "../services/CatService";
import { Public } from "../../auth.guard";
import { CatClient } from "../services/CatClient";

@Controller("cat")
export class CatController {
  constructor(@Inject("CatClient") private readonly catClient: CatClient) {}

  @Public()
  @Get()
  findAll(): Promise<CatDTO[]> {
    return this.catClient.findAll();
  }

  @Post()
  addCat(@Body() newCat: CreateCatDTO): Promise<CatDTO> {
    return this.catClient.add(newCat);
  }
}
