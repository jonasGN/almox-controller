import { ItemRequest } from "../../@types/entities";
import { ItemRequestResponse } from "../../@types/responses";

import { toFormattedDate } from "../formatters";

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
    requestedAtFormatted: toFormattedDate(
      date,
      options?.dateFormat !== "default" ? dateLongFormat : undefined
    ),
  };
};
