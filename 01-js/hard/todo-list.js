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
    this.todoList = [];
  }
  add(todo) {
    this.todoList.push(todo);
  }
  remove(indexOfTodo) {
    this.todoList = this.todoList.filter((_, index) => index !== indexOfTodo);
    return this.todoList;
  }

  getAll() {
    return this.todoList;
  }

  get(indexOfTodo) {
    return this.todoList.length > indexOfTodo
      ? this.todoList[indexOfTodo]
      : null;
  }

  clear() {
    this.todoList = [];
  }

  update(indexOfTodo, updatedTodo) {
    if (indexOfTodo >= this.todoList.length) return "Invalid Task";
    this.todoList[indexOfTodo] = updatedTodo;
  }
}

module.exports = Todo;
