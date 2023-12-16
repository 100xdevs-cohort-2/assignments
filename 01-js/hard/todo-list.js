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

  add(todo) {
    this.todos.push(todo);
  }

  remove(indexOfTodo) {
    this.todos.splice(indexOfTodo, 1);
  }

  update(indexOfTodo, updatedTodo) {
    if (!this.todos.at(indexOfTodo)) return;
    this.todos.splice(indexOfTodo, 1, updatedTodo);
  }

  get(indexOfTodo) {
    return this.todos.at(indexOfTodo) || null;
  }

  getAll() {
    return this.todos;
  }

  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
