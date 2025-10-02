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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var __1 = require("../..");
var user_1 = require("../user");
var setup_1 = require("../setup");
var todo_1 = require("../todo");
beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, __1.client.connect()];
            case 1:
                _a.sent();
                return [4 /*yield*/, (0, setup_1.dropTables)()];
            case 2:
                _a.sent();
                return [4 /*yield*/, (0, setup_1.createTables)()];
            case 3:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
afterAll(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, __1.client.end()];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
describe('User Database Operations', function () {
    test('createUser inserts a new user into the database', function () { return __awaiter(void 0, void 0, void 0, function () {
        var username, password, name, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    username = 'testuser';
                    password = 'testpass';
                    name = 'Test User';
                    return [4 /*yield*/, (0, user_1.createUser)(username, password, name)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, __1.client.query('SELECT * FROM users WHERE username = $1', [username])];
                case 2:
                    user = _a.sent();
                    expect(user.rows[0]).toHaveProperty('username', username);
                    expect(user.rows[0]).toHaveProperty('name', name);
                    expect(user.rows[0].password).toBe(password);
                    return [2 /*return*/];
            }
        });
    }); });
    test('getUser retrieves a user by ID', function () { return __awaiter(void 0, void 0, void 0, function () {
        var userId, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userId = 1;
                    return [4 /*yield*/, (0, user_1.getUser)(userId)];
                case 1:
                    user = _a.sent();
                    expect(user).toHaveProperty('id', userId);
                    expect(user).toHaveProperty('username');
                    expect(user).toHaveProperty('name');
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('Todo Operations', function () {
    var userId;
    beforeAll(function () { return __awaiter(void 0, void 0, void 0, function () {
        var res;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, __1.client.query('SELECT id FROM users WHERE username = $1', ['testuser'])];
                case 1:
                    res = _a.sent();
                    userId = res.rows[0].id;
                    return [2 /*return*/];
            }
        });
    }); });
    test('createTodo inserts a new todo for a user', function () { return __awaiter(void 0, void 0, void 0, function () {
        var title, description, todo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    title = 'Test Todo';
                    description = 'Test Description';
                    return [4 /*yield*/, (0, todo_1.createTodo)(userId, title, description)];
                case 1:
                    todo = _a.sent();
                    expect(todo).toHaveProperty('id');
                    expect(todo.title).toEqual(title);
                    expect(todo.description).toEqual(description);
                    expect(todo.done).toEqual(false);
                    return [2 /*return*/];
            }
        });
    }); });
    test('updateTodo marks a todo as done', function () { return __awaiter(void 0, void 0, void 0, function () {
        var todoId, updatedTodo;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, todo_1.createTodo)(userId, 'Update Test', 'To be updated')];
                case 1:
                    todoId = (_a.sent()).id;
                    return [4 /*yield*/, (0, todo_1.updateTodo)(todoId)];
                case 2:
                    updatedTodo = _a.sent();
                    expect(updatedTodo.done).toEqual(true);
                    return [2 /*return*/];
            }
        });
    }); });
    test('getTodos retrieves all todos for a user', function () { return __awaiter(void 0, void 0, void 0, function () {
        var todos;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, (0, todo_1.getTodos)(userId)];
                case 1:
                    todos = _a.sent();
                    expect(todos.length).toBeGreaterThan(0);
                    todos.forEach(function (todo) {
                        expect(todo).toHaveProperty('id');
                        expect(todo.user_id).toEqual(userId);
                    });
                    return [2 /*return*/];
            }
        });
    }); });
});
