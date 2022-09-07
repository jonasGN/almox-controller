import { Response } from "miragejs";

export const unauthorizedError = new Response(401, undefined, {
  message: "Invalid credentials",
});

export const hasNoTokenError = new Response(401, undefined, {
  message: "Token is not present",
});
