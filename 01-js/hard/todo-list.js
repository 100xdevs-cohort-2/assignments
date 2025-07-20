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
  // class provides us blueprint and we will implement objects from it, all the properties inside the object will be implemented using the constructor
  constructor() {
    this.allTodos = [];
  }

  // there are 3 ways to create methods inside teh class using normal function, arrow function and anonyamous function
  add(todoName) {
    this.allTodos.push(todoName);
  }

  remove(index) {
    if(index >= this.allTodos.length) {
      return;
    }

    const result = [];
    for(let i = 0 ; i < this.allTodos.length ; i++) {
      if(i === index) {
        continue;
      }

      result.push(this.allTodos[i]);
    }

    this.allTodos = result;
  }

  update(index, updateTodo) {
    if(index >= this.allTodos.length ) {
      return
    }

    this.allTodos[index] = updateTodo;
  }

  getAll() {
    return this.allTodos
  }

  get(index) {
    if( index < 0 || index >= this.allTodos.length) {
      return null; // if the index is invalid or array does not contains elements => return null
    }

    return this.allTodos[index];
  }

  clear() {
    this.allTodos = []
  }
}

module.exports = Todo;
