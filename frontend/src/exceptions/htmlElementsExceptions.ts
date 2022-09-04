export class ElementException extends Error {
  #name = "ElementException";

  constructor(msg?: string) {
    super(msg);
    this.name = this.#name;
  }
}
