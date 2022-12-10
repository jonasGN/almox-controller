import {
  formDataToItemPost,
  itemResponseToItem,
  itemRequestResponseToItemRequest,
} from "./item";
import { categoryResponseToCategory } from "./category";
import { rolesToUserRoles } from "./auth";

export const apiConvert = {
  formDataToItemPost,
  categoryResponseToCategory,
  itemResponseToItem,
  itemRequestResponseToItemRequest,
  rolesToUserRoles,
};
