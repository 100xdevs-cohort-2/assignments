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
  remove(idxOfTodo) {
    if (idxOfTodo <= this.todos.length - 1) {
      const tempTodos = this.todos;
      this.todos = tempTodos.filter((val, idx) => idx != idxOfTodo);
    }
  }
  update(index, updatedTodo) {
    if (index <= this.todos.length - 1) {
      this.todos[index] = updatedTodo;
    }
  }
  getAll() {
    return this.todos;
  }
  get(idxOfTodo) {
    if (idxOfTodo <= this.todos.length - 1) {
      return this.todos[idxOfTodo];
    }
    return null;
  }
  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
