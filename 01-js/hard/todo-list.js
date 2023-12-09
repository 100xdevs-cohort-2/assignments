/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
    constructor() {
        this.todos = [];
    }

    // adds todo to list of todos
    add(todo) {
      this.todos.push(todo);
    }

    // remove todo from list of todos
    remove(indexOfTodo) {
        if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
            this.todos.splice(indexOfTodo, 1);
        }
    }

    // update todo at given index
    update(index, updatedTodo) {
        if (index >= 0 && index < this.todos.length) {
            this.todos[index] = updatedTodo;
        }
    }

    // returns all todos
    getAll() {
        return this.todos;
    }

    // returns todo at given index
    get(indexOfTodo) {
        if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
            return this.todos[indexOfTodo];
        }
        return null; // invalid index
    }

    // deletes all todos
    clear() {
        this.todos = [];
    }
}

module.exports = Todo;
