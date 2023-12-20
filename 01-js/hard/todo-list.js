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
  constructor(todo_list=[]) {
    this.todo_list = todo_list;
  }

  add(task) {
    this.todo_list.push(task);
  }

  remove(index) {
    if (index >= 0 && index < this.todo_list.length) {
      return this.todo_list.splice(index, 1)[0];
    }
  }

  update(index, updated_task) {
    if (index >= 0 && index < this.todo_list.length && updated_task !== undefined) {
      this.todo_list[index] = updated_task;
    }
  }

  getAll() {
    return this.todo_list;
  }

  get(index) {
    if (index >= 0 && index < this.todo_list.length) {
      return this.todo_list[index];
    }
    return null;
  }

  clear() {
    this.todo_list = [];
  }
}
// var todo_list=[];
// const new_todo = new Todo(todo_list); //test file will automatically create a object , also in the test file the Todo() constructor is empty ,
  module.exports = Todo;  // so we don't need to pass todolist obje rather we will create empty todo array inside the constructor.
