"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const users_1 = __importDefault(require("./routes/users"));
const app = (0, express_1.default)();
const PORT = 5000;
app.use(express_1.default.json());
app.use('/user', users_1.default);
app.listen(PORT, () => {
    console.log("server is running on PORT:", PORT);
});
