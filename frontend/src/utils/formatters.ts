export function toCurrency(number: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(number);
}

// TODO: format date to 'DD jun YYYY' format
interface DateOptions {
  options: Intl.DateTimeFormatOptions;
  locale: string;
}

export function toLocaleDate(date: Date, dateOptions?: DateOptions): string {
  const defaultOptions: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };

  return new Intl.DateTimeFormat(
    "pt-BR",
    dateOptions?.options ?? defaultOptions
  ).format(date);
}

export function getNameInitials(fullName: string): string {
  const names = fullName.split(" ");
  names.filter((name) => name.length > 2);

  const firstName = names[0].charAt(0);
  const lastName = names[names.length - 1].charAt(0);

  return firstName + lastName;
}
