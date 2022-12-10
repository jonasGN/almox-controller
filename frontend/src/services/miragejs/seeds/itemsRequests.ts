import type { ItemRequestResponse } from "@Types/responses";
import { faker } from "@faker-js/faker";

const data: ItemRequestResponse[] = [...Array(20)].map((_, index) => {
  return {
    id: index + 1,
    requestedAt: faker.date.future().toISOString(),
    item: {
      code: faker.random.numeric(faker.datatype.boolean() ? 12 : 8),
      message: faker.commerce.productDescription(),
      name: faker.commerce.productName(),
    },
    user: {
      id: faker.datatype.number({ min: 1, max: 9999 }),
      name: faker.name.fullName(),
      companyCode: faker.random.numeric(faker.datatype.boolean() ? 12 : 8),
      email: faker.internet.email(),
      avatar: faker.internet.avatar(),
      permissions: [""],
    },
  };
});

export const itemsRequests = {
  content: data,
};
