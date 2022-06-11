export interface Item {
  id: number;
  name: string;
  code: string;
  unitPrice: number;
  amountAvailable: number;
  description: string;
  status: string;
  image: string;
  category: string;
  location: {
    hall: string;
    shelf: string;
    column: string;
  };
}
