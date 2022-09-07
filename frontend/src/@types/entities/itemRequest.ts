import { User } from "./user";

export interface ItemRequest {
  id: number;
  item: {
    name: string;
    code: string;
    message: string;
  };
  user: User;
  requestedAt: Date;
  requestedAtFormatted: string;
}
