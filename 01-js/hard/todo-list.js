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
    this.Todo = [];
  }

  add(todo) {
    this.Todo.push(todo)
  }

  remove(index) {
   if(index >= 0 && index < this.Todo.length) {
    this.Todo.splice(index, 1);
   } else {
    return null;
   }
  }

  update(indexOfTodo, updatedTodo) {
    if(indexOfTodo >= 0 && indexOfTodo < this.Todo.length) {
      this.Todo[indexOfTodo] = updatedTodo;
    }
  }

  getAll() {
    return this.Todo;
  }

  get(index) {
    if(index >= 0 && index < this.Todo.length) {
      return this.Todo[index];
    } else {
      return null;
    }
  }
  clear() {
    this.Todo = [];
  }
}

module.exports = Todo;
