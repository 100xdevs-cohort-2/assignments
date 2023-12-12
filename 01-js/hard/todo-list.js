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
    this.todos = []
  }

  add(todo) {
    this.todos.push(todo);
  }

  remove(idx) {
    if (idx >= this.todos.length || idx < 0) {
      throw new Error('Index out of bounds!');
    }
    else {
      if (idx === this.todos.length - 1) {
        this.todos.pop();
      }
      else {
        for (let i = idx; i < this.todos.length; i++) {
          this.todos[i] = this.todos[i + 1]
        }
        this.todos.pop();
      }
    }
  }

  update(idx, updatedTodo) {
    if (idx >= this.todos.length || idx < 0) {
      throw new Error('Index out of bounds!');
    }
    else {
      this.todos[idx] = updatedTodo;
    }
  }

  getAll() {
    return this.todos;
  }

  get(idx) {
    if (idx >= this.todos.length || idx < 0) {
      throw new Error('Index out of bounds!');
    }
    else {
      return this.todos[idx]
    }
  }

  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
