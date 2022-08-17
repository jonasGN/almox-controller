import { createServer } from "miragejs";

import { items } from "./items";

export const createFakeServer = function () {
  createServer({
    routes() {
      this.namespace = "api";
      this.timing = 700;

      this.get("/items", () => {
        return { items: items };
      });
    },
  });
};
