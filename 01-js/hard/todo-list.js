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
    this.lsitOfTodos = [];
  }

  add(item) {
    this.lsitOfTodos.push(item);
  }

  remove(indexOfTodo) {
    if (indexOfTodo < this.lsitOfTodos.length) {
      this.lsitOfTodos.splice(indexOfTodo, 1);
    }
  }

  update(index, updatedTodo) {
    if (index < this.lsitOfTodos.length) {
      this.lsitOfTodos[index] = updatedTodo;
    } else {
      return ("NOT A VALID INDEX");
    }
  }

  getAll() {
    return this.lsitOfTodos;
  }

  get(indexOfTodo) {
    if (indexOfTodo < this.lsitOfTodos.length) {
      return this.lsitOfTodos[indexOfTodo];
    } else {
      return null;
    }
  }

  clear() {
    this.lsitOfTodos = [];
  }



}
// let todo1 = new Todo();
// console.log(todo1);
// todo1.add("COHORT 2 CLass");
// console.log(todo1);
module.exports = Todo;
