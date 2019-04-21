
import core from 'express-serve-static-core';
import express from 'express';

declare module 'express-serve-static-core' {
  export interface Response {
    respondWith: (p1: any) => Response
  }
}

express.response.respondWith = function(data: string) {
  return this.json({
    error: null,
    data: data
  });
};
