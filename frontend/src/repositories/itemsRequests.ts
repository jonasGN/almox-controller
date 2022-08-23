import { ItemRequestResponse } from "../@types/apiResponse";
import { ItemsRequests } from "../@types/entities";

import { apiClient } from "../services/apiClient";
import { toFormattedDate } from "../utils/formatters";

export const fetchItemsRequests = async (): Promise<ItemsRequests[]> => {
  const response = await apiClient.get("api/items/requests");
  const data = response.data.itemsRequests as ItemRequestResponse[];

  const requests: ItemsRequests[] = data.map((item) => {
    const date = new Date(item.requestedAt);

    return {
      ...item,
      requestedAt: date,
      requestedAtFormatted: toFormattedDate(date),
    };
  });

  return requests;
};

export const fetchItemRequestById = async (id: number): Promise<ItemsRequests> => {
  throw new Error("Unimplemented method");
};
