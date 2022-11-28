import type { ItemAddForm } from "@Types/form";
import type { ItemPost } from "@Types/post";

export const itemAddFormToItemPost = (itemForm: ItemAddForm): ItemPost => {
  const item: ItemPost = {
    name: itemForm.name,
    description: itemForm.description,
    price: Number(itemForm.price),
    initialQuantity: Number(itemForm.quantity),
    category: itemForm.category,
    image: itemForm.image,
    location: {
      column: itemForm.column,
      hall: itemForm.hall,
      shelf: itemForm.shelf,
    },
  };

  return item;
};
