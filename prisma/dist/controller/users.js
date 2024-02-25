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
exports.insertUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUser(req, Res) {
    return __awaiter(this, void 0, void 0, function* () {
        const { email, password, firstName, lastName } = req.body;
        const user = yield prisma.user.create({
            data: {
                email,
                password,
                firstName,
                lastName
            },
            select: {
                id: true,
                password: true
            }
        });
        Res.status(201).json(user);
        console.log(user);
    });
}
exports.insertUser = insertUser;
function updateUser(username, { firstName, lastName }) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.update({
            where: { email: username },
            data: {
                firstName,
                lastName
            }
        });
        console.log(res);
    });
}
updateUser("vibhaw@gmail.com", { firstName: "Vibhawraj", lastName: "kr" });
function getUser(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findFirst({
            where: {
                email: username
            }
        });
        console.log(res);
    });
}
getUser("vibhaw@gmail.com");
