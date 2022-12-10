import type { Category } from "@Types/entities";
import type { CategoryResponse } from "@Types/api";

/**
 * Converts the category API response to `Category` entity
 * @param cat the category api response object
 * @returns `Category` entity
 */
export const categoryResponseToCategory = (cat: CategoryResponse): Category => {
  const entity: Category = { ...cat };
  return entity;
};
