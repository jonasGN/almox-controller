import { Icons } from "@Types/icons";

export interface MenuItem {
  title: string;
  url?: string;
  icon?: Icons;
  onClick?: () => void;
  isDanger?: boolean;
}
