import { createServer } from "miragejs";

// seeds
import items from "./seeds/items-seed.json";
import itemRequests from "./seeds/items-requests.json";

export function initFakeServer() {
  createServer({
    routes() {
      this.namespace = "api";
      this.timing = 1000; // simulate request time
      this.get("/items", () => items);
      this.get("/item-requests", () => itemRequests);
    },
  });
}
