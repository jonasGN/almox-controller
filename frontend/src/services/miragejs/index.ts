import { createServer, Model } from "miragejs";

// seeds
import { items } from "./items";
import { itemsRequests } from "./itemsRequests";

export const createFakeServer = function () {
  createServer({
    models: {
      item: Model,
      itemRequest: Model,
    },

    seeds(server) {
      server.db.loadData({
        items: items,
        itemRequests: itemsRequests,
      });
    },

    routes() {
      this.namespace = "api";
      this.timing = 700;

      this.get("/items", (schema, req) => schema.all("item"));
      this.get("/items/:id");

      this.get("/items/requests", (schema, req) => schema.all("itemRequest"));
      this.get("/items/requests/:id", (schema, req) => {
        return schema.find("itemRequest", req.params.id);
      });
    },
  });
};
