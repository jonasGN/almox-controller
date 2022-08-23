import { createServer, Model } from "miragejs";

// seeds
import { items } from "./items";
import { itemsRequests } from "./itemsRequests";

export const createFakeServer = function () {
  createServer({
    models: {
      item: Model,
      itemsRequests: Model,
    },

    seeds(server) {
      server.db.loadData({
        items: items,
        itemsRequests: itemsRequests,
      });
    },

    routes() {
      this.namespace = "api";
      this.timing = 700;

      this.get("/items", (schema, req) => schema.all("item"));
      this.get("/items/:id");

      this.get("/items/requests", (schema, req) => schema.all("itemsRequests"));
      this.get("/items/requests/:id");
    },
  });
};
