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
    const todos = this.todos;
    todos.splice(indexOfTodo, 1);
    this.todos = todos;
  }
  update(indexToUpdate, updatedTodo) {
    if (!this.todos[indexToUpdate]) return;
    this.todos[indexToUpdate] = updatedTodo;
  }
  getAll() {
    return this.todos;
  }
  get(indexOfTodo) {
    if (!this.todos[indexOfTodo]) return null;
    return this.todos[indexOfTodo];
  }
  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
