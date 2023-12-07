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

  update(idx, todo) {
    if(!isIndexValid(idx, this.todos.length)) return;
    this.todos[idx] = todo;
  }

  get(idx) {
    if(!isIndexValid(idx, this.todos.length)) return null;
    return this.todos[idx];
  }

  getAll() { return this.todos; }

  remove(idx) {
    if(!isIndexValid(idx, this.todos.length)) return;
    this.todos.splice(idx, 1);
  }

  clear() {
    this.todos = [];
  }
}

function isIndexValid(idx, len) {
  return !(idx < 0 || idx >= len);
}

module.exports = Todo;
