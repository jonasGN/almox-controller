import type { ItemResponse } from "@Types/responses";
import { createServer, Model, Response } from "miragejs";

import { seed } from "./seeds";
import { errors } from "./errors";

// TODO: review this service
const createFakeServer = function () {
  createServer({
    models: {
      item: Model.extend<Partial<ItemResponse>>({}),
      itemRequest: Model,
      category: Model,
    },

    seeds(server) {
      server.db.loadData({
        items: seed.items.content,
        itemRequests: seed.itemsRequests.content,
        categories: seed.categories.content,
      });
    },

    routes() {
      this.namespace = "api";
      this.timing = 800;

      // AUTH
      this.post("/signin", (_, req) => {
        const body = JSON.parse(req.requestBody);
        if (body.internalCode !== "12345678" || body.password !== "12345678") {
          return errors.unauthorizedError;
        }
        return new Response(200, undefined, seed.auth);
      });

      this.get("/refresh", (_, __) => {
        return new Response(200, undefined, seed.refreshToken);
      });

      this.get("/signout", (schema, __) => {
        schema.db.dump();
        return new Response(204);
      });

      // ITEMS
      this.get("/items", (schema, req) => {
        const { Authorization } = req.requestHeaders;
        if (!Authorization) return errors.hasNoTokenError;
        return schema.all("item");
      });

      this.post("/items", (schema, req) => {
        const id = schema.all("item").length + 1;

        const item = seed.items.create(id, req.requestBody);
        schema.create("item", item);

        return item;
      });

      this.get("/items/:id", (schema, req) => {
        const { Authorization } = req.requestHeaders;
        if (!Authorization) return errors.hasNoTokenError;

        const params = req.params;
        const item = schema.findBy("item", { id: params.id });
        return item;
      });

      // ITEMS REQUESTS
      this.get("/items/requests", (schema, req) => {
        const { Authorization } = req.requestHeaders;
        if (!Authorization) return errors.hasNoTokenError;
        return schema.all("itemRequest");
      });

      this.get("/items/requests/:id", (schema, req) => {
        const { Authorization } = req.requestHeaders;
        if (!Authorization) return errors.hasNoTokenError;

        const params = req.params;
        const itemRequest = schema.findBy("itemRequest", { id: params.id });
        return itemRequest;
      });

      // CATEGORIES
      this.get("/categories", (schema, req) => {
        const { Authorization } = req.requestHeaders;
        if (!Authorization) return errors.hasNoTokenError;
        return schema.all("categories");
      });
    },
  });
};

export const initFakeServer = (): void => {
  if (import.meta.env.DEV) createFakeServer();
};
