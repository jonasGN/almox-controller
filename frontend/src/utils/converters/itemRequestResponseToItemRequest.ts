import type { ItemRequest } from "@Types/entities";
import type { ItemRequestResponse } from "@Types/api";

import { formatter } from "../formatters";

type DateFormat = "default" | "long";

interface Options {
  dateFormat?: DateFormat;
}

const dateLongFormat: Intl.DateTimeFormatOptions = {
  day: "2-digit",
  month: "long",
  year: "numeric",
};

export const itemRequestResponseToItemRequest = (
  itemRequestResponse: ItemRequestResponse,
  options?: Options
): ItemRequest => {
  const date = new Date(itemRequestResponse.requestedAt);

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
