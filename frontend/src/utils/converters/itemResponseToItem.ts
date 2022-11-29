import { ItemResponse } from "@Types/responses";
import { Item } from "@Types/entities";

import { formatter } from "../formatters";

export const itemResponseToItem = (itemResponse: ItemResponse): Item => {
  const price = itemResponse.unitPrice / 100;

  const item: Item = {
    amount: itemResponse.amountAvailable,
    amountFormatted: `${formatter.leadingZeroOn(itemResponse.amountAvailable)} uni`,
    price: price,
    priceFormatted: formatter.toCurrency(price),
    isAvailable: itemResponse.status === "AVAILABLE",
    ...itemResponse,
  };

  return item;
};
