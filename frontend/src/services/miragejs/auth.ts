import { faker } from "@faker-js/faker";
import { AuthResponse } from "../../@types/apiResponse";

export const auth: AuthResponse = {
  accessToken: faker.datatype.uuid(),
  refreshToken: faker.datatype.uuid(),
  roles: faker.helpers.arrayElements(["ADMIN", "OPERATOR", "STANDARD"], 1),
  user: {
    name: faker.name.fullName(),
    internalCode: faker.random.numeric(10),
    avatar: faker.internet.avatar(),
  },
};
