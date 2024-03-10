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
    this.todoArr = [];
  }

  add(todo) {
    this.todoArr.push(todo);
  }

  remove(index) {
    if (this.todoArr.length < index) return "out of bound error";
    this.todoArr.splice(index, 1);
  }

  update(index, todo) {
    if (index >= this.todoArr.length) return "Invalid Task";
    this.todoArr[index] = todo;
  }

  getAll() {
    return this.todoArr;
  }

  get(index) {
    return this.todoArr.length > index ? this.todoArr[index] : null;
  }

  clear() {
    this.todoArr = [];
  }
}

module.exports = Todo;
