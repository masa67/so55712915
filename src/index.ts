import express from "./express-formater";

const app = express();
const port = 8080;

express.response.test();

app.get("/", (req, res) => res.respondWith({ ok: true }) );

app.listen(port, () =>
  console.log(`Typescript app listening on port ${port}!`)
);
