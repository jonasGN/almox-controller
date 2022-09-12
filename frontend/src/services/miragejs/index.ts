import { createServer, Model, Response } from "miragejs";

import { auth, refreshToken, items, itemsRequests } from "./seeds";
import { hasNoTokenError, unauthorizedError } from "./errors";

const createFakeServer = function () {
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
      this.timing = 800;

      this.post("/signin", (_, req) => {
        const body = JSON.parse(req.requestBody);
        if (body.internalCode !== "12345678" || body.password !== "12345678") {
          return unauthorizedError;
        }
        return new Response(200, undefined, auth);
      });

      this.get("/refresh", (_, __) => {
        return new Response(200, undefined, refreshToken);
      });

      this.get("/items", (schema, req) => {
        const { Authorization } = req.requestHeaders;
        if (!Authorization) return hasNoTokenError;
        return schema.all("item");
      });

      this.get("/items/:id", (schema, req) => {
        const { Authorization } = req.requestHeaders;
        if (!Authorization) return hasNoTokenError;

        const params = req.params;
        const item = schema.findBy("item", { id: params.id });
        return item;
      });

      this.get("/items/requests", (schema, req) => {
        const { Authorization } = req.requestHeaders;
        if (!Authorization) return hasNoTokenError;
        return schema.all("itemRequest");
      });

      this.get("/items/requests/:id", (schema, req) => {
        const { Authorization } = req.requestHeaders;
        if (!Authorization) return hasNoTokenError;

        const params = req.params;
        const itemRequest = schema.findBy("itemRequest", { id: params.id });
        return itemRequest;
      });
    },
  });
};

export const initFakeServer = (): void => {
  if (import.meta.env.DEV) createFakeServer();
};
