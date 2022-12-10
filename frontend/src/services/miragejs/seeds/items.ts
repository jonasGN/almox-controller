import type { ItemPost, ItemResponse } from "@Types/api";
import { faker } from "@faker-js/faker";

const data: ItemResponse[] = [...Array(20)].map((_, index) => {
  return {
    id: index + 1,
    amountAvailable: faker.datatype.number({ max: 999 }),
    category: `Category ${faker.color.human()}`,
    code: faker.random.numeric(faker.datatype.boolean() ? 12 : 8),
    description: faker.commerce.productDescription(),
    image: faker.image.imageUrl(520 * 20, 400 * 20, undefined, true),
    location: {
      column: faker.helpers.arrayElement(["COLU01", "COLU02", "COLU03", "COLU04"]),
      hall: faker.helpers.arrayElement(["CORR01", "CORR02", "CORR03", "CORR04"]),
      shelf: faker.helpers.arrayElement(["PRAT01", "PRAT02", "PRAT03", "PRAT04"]),
    },
    name: faker.commerce.productName(),
    status: faker.helpers.arrayElement(["AVAILABLE", "UNAVAILABLE"]),
    unitPrice: faker.datatype.number({ min: 99, max: 99000 }),
  };
});

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
  content: data,
  create: createNewItem,
};
