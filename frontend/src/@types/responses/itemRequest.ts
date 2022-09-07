import { UserResponse } from "./user";

export interface ItemRequestResponse {
  id: number;
  item: {
    name: string;
    code: string;
    message: string;
  };
  user: UserResponse;
  requestedAt: string;
}
