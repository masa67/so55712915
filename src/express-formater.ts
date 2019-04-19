import * as Express from "express";

declare module "express" {
  interface Response {
    respondWith(this: Response, data: any): Response;
  }
}

Express.Response.respondWith = function(data: any) {
  return this.json({
    error: null,
    data: data
  });
};
