import { ItemRequestResponse } from "../@types/apiResponse";
import { ItemRequest } from "../@types/entities";

import { apiClient } from "../services/apiClient";
import { toFormattedDate } from "../utils/formatters";

export const fetchItemRequests = async (): Promise<ItemRequest[]> => {
  const response = await apiClient.get("api/items/requests");
  const data = response.data.itemRequests as ItemRequestResponse[];

  const requests: ItemRequest[] = data.map((item) => {
    const date = new Date(item.requestedAt);

    return {
      ...item,
      requestedAt: date,
      requestedAtFormatted: toFormattedDate(date),
    };
  });

  return requests;
};

export const fetchItemRequestById = async (id: number): Promise<ItemRequest> => {
  const response = await apiClient.get(`api/items/requests/${id}`);
  const itemRequest = response.data.itemRequest as ItemRequestResponse;

  console.log(itemRequest);

  const date = new Date(itemRequest.requestedAt);
  return {
    ...itemRequest,
    requestedAt: date,
    requestedAtFormatted: toFormattedDate(date, {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }),
  };
};
