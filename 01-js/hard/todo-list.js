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
    this.todos.splice(index, 1);
  }
  update(index, updatedTodo) {
    if (index < 0 || index > this.todos.length - 1 || isNaN(index)) {
      return null;
    }
    this.todos[index] = updatedTodo;
  }
  getAll() {
    if (this.todos.length === 0) return [];
    return this.todos.toString().split(',');
  }
  get(indexOfTodo) {
    if (
      indexOfTodo < 0 ||
      indexOfTodo > this.todos.length - 1 ||
      isNaN(indexOfTodo)
    )
      return null;
    if (this.todos.length === 0) return [];
    return this.todos[indexOfTodo];
  }
  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
