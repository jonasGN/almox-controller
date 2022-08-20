import { ItemResponse } from "../@types/apiResponse";
import { Item } from "../@types/entities";

import { apiClient } from "../services/apiClient";
import { leadingZeroOn, toCurrency } from "../utils/formatters";

const path = "/api/items";

export const fetchItems = async (): Promise<Item[]> => {
  const response = await apiClient.get(path);
  const data = response.data.items as ItemResponse[];

  const items: Item[] = data.map((item) => {
    const price = item.unitPrice / 100;

    return {
      amount: item.amountAvailable,
      amountFormatted: `${leadingZeroOn(item.amountAvailable)} uni`,
      price: price,
      priceFormatted: toCurrency(price),
      isAvailable: item.status === "AVAILABLE",
      ...item,
    };
  });

  return items;
};

export const fetchItemById = async (id: number): Promise<Item> => {
  const response = await apiClient.get(`${path}/${id}`);
  const item = response.data.item as ItemResponse;

  const price = item.unitPrice / 100;

  return {
    amount: item.amountAvailable,
    amountFormatted: `${leadingZeroOn(item.amountAvailable)} uni`,
    price: price,
    priceFormatted: toCurrency(price),
    isAvailable: item.status === "AVAILABLE",
    ...item,
  };
};
