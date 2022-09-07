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
