import { createServer, Model } from "miragejs";

// seeds
import itemsSeed from "./seeds/items-seed.json";
import itemRequestsSeed from "./seeds/items-requests.json";

export function initFakeServer() {
  createServer({
    models: {
      items: Model,
      itemRequests: Model,
    },
    seeds(server) {
      server.db.loadData({
        items: itemsSeed,
        itemRequests: itemRequestsSeed,
      });
    },
    routes() {
      this.namespace = "api";
      this.timing = 1000;
      this.get("/items", () => {
        return this.schema.all("items");
      });
      this.get("/item-requests", () => {
        return this.schema.all("itemRequests");
      });
    },
  });
}
