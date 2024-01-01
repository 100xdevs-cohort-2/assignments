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

  isIndexInRange(index) {
    if (index < 0 || index >= this.todos.length) {
      return true;
    }
    return false;
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(index) {
    if (!this.isIndexInRange(index)) {
      this.todos.splice(index, 1);
    }
  }

  update(index, todo) {
    if (!this.isIndexInRange(index)) {
      this.todos[index] = todo;
    }
  }

  getAll() {
    return this.todos;
  }

  get(index) {
    if (!this.isIndexInRange(index)) {
      return this.todos[index];
    }
    return null;
  }

  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
