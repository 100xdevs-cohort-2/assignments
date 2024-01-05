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
  todoList;
  constructor() {
    this.todoList = [];
  }

  add = (task) => this.todoList.push(task);
  remove = (index) =>
    index > this.todoList.length - 1 ? null : this.todoList.splice(index, 1);
  update = (index, task) =>
    index > this.todoList.length - 1 ? null : (this.todoList[index] = task);
  getAll = () => this.todoList;
  get = (index) =>
    index > this.todoList.length - 1 ? null : this.todoList[index];
  clear = () => (this.todoList = []);
}

module.exports = Todo;
