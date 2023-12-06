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
  toDo;
  constructor() {
    this.toDo = [];
  }

  add(task) {
    this.toDo.push(task);
  }

  update(index, updatedToDo) {
    if (index >= this.toDo.length) {
      return this.toDo;
    }
    this.toDo[index] = updatedToDo;
  }

  remove(indexOfTask) {
    if (indexOfTask >= this.toDo.length) {
      return null;
    }
    this.toDo.splice(indexOfTask, 1);
  }

  get(indexOfTask) {
    if (indexOfTask >= this.toDo.length) {
      return null;
    }
    return this.toDo[indexOfTask];
  }

  getAll() {
    return this.toDo;
  }

  clear() {
    this.toDo = [];
  }
}

module.exports = Todo;
