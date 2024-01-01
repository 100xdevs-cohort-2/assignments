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
    this.data = [];
  }
  add(todo) {
    this.data.push(todo);
  }
  remove(indexOfTodo) {
    this.data.splice(indexOfTodo, 1);
  }
  update(index, updatedTodo) {
    if (this.data.length - 1 < index) {
      return;
    } 
    else {
      this.data.splice(index, 1, updatedTodo);
    }
  }
  getAll() {
    return this.data;
  }
  get(indexOfTodo) {
    if(indexOfTodo>this.data.length-1)
    {
      return null;
    }
    else
    {
    return this.data[indexOfTodo];
    }
  }
  clear() {
    this.data = [];
  }
}

module.exports = Todo;
