type Location = {
  hall: string;
  shelf: string;
  column: string;
};

/**
 * Item response from `/items`
 */
export interface ItemResponse {
  id: number;
  name: string;
  code: string;
  unitPrice: number;
  amountAvailable: number;
  description: string;
  status: string;
  image: string;
  category: string;
  location: Location;
}

interface UserResponse {
  id: number;
  companyCode: string;
  name: string;
  email: string;
  avatar: string;
  permissions: string[];
}

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

export interface MeResponse {
  id: number;
  name: string;
  email: string;
  companyCode: string;
  avatar: string;
  permissions: string[];
}

export interface AuthResponse {
  token: string;
  refreshToken: string;
}
