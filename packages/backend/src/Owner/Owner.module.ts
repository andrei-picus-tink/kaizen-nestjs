import { Module } from "@nestjs/common";
import { InMemoryOwnerRepository } from "./services/InMemoryOwnerRepository";
import { Owner } from "./services/OwnerClient";
import { OwnerController } from "./controllers/OwnerController";
import { CatOwnerResolver } from "../Cat/CatOwner.resolver";

const owners: Owner[] = [
  {
    id: 1,
    name: "Bob",
  },
  {
    id: 2,
    name: "Frank",
  },
];

@Module({
  imports: [],
  controllers: [OwnerController],
  providers: [
    { provide: "OwnerClient", useClass: InMemoryOwnerRepository },
    { provide: "owners", useValue: owners },
    CatOwnerResolver,
  ],
})
export class OwnerModule {}
