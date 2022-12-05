import type { ItemResponse } from "@Types/responses";
import type { ItemPost } from "@Types/post";

import { faker } from "@faker-js/faker";

const _items: ItemResponse[] = [];

for (let i = 0; i < 20; i++) {
  _items.push({
    id: i + 1,
    name: faker.commerce.productName(),
    code: faker.random.numeric(12),
    unitPrice: faker.datatype.number({ min: 99, max: 10000 }),
    amountAvailable: faker.datatype.number({ max: 100 }),
    description: faker.commerce.productDescription(),
    status: faker.helpers.arrayElement(["AVAILABLE", "UNAVAILABLE"]),
    image: faker.image.imageUrl(520 * 20, 400 * 20, undefined, true),
    category: faker.helpers.arrayElement(["Parafusos", "Roscas", "Diversos", "Máquinas"]),
    location: {
      column: faker.helpers.arrayElement(["COLU01", "COLU02", "COLU03", "COLU04"]),
      hall: faker.helpers.arrayElement(["CORR01", "CORR02", "CORR03", "CORR04"]),
      shelf: faker.helpers.arrayElement(["PRAT01", "PRAT02", "PRAT03", "PRAT04"]),
    },
  });
}

const createNewItem = (id: number, body: any) => {
  const data = JSON.parse(body) as ItemPost;
  const newItem = {
    id: id.toString(),
    name: data.name,
    code: faker.random.numeric(12),
    unitPrice: data.price * 100,
    description: data.description,
    amountAvailable: data.initialQuantity,
    category: data.category,
    image: data.image,
    status: "AVAILABLE",
    location: data.location,
  };

  return newItem;
};

export const items = {
  content: _items,
  create: createNewItem,
};
