"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function createTodo(userId, title, description) {
    return __awaiter(this, void 0, void 0, function* () {
        const todo = yield prisma.todo.create({
            data: {
                title,
                description,
                userId
            }
        });
        console.log(todo);
    });
}
createTodo(1, "problem solving", "maths");
function getTodos(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const todo = yield prisma.todo.findMany({
            where: {
                userId: userId
            }
        });
        console.log(todo);
    });
}
getTodos(1);
function getUserTodos(userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const todos = yield prisma.todo.findMany({
            where: {
                userId: userId
            },
            select: {
                title: true,
                description: true
            }
        });
        console.log(todos);
    });
}
getUserTodos(1);
