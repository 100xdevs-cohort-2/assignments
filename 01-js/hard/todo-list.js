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
    this.listOfToDos = [];
  }

  add(todo) {
    this.listOfToDos.push(todo);
  }
  remove(indexOfToDo) {
    this.listOfToDos.splice(indexOfToDo, 1);
  }
  update(index, string) {
    if (index > this.listOfToDos.length - 1) return;
    this.listOfToDos[index] = string;
  }
  getAll() {
    return this.listOfToDos;
  }
  get(index) {
    if (index > this.listOfToDos.length - 1) {
      return null;
    } else {
      return this.listOfToDos[index];
    }
  }
  clear() {
    this.listOfToDos = [];
  }
}

module.exports = Todo;
