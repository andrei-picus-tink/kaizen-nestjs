import { Module } from "@nestjs/common";
import { InMemoryOwnerRepository } from "@kaizen/backend/src/Owner/services/InMemoryOwnerRepository";
import { Owner } from "@kaizen/backend/src/Owner/services/OwnerClient";

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
  controllers: [],
  providers: [
    { provide: "OwnerClient", useClass: InMemoryOwnerRepository },
    { provide: "owners", useValue: owners },
  ],
})
export class OwnerModule {}
