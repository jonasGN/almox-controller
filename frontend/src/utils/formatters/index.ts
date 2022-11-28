import { toCurrency } from "./currencyFormatter";
import { toFormattedDate } from "./dateFormatter";
import { leadingZeroOn } from "./numberFormatter";
import { initialsOf, toShortName } from "./userNameFormatter";

export { toCurrency, toFormattedDate, leadingZeroOn, initialsOf, toShortName };

export const formatter = {
  toCurrency,
  toFormattedDate,
  leadingZeroOn,
  initialsOf,
  toShortName,
};
