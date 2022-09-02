import { faker } from "@faker-js/faker";
import { AuthResponse } from "../../@types/apiResponse";

export const auth: AuthResponse = {
  token: faker.datatype.uuid(),
  refreshToken: faker.datatype.uuid(),
};
