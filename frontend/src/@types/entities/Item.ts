export interface Item {
  id: number;
  name: string;
  image: string;
  unitPrice: number;
  description: string;
  amountAvailable: number;
  itemCode: string;
  location: {
    hall: number;
    shelf: number;
    block: number;
  };
}
