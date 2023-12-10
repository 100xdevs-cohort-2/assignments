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
  constructor(todoList) {
    this.todoList = [];
  }
  add(todo) {
    this.todoList.push(todo);
  }
  remove(indexOfTodo) {
    this.todoList = this.todoList.filter((todo, i) => i !== indexOfTodo);
  }

  update(index, updatedTodo) {
    if (index < this.todoList.length) this.todoList[index] = updatedTodo;
  }
  getAll() {
    return this.todoList;
  }
  get(indexOfTodo) {
    return indexOfTodo < this.todoList.length
      ? this.todoList[indexOfTodo]
      : null;
  }
  clear() {
    this.todoList = [];
  }
}

module.exports = Todo;
