import { Module } from "@nestjs/common";
import { InMemoryOwnerRepository } from "./services/InMemoryOwnerRepository";
import { OwnerEntity } from "./services/OwnerClient";
import { OwnerController } from "./controllers/OwnerController";

const owners: OwnerEntity[] = [
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
  ],
  exports: ["OwnerClient"],
})
export class OwnerModule {}
