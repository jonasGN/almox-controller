interface Location {
  hall: string;
  shelf: string;
  column: string;
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
