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
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      for (let i = indexOfTodo; i < this.todos.length; i++) {
        this.todos[i] = this.todos[i + 1];
      }
      this.todos.length = this.todos.length - 1;
    }
    // alternate :-
    // if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
    //   this.todos.splice(indexOfTodo, 1);
    // }
  }
  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    }
  }
  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    }
    return null;
  }
  getAll() {
    return this.todos;
  }
  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
