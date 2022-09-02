export class BadRequestException extends Error {
  #name = "BadRequestException";

  constructor(msg?: string) {
    super(msg ?? "Invalid given data");
    this.name = this.#name;
  }
}

export class UnauthorizedException extends Error {
  #name = "UnauthorizedException";

  constructor(msg?: string) {
    super(msg ?? "Authorization error");
    this.name = this.#name;
  }
}

export class ServerException extends Error {
  #name = "ServerException";

  constructor(msg?: string) {
    super(msg ?? "Unable to reach server");
    this.name = this.#name;
  }
}
