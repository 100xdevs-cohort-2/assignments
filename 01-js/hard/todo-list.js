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

  add(todo) {
    this.toDoList.push(todo);
    return this.toDoList;
  }

  remove(todoIdx) {
    this.toDoList = this.toDoList.toSpliced(todoIdx, 1);
    return this.toDoList;
  }

  update(index, updatedTodo) {
    if (index < this.toDoList.length) {
      this.toDoList[index] = updatedTodo;
    }
    return this.toDoList;
  }

  getAll() {
    return this.toDoList;
  }

  get(indexOfTodo) {
    if (indexOfTodo < this.toDoList.length) {
      return this.toDoList[indexOfTodo];
    } else {
      return null;
    }
  }

  clear() {
    this.toDoList = [];
    return this.toDoList;
  }
}

module.exports = Todo;
