import { Icon } from "../Icons";

export interface MenuItem {
  title: string;
  url?: string;
  icon?: Icon;
  onClick?: () => void;
  isDanger?: boolean;
}
