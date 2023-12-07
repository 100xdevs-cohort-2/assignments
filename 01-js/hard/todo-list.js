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

  remove(index) {
    this.todo.splice(index, 1);
  }

  update(index, updatedTodo) {
    if (index <= this.todo.length - 1) {
      this.todo[index] = updatedTodo;
    }
  }
  getAll() {
    return this.todo;
  }
  get(index) {
    if(index>=this.todo.length) return null;
    return this.todo[index];
  }

  clear() {
    this.todo = [];
  }

}

module.exports = Todo;
