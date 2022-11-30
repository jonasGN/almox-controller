import type { ItemRequestResponse } from "@Types/responses";
import { faker } from "@faker-js/faker";

const requests: ItemRequestResponse[] = [];

Array.from({ length: 20 }).forEach((item, index) => {
  requests.push({
    id: index + 1,
    item: {
      name: faker.commerce.productName(),
      code: faker.random.numeric(12),
      message: faker.commerce.productDescription(),
    },
    user: {
      id: index + 1,
      name: faker.name.fullName(),
      companyCode: faker.random.numeric(12),
      email: faker.internet.email(),
      avatar: faker.internet.avatar(),
      permissions: [""],
    },
    requestedAt: faker.date.future().toISOString(),
  });
});

export const itemsRequests = requests;
