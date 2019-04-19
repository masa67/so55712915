import * as Express from "express";

Express.response.respondWith = function(data: any) {
  return this.json({
    error: null,
    data: data
  });
};
