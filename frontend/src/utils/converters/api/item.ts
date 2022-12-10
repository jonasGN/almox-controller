import type { Item, ItemRequest } from "@Types/entities";
import type { ItemPost, ItemRequestResponse, ItemResponse } from "@Types/api";
import { formatter } from "@/utils/formatters";

interface ItemRequestOptions {
  dateFormat?: "default" | "long";
}

/**
 * Convert a `FormData` object into a POST object that matches
 * with what the items API POST expect
 */
export const formDataToItemPost = (formData: FormData): ItemPost => {
  const item: ItemPost = {
    name: formData.get("name")?.toString() ?? "",
    description: formData.get("description")?.toString() ?? "",
    price: Number(formData.get("price")?.toString() ?? ""),
    initialQuantity: Number(formData.get("quantity")?.toString() ?? ""),
    category: formData.get("category")?.toString() ?? "",
    image: formData.get("image")?.toString() ?? "",
    location: {
      column: formData.get("")?.toString() ?? "",
      hall: formData.get("")?.toString() ?? "",
      shelf: formData.get("")?.toString() ?? "",
    },
  };
  return item;
};

/**
 * Converts item API GET response into `Item` entity
 */
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

/**
 * Converts item API GET response into `ItemRequest` entity
 */
export const itemRequestResponseToItemRequest = (
  itemRequestResponse: ItemRequestResponse,
  options?: ItemRequestOptions
): ItemRequest => {
  const date = new Date(itemRequestResponse.requestedAt);
  const dateLongFormat: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };
  return {
    ...itemRequestResponse,
    requestedAt: date,
    user: {
      ...itemRequestResponse.user,
      name: formatter.toShortName(itemRequestResponse.user.name),
    },
    requestedAtFormatted: formatter.toFormattedDate(
      date,
      options?.dateFormat !== "default" ? dateLongFormat : undefined
    ),
  };
};
