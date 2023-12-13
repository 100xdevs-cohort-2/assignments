/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - : returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.taskList = [];
  }
  add(todo) {
    this.taskList.push(todo);
  }
  remove(idx) {
    this.taskList.splice(idx, 1);
  }
  update(idx, updatedTodo) {
    if (updatedTodo === "Invalid Task" || idx >= this.taskList.length) {
      return;
    }
    this.taskList[idx] = updatedTodo;
  }
  getAll() {
    return this.taskList;
  }
  get(idx) {
    if (idx >= this.taskList.length) return null;
    return this.taskList[idx];
  }
  clear() {
    this.taskList = [];
  }
}

module.exports = Todo;
