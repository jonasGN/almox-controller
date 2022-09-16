import { ItemResponse } from "@Types/responses";
import { Item } from "@Types/entities";

import { leadingZeroOn, toCurrency } from "../formatters";

export const itemResponseToItem = (itemResponse: ItemResponse): Item => {
  const price = itemResponse.unitPrice / 100;

  const item: Item = {
    amount: itemResponse.amountAvailable,
    amountFormatted: `${leadingZeroOn(itemResponse.amountAvailable)} uni`,
    price: price,
    priceFormatted: toCurrency(price),
    isAvailable: itemResponse.status === "AVAILABLE",
    ...itemResponse,
  };

  return item;
};
