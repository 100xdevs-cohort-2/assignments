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
    // Initialize an empty array to store todos
    this.todos = [];
  }

  // Method to add a todo to the list
  add(todo) {
    this.todos.push(todo);
  }

  // Method to remove a todo at a given index
  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      this.todos.splice(indexOfTodo, 1);
    }
    // else {
    //   throw new Error("Invalid index");
    // }
  }

  // Method to update a todo at a given index
  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
    }
    // else {
    //   throw new Error("Invalid index");
    // }
  }

  // Method to get all todos
  getAll() {
    return this.todos;
  }

  // Method to get a todo at a given index
  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.todos.length) {
      return this.todos[indexOfTodo];
    } else {
      return null;
    }
  }

  // Method to clear all todos
  clear() {
    this.todos = [];
  }
}

// const todoList = new Todo();

module.exports = Todo;
