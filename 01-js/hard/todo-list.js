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
    this.list = [];
  }
  add(str) {
    this.list.push(str);
  }
  remove(idx) {
    if (idx >= 0 && idx < this.list.length) {
      this.list.splice(idx, 1);
    } else {
      console.error("Invalid index for removal");
    }
  }
  update(idx, updated) {
    if (idx >= 0 && idx < this.list.length) {
      this.list[idx] = updated;
    }
     else {
      console.error("Invalid index for update");
    }
  }
  getAll() {
    return this.list;
  }
  get(idx) {
    if (idx >= 0 && idx < this.list.length) {
      return this.list[idx];
    } else {
      console.error("Invalid index for get");
      return null;
    }
  }
  clear() {
    this.list = [];
  }
}

module.exports = Todo;
