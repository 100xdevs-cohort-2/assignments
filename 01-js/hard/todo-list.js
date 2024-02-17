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
    this.todoArr = new Array();
  }
  
  add (todo) {
    return this.todoArr.push(todo);
  }

  remove (indexOfTodo) {
    if(indexOfTodo >= this.todoArr.length) return;
    this.todoArr = this.todoArr.slice(0,indexOfTodo).concat(this.todoArr.slice(indexOfTodo + 1));
  }

  update (index, updatedTodo) {
    if(index >= this.todoArr.length) return;
    this.todoArr[index] = updatedTodo;
  }

  getAll()
  {
    return this.todoArr;
  }

  get(indexOfTodo) {
    if(indexOfTodo >= this.todoArr.length) return null;
    return this.todoArr[indexOfTodo];
  }

  clear() {
    this.todoArr = new Array();
  }

}

module.exports = Todo;
