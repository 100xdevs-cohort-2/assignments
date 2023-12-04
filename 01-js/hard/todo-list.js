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

  add = (todo) => {
    this.todos.push(todo);
  };

  remove = (indexOfTodo) => {
    this.todos.splice(indexOfTodo, 1);
  };

  update = (index, updatedTodo) => {
    if (index < this.todos.length) this.todos.splice(index, 1, updatedTodo);
  };

  getAll = () => this.todos;

  get = (indexOfTodo) =>
    this.todos[indexOfTodo] ? this.todos[indexOfTodo] : null;

  clear = () => {
    this.todos = [];
  };
}

module.exports = Todo;

// let todos = new Todo();

// todos.add("Task1");
// todos.add("Task2");
// todos.update(3, "Update Task");
// console.log(todos.getAll());
// console.log(todos.get(3));
