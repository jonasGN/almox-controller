import { UserRoles } from "./common";

type Location = {
  hall: string;
  shelf: string;
  column: string;
};

export interface Item {
  id: number;
  name: string;
  code: string;
  price: number;
  priceFormatted: string;
  amount: number;
  amountFormatted: string;
  description: string;
  status: string;
  isAvailable: boolean;
  image: string;
  category: string;
  location: Location;
}

interface User {
  id: number;
  companyCode: string;
  name: string;
  email: string;
  avatar: string;
  permissions: string[];
}

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

export interface AuthData {
  accessToken: string;
  refreshToken: string;
  roles: Array<UserRoles>;
  user: {
    name: string;
    internalCode: string;
    avatar: string;
  };
}

export interface RefreshTokenData {
  accessToken: string;
  refreshToken: string;
}
