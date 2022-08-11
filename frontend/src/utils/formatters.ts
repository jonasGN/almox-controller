interface CurrencyConfig {
  currency?: string | string[];
  options?: Intl.NumberFormatOptions;
}

export function toCurrency(number: number, config?: CurrencyConfig): string {
  const locale = config?.currency ?? "pt-BR";
  const options = config?.options ?? { style: "currency", currency: "BRL" };

  return new Intl.NumberFormat(locale, options).format(number);
}

interface DateConfig {
  options?: Intl.DateTimeFormatOptions;
  locale?: string;
}

// TODO: format date to 'DD jun YYYY' format
export function toLocaleDate(date: Date, config?: DateConfig): string {
  const locale = config?.locale ?? "pt-BR";
  const options = config?.options ?? { day: "2-digit", month: "short", year: "numeric" };

  return new Intl.DateTimeFormat(locale, options).format(date);
}

/**
 * Retrive the name initials. For example: `Alan Turing` turns into `AT`
 */
export function getNameInitials(fullName: string): string {
  const names = fullName.split(" ");
  names.filter((name) => name.length > 2);

  const firstName = names[0].charAt(0);
  const lastName = names[names.length - 1].charAt(0);

  return firstName + lastName;
}
