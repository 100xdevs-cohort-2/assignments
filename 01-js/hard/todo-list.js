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
    this.todoList = [];
  }
  add(todo) {
    this.todoList.push(todo);
  }
  remove(indexOfTodo) {
    if(indexOfTodo > -1 && indexOfTodo < this.todoList.length) {
      this.todoList.splice(indexOfTodo, 1);
    }
    return;
  }
  update(index, updatedTodo) {
    if(index > -1 && index < this.todoList.length) {
      this.todoList[index] = updatedTodo;
    }
    return;
  }
  getAll() {
    return this.todoList;
  }
  get(indexOfTodo) {
    if(indexOfTodo > -1 && indexOfTodo < this.todoList.length){
      return this.todoList[indexOfTodo];
    }
    return null;
  }
  clear() {
    this.todoList = [];
  }
}

module.exports = Todo;
