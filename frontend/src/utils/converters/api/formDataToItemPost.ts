import { ItemPost } from "@Types/post";

/**
 * Convert a `FormData` object into a POST object that matches
 * with what the items API POST expect
 */
export const formDataToItemPost = (formData: FormData): ItemPost => {
  const item: ItemPost = {
    name: formData.get("name")?.toString() ?? "",
    description: formData.get("description")?.toString() ?? "",
    price: Number(formData.get("price")?.toString() ?? ""),
    initialQuantity: Number(formData.get("quantity")?.toString() ?? ""),
    category: formData.get("category")?.toString() ?? "",
    image: formData.get("image")?.toString() ?? "",
    location: {
      column: formData.get("")?.toString() ?? "",
      hall: formData.get("")?.toString() ?? "",
      shelf: formData.get("")?.toString() ?? "",
    },
  };

  return item;
};
