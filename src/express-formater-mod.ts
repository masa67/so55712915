
import { Response } from 'express';

export function respondWith(resp: Response, data: any): Response {
  return resp.json({
    error: null,
    data: data
  });
};
