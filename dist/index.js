"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require("./express-formater");
var app = express_1.default();
var port = 8080;
app.get("/", function (req, res) { return res.respondWith({ pass: false, ok: true }); });
app.listen(port, function () {
    return console.log("Typescript app listening on port " + port + "!");
});
