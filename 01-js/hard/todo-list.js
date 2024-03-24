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
      this.array = [];
  }
  add(str) {
      this.array.push(str);
  }
  remove(index) {
      if(index>(this.array.length-1)) {
        return null;
      }
      this.array.splice(index,1);
  }
  update(index, str) {
      if(index>(this.array.length-1)) {
          return null;
      }
      this.array.splice(index,1,str);
  }
  getAll() {
      return this.array;
  }
  get(index) {
    if(index>(this.array.length-1)) {
      return null;
    }
    return this.array[index];
  }
  clear() {
      this.array = [];
  }
}

module.exports = Todo;
