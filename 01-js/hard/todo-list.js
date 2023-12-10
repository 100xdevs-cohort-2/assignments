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
    this.toDoList = [];
  }

  add(task) {
    this.toDoList.push(task);
  }

  remove(indexOfTodo) {
    this.toDoList.splice(indexOfTodo, 1);
  }

  update(index, updatedTodo) {
    if (index < 0 || index > this.toDoList.length - 1 || isNaN(index)) {
      //throw new Error("Invalid Index!");
      return null;
    }
    this.toDoList[index] = updatedTodo;
  }

  getAll() {
    if (this.toDoList.length === 0) return [];
    return this.toDoList.toString().split(",");
  }

  get(indexOfTodo) {
    if (
      indexOfTodo < 0 ||
      indexOfTodo > this.toDoList.length - 1 ||
      isNaN(indexOfTodo)
    )
      return null;
    if (this.toDoList.length === 0) return [];
    return this.toDoList[indexOfTodo];
  }

  clear() {
    this.toDoList = [];
  }
}

module.exports = Todo;
