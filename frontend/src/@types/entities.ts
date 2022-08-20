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
