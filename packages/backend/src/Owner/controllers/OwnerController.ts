import { Controller, Get, Inject, Param, ParseIntPipe } from "@nestjs/common";
import { Public } from "../../auth.guard";
import { OwnerClient } from "../services/OwnerClient";
import { OwnerDTO } from "@kaizen/dto/owner.dto";

@Controller("owner")
export class OwnerController {
  constructor(
    @Inject("OwnerClient") private readonly ownerClient: OwnerClient
  ) {}

  @Public()
  @Get(":id")
  findOne(@Param("id", ParseIntPipe) id: number): Promise<OwnerDTO> {
    return this.ownerClient.findOne(id);
  }
}
