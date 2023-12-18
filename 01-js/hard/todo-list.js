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
  todos = [];
  add(todo) {
    this.todos.push(todo);
  }
  remove(idx) {
    if (idx > this.todos.length) {
      return;
    }
    this.todos.splice(idx, 1);
  }
  update(idx, todo) {
    if (idx >= this.todos.length) {
      return;
    }
    this.todos.splice(idx, 1); // delete item at idx
    this.todos.splice(idx, 0, todo); // insert new item at idx
  }
  getAll() {
    return this.todos;
  }
  get(idx) {
    if (idx < 0 || idx >= this.todos.length) {
      return null;
    }
    return this.todos[idx];
  }
  clear() {
    this.todos.length = 0;
  }
}

module.exports = Todo;
