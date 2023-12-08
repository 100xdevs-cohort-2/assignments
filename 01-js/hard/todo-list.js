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
    this.todo = [];
  }
  add(todo) {
    this.todo.push(todo);
  }
  remove(idx) {
    this.todo = this.todo.filter((el, i) => i !== idx);
  }
  update(idx, val) {
    this.todo = this.todo.map((el, i) => {
      if (i === idx) {
        return val;
      } else {
        return el;
      }
    });
  }
  getAll() {
    return this.todo;
  }
  get(idx) {
    if (idx < this.todo.length) return this.todo[idx];
    else return null;
  }
  clear() {
    this.todo = [];
  }
}

module.exports = Todo;
