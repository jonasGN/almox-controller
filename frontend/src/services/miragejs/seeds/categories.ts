import type { CategoryResponse } from "@Types/responses";
import { faker } from "@faker-js/faker";

const data: CategoryResponse[] = [...Array(20)].map((_, index) => {
  return {
    id: index + 1,
    name: faker.commerce.productName(),
    itemsAmount: faker.datatype.number({ min: 10, max: 9999 }),
  };
});

export const categories = {
  content: data,
};
