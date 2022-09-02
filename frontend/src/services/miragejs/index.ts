import { createServer, Model, Response } from "miragejs";
import { auth } from "./auth";

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
      this.timing = 800;

      this.post("/signin", (schema, req) => {
        const body = JSON.parse(req.requestBody);

        if (body.email !== "root@mail.com" || body.password !== "12345678") {
          return new Response(401, undefined, {
            error: true,
            message: "E-mail or password invalid",
          });
        }

        return new Response(200, undefined, auth);
      });

      this.get("/items", (schema, req) => schema.all("item"));
      this.get("/items/:id");

      this.get("/items/requests", (schema, req) => schema.all("itemRequest"));
      this.get("/items/requests/:id", (schema, req) => {
        return schema.find("itemRequest", req.params.id);
      });
    },
  });
};
