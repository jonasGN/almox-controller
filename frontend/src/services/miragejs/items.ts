import { faker } from "@faker-js/faker";

import { ItemResponse } from "../../@types/apiResponse";

const _items: ItemResponse[] = [];

Array.from({ length: 20 }).forEach((item, index) => {
  _items.push({
    id: index + 1,
    name: faker.commerce.productName(),
    code: faker.random.numeric(12),
    unitPrice: Math.floor(800 + index * 7),
    amountAvailable: 9,
    description: faker.commerce.productDescription(),
    status: "AVAILABLE",
    image: "",
    category: "Parafusos",
    location: {
      column: "COLU01",
      hall: "CORR01",
      shelf: "PRAT01",
    },
  });
});

export const items = _items;
