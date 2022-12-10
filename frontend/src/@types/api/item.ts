interface Location {
  hall: string;
  shelf: string;
  column: string;
}

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

export interface ItemPost {
  name: string;
  description: string;
  price: number;
  initialQuantity: number;
  category: string;
  image: string;
  location: Location;
}
