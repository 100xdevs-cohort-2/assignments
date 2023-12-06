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
    this.todolit = [];
  }
  add(str) {
    this.todolit.push(str);
  }
  getAll() {
    return this.todolit;
  }
  remove(indexOfTodo) {
    if (indexOfTodo >= this.todolit.length) return null;
    else {
      this.todolit.splice(indexOfTodo, 1);
    }
  }
  update(index, value) {
    if (index >= this.todolit.length || index < 0) return null;
    else {
      this.todolit[index] = value;
    }
  }
  get(indexOfTodo) {
    if (indexOfTodo >= this.todolit.length || indexOfTodo < 0) return null;
    else {
      return this.todolit[indexOfTodo];
    }
  }
  clear() {
    this.todolit = [];
  }
}
module.exports = Todo;
