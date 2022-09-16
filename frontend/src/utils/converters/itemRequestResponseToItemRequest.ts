import { ItemRequest } from "@Types/entities";
import { ItemRequestResponse } from "@Types/responses";

import { toFormattedDate, toShortName } from "../formatters";

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
      name: toShortName(itemRequestResponse.user.name),
    },
    requestedAtFormatted: toFormattedDate(
      date,
      options?.dateFormat !== "default" ? dateLongFormat : undefined
    ),
  };
};
