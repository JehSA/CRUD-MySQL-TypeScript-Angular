"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const livrosController_1 = __importDefault(require("../controllers/livrosController"));
class LivrosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', livrosController_1.default.list);
        this.router.get('/:id', livrosController_1.default.getOne);
        this.router.post('/', livrosController_1.default.create);
        this.router.put('/:id', livrosController_1.default.update);
        this.router.delete('/:id', livrosController_1.default.delete);
    }
}
const livrosRoutes = new LivrosRoutes();
exports.default = livrosRoutes.router;
