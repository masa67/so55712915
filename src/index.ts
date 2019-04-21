import express from 'express';
import './express-formater';

const app = express();
const port = 8080;

app.get("/", (req, res) => res.respondWith({ ok: true }) );

app.listen(port, () =>
  console.log(`Typescript app listening on port ${port}!`)
);
