import type { CategoryResponse } from "@Types/responses";
import { faker } from "@faker-js/faker";

const data: CategoryResponse[] = [];

Array.from({ length: 20 }).forEach((cat, index) => {
  data.push({
    id: index + 1,
    name: faker.commerce.productName(),
    itemsAmount: faker.datatype.number({ min: 10, max: 9999 }),
  });
});

export const categories = {
  content: data,
};
