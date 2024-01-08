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
    if (indexOfTodo >= this.todoList.length || indexOfTodo < 0) return null;
    const element = this.todoList[indexOfTodo];
    this.todoList.splice(indexOfTodo, 1);
    return element;
  }

  update(index, updatedTodo) {
    if (index < 0 || index >= this.todoList.length) return false;
    this.todoList[index] = updatedTodo;
    return true;
  }

  getAll() {
    return this.todoList;
  }

  get(indexOfTodo) {
    if (indexOfTodo >= this.todoList.length || indexOfTodo < 0) return null;
    return this.todoList[indexOfTodo];
  }

  clear() {
    this.todoList = [];
  }
}

module.exports = Todo;
