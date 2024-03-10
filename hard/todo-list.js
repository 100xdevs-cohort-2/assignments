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
  constructor(todos) {
    this.todos = [];
  }
  add(data) {
    this.todos.push(data);
  }
  remove(idx) {
    this.todos.splice(idx, 1);
  }
  update(idx, data) {
    if (idx < this.todos.length) {
      this.todos[idx] = data;
    }
  }
  getAll() {
    return this.todos;
  }
  get(idx) {
    if (idx < this.todos.length) {
      return this.todos[idx];
    } else {
      return null;
    }
  }
  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
