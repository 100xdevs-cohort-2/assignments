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
    return this.todos;
  }

  remove(index) {
    this.todos.splice(index, 1);
    return this.todos;
  }

  update(index, updatedTodo) {
    if (index >= 0 && index < this.todos.length) {
      this.todos[index] = updatedTodo;
      return this.todos;
    }
  }

  getAll() {
    return this.todos.map((item) => {
      return item;
    });
  }

  get(index) {
    if (index >= 0 && index < this.todos.length) {
      return this.todos[index];
    } else {
      return null; // Add this line to return null for out-of-bounds indices
    }
  }

  clear() {
    this.todos = [];
    return this.todos;
  }
}

module.exports = Todo;
