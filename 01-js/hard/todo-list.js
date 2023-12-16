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
  remove(index) {
    this.todoList.splice(index, 1);
  }
  update(index, todo) {
    if (index >= 0 && index < this.todoList.length) {
      this.todoList[index] = todo;
    }
  }
  getAll() {
    return this.todoList;
  }
  get(index) {
    if (index >= 0 && index < this.todoList.length) {
      return this.todoList[index];
    }
    return null;
  }
  clear() {
    this.todoList = [];
  }
}

module.exports = Todo;
