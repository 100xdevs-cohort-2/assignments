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

  add(todoData) {
    this.todos.push(todoData);
  }

  remove(indexOfTodo) {
    if(indexOfTodo >= this.todos.length) {
      return
    }

    this.todos.splice(indexOfTodo, 1);
  }

  update(indexOfTodo, newTodoData) {
    if(indexOfTodo >= this.todos.length) {
      return
    }

    this.todos[indexOfTodo] = newTodoData;
  }

  getAll() {
    return this.todos;
  }

  get(indexOfTodo) {
    if(indexOfTodo >= this.todos.length) {
      return null
    }

    return this.todos[indexOfTodo];
  }

  clear() {
    this.todos.splice(0, this.todos.length);
  }
}

module.exports = Todo;
