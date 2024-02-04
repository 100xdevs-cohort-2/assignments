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
  remove(todoindex) {
    if (todoindex >= 0 && todoindex < this.todos.length)
      this.todos = this.todos.filter((_, index) => index != todoindex);
  }
  update(todoindex, updateTodo) {
    if (todoindex >= 0 && todoindex < this.todos.length)
      this.todos[todoindex] = updateTodo;
  }
  getAll() {
    return this.todos;
  }
  get(todoindex) {
    if (todoindex >= 0 && todoindex < this.todos.length)
      return this.todos[todoindex];
    else return null;
  }
  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
