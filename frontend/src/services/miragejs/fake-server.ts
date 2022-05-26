import { createServer } from "miragejs";

import items from "./seeds/items-seed.json";

export function initFakeServer() {
  createServer({
    routes() {
      this.namespace = "api";
      this.timing = 1000; // simulate request time
      this.get("/items", () => items);
    },
  });
}
