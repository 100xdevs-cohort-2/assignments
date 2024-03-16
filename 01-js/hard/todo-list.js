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
    this.todo = [];
  }
  add(todo) {
    this.todo.push(todo);
  }
  remove(i) {
    this.todo.splice(i, 1);
  }
  update(i, val) {
    return i < this.todo.length ? (this.todo[i] = val) : null;
  }
  getAll() {
    return this.todo;
  }
  get(i) {
    return i < this.todo.length ? this.todo[i] : null;
  }
  clear() {
    this.todo = [];
  }
}

module.exports = Todo;
