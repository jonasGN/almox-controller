import { faker } from "@faker-js/faker";

import { ItemResponse } from "../../@types/apiResponse";

const _items: ItemResponse[] = [];

Array.from({ length: 20 }).forEach((item, index) => {
  _items.push({
    id: index + 1,
    name: faker.commerce.productName(),
    code: faker.random.numeric(12),
    unitPrice: faker.datatype.number({ min: 99, max: 10000 }),
    amountAvailable: faker.datatype.number({ max: 100 }),
    description: faker.commerce.productDescription(),
    status: faker.helpers.arrayElement(["AVAILABLE", "UNAVAILABLE"]),
    image: "",
    category: faker.helpers.arrayElement(["Parafusos", "Roscas", "Diversos", "Máquinas"]),
    location: {
      column: faker.helpers.arrayElement(["COLU01", "COLU02", "COLU03", "COLU04"]),
      hall: faker.helpers.arrayElement(["CORR01", "CORR02", "CORR03", "CORR04"]),
      shelf: faker.helpers.arrayElement(["PRAT01", "PRAT02", "PRAT03", "PRAT04"]),
    },
  });
});

export const items = _items;
