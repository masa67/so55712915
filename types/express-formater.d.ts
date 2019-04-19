import express  from 'express';
import { respondWith } from "../src/express-formater-mod";

declare global {
    namespace Express {
        interface Response {
            respondWith: any;
        }
    }
}
