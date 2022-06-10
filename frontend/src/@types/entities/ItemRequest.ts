import { User } from "./User";

export interface ItemRequest {
  id: number;
  user: User;
  requestStatus?: {
    status: "ACCEPTED" | "REFUSED" | "WAITING";
    responsible: User;
  };
  requestedItem: {
    code: string;
    name: string;
    message: string;
    moment: Date;
  };
}
