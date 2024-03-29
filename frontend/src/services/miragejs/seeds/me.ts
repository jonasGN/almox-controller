import type { MeResponse } from "@Types/api";
import { faker } from "@faker-js/faker";

export const me: MeResponse = {
  id: faker.datatype.number({ min: 1, max: 1000 }),
  name: faker.name.fullName(),
  email: faker.internet.email(),
  companyCode: faker.random.numeric(10),
  avatar: faker.internet.avatar(),
  permissions: faker.helpers.arrayElements(["ADMIN", "OPERATOR", "STANDARD"], 1),
};
