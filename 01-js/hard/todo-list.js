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
    this.map = new Map();
    this.index = 0;
  }
  add(x) {
    this.map.set(this.index, x);
    // console.log(this.map.values());
    this.index += 1;

  }
  remove(x) {
    if (this.map.has(x)) {
      this.map.delete(x);
      let temp = this.map.values();
      this.clear();
      for (let val of temp) {
        this.add(val);
      }
    }

  }
  update(idx, x) {
    if (this.map.has(idx)) {
      this.map.set(idx, x);
    }
  }
  getAll() {
    return Array.from(this.map.values());
  }
  get(x) {
    if (this.map.has(x)) {
      return this.map.get(x);
    }
    else
      return null;
  }
  clear() {
    this.map = new Map();
    this.index = 0;
  }
}

module.exports = Todo;
