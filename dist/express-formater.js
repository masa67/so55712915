"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
express_1.default.response.respondWith = function (data) {
    return this.json({
        error: null,
        data: data
    });
};
express_1.default.response.test = function () {
    console.log('this is working...');
};
exports.default = express_1.default;
