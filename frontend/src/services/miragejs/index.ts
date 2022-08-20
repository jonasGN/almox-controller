import { createServer, Model } from "miragejs";

import { items } from "./items";

export const createFakeServer = function () {
  createServer({
    models: {
      item: Model,
    },

    seeds(server) {
      server.db.loadData({
        items: items,
      });
    },

    routes() {
      this.namespace = "api";
      this.timing = 700;

      this.get("/items", (schema, req) => schema.all("item"));
      this.get("/items/:id");
    },
  });
};
