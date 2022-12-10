import { Response } from "miragejs";

const unauthorizedError = new Response(401, undefined, {
  message: "Invalid credentials",
});

const hasNoTokenError = new Response(401, undefined, {
  message: "Token is not present",
});

export const errors = {
  unauthorizedError,
  hasNoTokenError,
};
