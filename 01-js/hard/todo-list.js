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
    this.todos = [];
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(index) {
    if (index >= 0 && index < this.todos.length) {
      this.todos.splice(index, 1);
    } else {
      console.log("Index out of range. Cannot remove todo.");
    }
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    } else {
      console.log("Index out of range. Cannot update todo.");
    }
  }

  getAll() {
    return this.todos;
  }

  get(index) {
    if (index >= 0 && index < this.todos.length) {
      return this.todos[index];
    } else {
      return null; // Return null when index is out of range
    }
  }

  clear() {
    this.todos = [];
  }
}



module.exports = Todo;
