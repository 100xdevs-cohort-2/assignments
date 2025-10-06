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
  remove(index) {
    if(index < 0 || index > this.todos.length) {
      throw new Error("Invalid Index");
    }
    this.todos.splice(index);
  }
  update(index, updatedTdodo) {
    if(index < 0 || index > this.todos.length) {
      throw new Error("Invalid Index");
    }
    this.todos[index] = updatedTdodo;
  }
  get(index) {
    if(index < 0 || index > this.todos.length) {
      throw new Error("Invalid Index");
    }
    return this.todos[index];
  }

  getAll() {
    return [...this.todos];
  }
  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
