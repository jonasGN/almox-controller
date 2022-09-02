import { createServer, Model, Response } from "miragejs";
import { auth } from "./auth";

// seeds
import { items } from "./items";
import { itemsRequests } from "./itemsRequests";

const unauthorizedError = new Response(401, undefined, {
  token: null,
  refreshToken: null,
  error: {
    statusCode: 401,
    message: "Invalid credentials",
  },
});

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
      this.timing = 800;

      this.post("/signin", (_, req) => {
        const body = JSON.parse(req.requestBody);

        if (body.internalCode !== "12345678" || body.password !== "12345678") {
          return unauthorizedError;
        }

        return new Response(200, undefined, auth);
      });

      this.get("/items", (schema, _) => schema.all("item"));
      this.get("/items/:id");

      this.get("/items/requests", (schema, _) => schema.all("itemRequest"));
      this.get("/items/requests/:id", (schema, req) => {
        return schema.find("itemRequest", req.params.id);
      });
    },
  });
};
