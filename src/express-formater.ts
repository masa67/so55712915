
import core from 'express-serve-static-core';
import express from 'express';

declare module 'express-serve-static-core' {
  interface Response {
    respondWith: (p1: any) => Response,
    test: () => void
  }
}

express.response.respondWith = function(data: string) {
  return this.json({
    error: null,
    data: data
  });
};

express.response.test = function() {
  console.log('this is working...');
}

export default {}