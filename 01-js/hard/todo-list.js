class Todo {
    constructor() {
        this.todos = [];
    }

    add(todo) {
        this.todos.push(todo);
    }

    remove(indexOfTodo) {
        if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
            this.todos.splice(indexOfTodo, 1);
        } else {
            throw new Error("Invalid index");
        }
    }

    update(index, updatedTodo) {
        if (index >= 0 && index < this.todos.length) {
            this.todos[index] = updatedTodo;
        } else {
            throw new Error("Invalid index");
        }
    }

    getAll() {
        return this.todos;
    }

    get(indexOfTodo) {
        if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
            return this.todos[indexOfTodo];
        } else {
            throw new Error("Invalid index");
        }
    }

    clear() {
        this.todos = [];
    }
}

// Example usage:
const todoList = new Todo();

todoList.add("Buy groceries");
todoList.add("Read a book");
console.log(todoList.getAll()); // Output: ["Buy groceries", "Read a book"]

todoList.update(0, "Buy fruits");
console.log(todoList.get(0)); // Output: "Buy fruits"

todoList.remove(1);
console.log(todoList.getAll()); // Output: ["Buy fruits"]

todoList.clear();
console.log(todoList.getAll()); // Output: []
