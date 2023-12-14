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
    this.taskItems = [];
  }

  add(task) {
    this.taskItems.push(task);
  }

  remove(index) {
    if (index < this.taskItems.length) this.taskItems.splice(index, 1);
  }

  update(index, task) {
    if (index < this.taskItems.length) {
      this.taskItems[index] = task;
    }
  }

  getAll() {
    return this.taskItems;
  }

  get(index) {
    if (index < this.taskItems.length) return this.taskItems[index];
    return null;
  }

  clear() {
    this.taskItems.length = 0;
  }
}

module.exports = Todo;
