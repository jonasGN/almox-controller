type DateOptions = Intl.DateTimeFormatOptions;

export const toFormattedDate = (date: Date, options?: DateOptions): string => {
  return Intl.DateTimeFormat(
    "pt-BR",
    options ?? { day: "2-digit", month: "short", year: "numeric" }
  ).format(date);
};
